import "@stdlib/deploy";
message InternalAddTons {
    amount: Int as coins;
    origin: Address;
}
message InternalSubTons {
    origin: Address;
}

contract MemeCrashChild {
    const MinTonForStorage: Int = ton("0.01");
    parent: Address;
    owner: Address; // every child holds the balance of a different owner
    balance: Int as coins;
    init(parent: Address, owner: Address){
        self.parent = parent;
        self.owner = owner;
        self.balance = 0;
    }

    receive(msg: InternalAddTons){
        //or try origin
        require(sender() == self.parent, "Access denied");
        self.balance = (self.balance + msg.amount);
    }

    receive(msg: InternalSubTons){
        require(sender() == self.parent, "Access denied");
        self.balance = 0;
    }

    get fun predictionBalance(): Int {
        return self.balance;
    }
}
message Predict {
    queryId: Int as uint64;
    amount: Int as coins;
    roundNumber: Int as uint64;
    predictionNumber: Int as uint64;
}
message Withdraw {
    amount: Int as coins;
}
message Claim {
    amount: Int as coins;
    sender: Address;
}
message NewPredictionEvent {
    amount: Int as coins;
    roundNumber: Int as uint64;
    predictionNumber: Int as uint64;
    sender: Address;
}
message ClaimEvent {
    amount: Int as coins;
    roundNumber: Int as uint64;
    predictionNumber: Int as uint64;
    sender: Address;
}

contract MemeCashPool with Deployable {
    const MinTonForStorage: Int = ton("0.01");
    const minTonToDeployContract: Int = ton("0.03");
    deployer: Address;
    balance: Int as coins;
    init(){
        self.deployer = sender();
        self.balance = 0;
    }

    receive(msg: Predict){
        let init: StateInit = initOf MemeCrashChild(myAddress(), sender());
        // Notify the caller that the receiver was executed and forward remaining value back
        send(SendParameters{
                to: contractAddress(init),
                body: InternalAddTons{amount: msg.amount, origin: myAddress()}.toCell(),
                value: self.minTonToDeployContract, // pay for the deployment and leave some TON in the child for storage
                mode: SendIgnoreErrors,
                code: init.code, // deploy the child if needed
                data: init.data
            }
        );
        self.balance = (self.balance + (context().value - self.minTonToDeployContract));
        emit(NewPredictionEvent{
                amount: (context().value - self.minTonToDeployContract),
                predictionNumber: msg.predictionNumber,
                roundNumber: msg.roundNumber,
                sender: sender()
            }.toCell()
        );
    }

    receive(msg: Withdraw){
        require(sender() == self.deployer, "Only deployer is allowed to withdraw");
        let amount: Int = min(msg.amount, ((myBalance() - context().value) - self.MinTonForStorage));
        require(amount > 0, "Insufficient balance");
        send(SendParameters{
                to: sender(),
                bounce: true,
                value: msg.amount,
                mode: (SendRemainingValue + SendIgnoreErrors)
            }
        );
    }

    receive(msg: Claim){
        let init: StateInit = initOf MemeCrashChild(myAddress(), sender());
        require(msg.amount > 0, "Insufficient balance");
        require(msg.amount <= myBalance(), "Withdraw Amount Too much => Master ");
        let amount: Int = min(msg.amount, ((myBalance() - context().value) - self.MinTonForStorage));
        send(SendParameters{
                to: contractAddress(init),
                body: InternalSubTons{origin: myAddress()}.toCell(),
                value: self.minTonToDeployContract, // pay for the deployment and leave some TON in the child for storage
                mode: SendIgnoreErrors,
                code: init.code, // deploy the child if needed
                data: init.data
            }
        );
        send(SendParameters{to: sender(), bounce: true, value: amount, mode: (SendRemainingValue + SendIgnoreErrors)});
    }

    get fun myPoolBalance(): Int {
        return self.balance;
    }

    get fun getPredictorStoreAddress(address: Address): Address {
        let init: StateInit = initOf MemeCrashChild(myAddress(), address);
        return contractAddress(init);
    }
}
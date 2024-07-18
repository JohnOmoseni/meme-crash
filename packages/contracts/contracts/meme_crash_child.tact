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

    get fun getBalance(): Int {
        return self.balance;
    }
}
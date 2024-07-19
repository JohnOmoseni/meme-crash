# TACT Compilation Report
Contract: MemeCrashChild
BOC Size: 716 bytes

# Types
Total Types: 13

## StateInit
TLB: `_ code:^cell data:^cell = StateInit`
Signature: `StateInit{code:^cell,data:^cell}`

## Context
TLB: `_ bounced:bool sender:address value:int257 raw:^slice = Context`
Signature: `Context{bounced:bool,sender:address,value:int257,raw:^slice}`

## SendParameters
TLB: `_ bounce:bool to:address value:int257 mode:int257 body:Maybe ^cell code:Maybe ^cell data:Maybe ^cell = SendParameters`
Signature: `SendParameters{bounce:bool,to:address,value:int257,mode:int257,body:Maybe ^cell,code:Maybe ^cell,data:Maybe ^cell}`

## Deploy
TLB: `deploy#946a98b6 queryId:uint64 = Deploy`
Signature: `Deploy{queryId:uint64}`

## DeployOk
TLB: `deploy_ok#aff90f57 queryId:uint64 = DeployOk`
Signature: `DeployOk{queryId:uint64}`

## FactoryDeploy
TLB: `factory_deploy#6d0ff13b queryId:uint64 cashback:address = FactoryDeploy`
Signature: `FactoryDeploy{queryId:uint64,cashback:address}`

## InternalAddTons
TLB: `internal_add_tons#65e974bc amount:coins origin:address = InternalAddTons`
Signature: `InternalAddTons{amount:coins,origin:address}`

## InternalSubTons
TLB: `internal_sub_tons#4c9bec15 origin:address = InternalSubTons`
Signature: `InternalSubTons{origin:address}`

## Predict
TLB: `predict#785f977e queryId:uint64 amount:coins roundNumber:uint64 predictionNumber:uint64 = Predict`
Signature: `Predict{queryId:uint64,amount:coins,roundNumber:uint64,predictionNumber:uint64}`

## Withdraw
TLB: `withdraw#0ba69751 amount:coins = Withdraw`
Signature: `Withdraw{amount:coins}`

## Claim
TLB: `claim#2ab0a803 amount:coins sender:address = Claim`
Signature: `Claim{amount:coins,sender:address}`

## NewPredictionEvent
TLB: `new_prediction_event#f503fdc2 amount:coins roundNumber:uint64 predictionNumber:uint64 sender:address = NewPredictionEvent`
Signature: `NewPredictionEvent{amount:coins,roundNumber:uint64,predictionNumber:uint64,sender:address}`

## ClaimEvent
TLB: `claim_event#d7d5cae7 amount:coins roundNumber:uint64 predictionNumber:uint64 sender:address = ClaimEvent`
Signature: `ClaimEvent{amount:coins,roundNumber:uint64,predictionNumber:uint64,sender:address}`

# Get Methods
Total Get Methods: 1

## predictionBalance

# Error Codes
2: Stack underflow
3: Stack overflow
4: Integer overflow
5: Integer out of expected range
6: Invalid opcode
7: Type check error
8: Cell overflow
9: Cell underflow
10: Dictionary error
13: Out of gas error
32: Method ID not found
34: Action is invalid or not supported
37: Not enough TON
38: Not enough extra-currencies
128: Null reference exception
129: Invalid serialization prefix
130: Invalid incoming message
131: Constraints error
132: Access denied
133: Contract stopped
134: Invalid argument
135: Code of a contract was not found
136: Invalid address
137: Masterchain support is not enabled for this contract
15509: Only deployer is allowed to withdraw
24495: Withdraw Amount Too much => Master
49469: Access denied
54615: Insufficient balance
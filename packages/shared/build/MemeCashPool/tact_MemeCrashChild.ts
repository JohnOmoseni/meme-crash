import { 
    Cell,
    Slice, 
    Address, 
    Builder, 
    beginCell, 
    ComputeError, 
    TupleItem, 
    TupleReader, 
    Dictionary, 
    contractAddress, 
    ContractProvider, 
    Sender, 
    Contract, 
    ContractABI, 
    ABIType,
    ABIGetter,
    ABIReceiver,
    TupleBuilder,
    DictionaryValue
} from '@ton/core';

export type StateInit = {
    $$type: 'StateInit';
    code: Cell;
    data: Cell;
}

export function storeStateInit(src: StateInit) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeRef(src.code);
        b_0.storeRef(src.data);
    };
}

export function loadStateInit(slice: Slice) {
    let sc_0 = slice;
    let _code = sc_0.loadRef();
    let _data = sc_0.loadRef();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function loadTupleStateInit(source: TupleReader) {
    let _code = source.readCell();
    let _data = source.readCell();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function storeTupleStateInit(source: StateInit) {
    let builder = new TupleBuilder();
    builder.writeCell(source.code);
    builder.writeCell(source.data);
    return builder.build();
}

function dictValueParserStateInit(): DictionaryValue<StateInit> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeStateInit(src)).endCell());
        },
        parse: (src) => {
            return loadStateInit(src.loadRef().beginParse());
        }
    }
}

export type Context = {
    $$type: 'Context';
    bounced: boolean;
    sender: Address;
    value: bigint;
    raw: Cell;
}

export function storeContext(src: Context) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeBit(src.bounced);
        b_0.storeAddress(src.sender);
        b_0.storeInt(src.value, 257);
        b_0.storeRef(src.raw);
    };
}

export function loadContext(slice: Slice) {
    let sc_0 = slice;
    let _bounced = sc_0.loadBit();
    let _sender = sc_0.loadAddress();
    let _value = sc_0.loadIntBig(257);
    let _raw = sc_0.loadRef();
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function loadTupleContext(source: TupleReader) {
    let _bounced = source.readBoolean();
    let _sender = source.readAddress();
    let _value = source.readBigNumber();
    let _raw = source.readCell();
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function storeTupleContext(source: Context) {
    let builder = new TupleBuilder();
    builder.writeBoolean(source.bounced);
    builder.writeAddress(source.sender);
    builder.writeNumber(source.value);
    builder.writeSlice(source.raw);
    return builder.build();
}

function dictValueParserContext(): DictionaryValue<Context> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeContext(src)).endCell());
        },
        parse: (src) => {
            return loadContext(src.loadRef().beginParse());
        }
    }
}

export type SendParameters = {
    $$type: 'SendParameters';
    bounce: boolean;
    to: Address;
    value: bigint;
    mode: bigint;
    body: Cell | null;
    code: Cell | null;
    data: Cell | null;
}

export function storeSendParameters(src: SendParameters) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeBit(src.bounce);
        b_0.storeAddress(src.to);
        b_0.storeInt(src.value, 257);
        b_0.storeInt(src.mode, 257);
        if (src.body !== null && src.body !== undefined) { b_0.storeBit(true).storeRef(src.body); } else { b_0.storeBit(false); }
        if (src.code !== null && src.code !== undefined) { b_0.storeBit(true).storeRef(src.code); } else { b_0.storeBit(false); }
        if (src.data !== null && src.data !== undefined) { b_0.storeBit(true).storeRef(src.data); } else { b_0.storeBit(false); }
    };
}

export function loadSendParameters(slice: Slice) {
    let sc_0 = slice;
    let _bounce = sc_0.loadBit();
    let _to = sc_0.loadAddress();
    let _value = sc_0.loadIntBig(257);
    let _mode = sc_0.loadIntBig(257);
    let _body = sc_0.loadBit() ? sc_0.loadRef() : null;
    let _code = sc_0.loadBit() ? sc_0.loadRef() : null;
    let _data = sc_0.loadBit() ? sc_0.loadRef() : null;
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function loadTupleSendParameters(source: TupleReader) {
    let _bounce = source.readBoolean();
    let _to = source.readAddress();
    let _value = source.readBigNumber();
    let _mode = source.readBigNumber();
    let _body = source.readCellOpt();
    let _code = source.readCellOpt();
    let _data = source.readCellOpt();
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function storeTupleSendParameters(source: SendParameters) {
    let builder = new TupleBuilder();
    builder.writeBoolean(source.bounce);
    builder.writeAddress(source.to);
    builder.writeNumber(source.value);
    builder.writeNumber(source.mode);
    builder.writeCell(source.body);
    builder.writeCell(source.code);
    builder.writeCell(source.data);
    return builder.build();
}

function dictValueParserSendParameters(): DictionaryValue<SendParameters> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeSendParameters(src)).endCell());
        },
        parse: (src) => {
            return loadSendParameters(src.loadRef().beginParse());
        }
    }
}

export type Deploy = {
    $$type: 'Deploy';
    queryId: bigint;
}

export function storeDeploy(src: Deploy) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2490013878, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadDeploy(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2490013878) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'Deploy' as const, queryId: _queryId };
}

function loadTupleDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'Deploy' as const, queryId: _queryId };
}

function storeTupleDeploy(source: Deploy) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserDeploy(): DictionaryValue<Deploy> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeDeploy(src)).endCell());
        },
        parse: (src) => {
            return loadDeploy(src.loadRef().beginParse());
        }
    }
}

export type DeployOk = {
    $$type: 'DeployOk';
    queryId: bigint;
}

export function storeDeployOk(src: DeployOk) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2952335191, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadDeployOk(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2952335191) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function loadTupleDeployOk(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function storeTupleDeployOk(source: DeployOk) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserDeployOk(): DictionaryValue<DeployOk> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeDeployOk(src)).endCell());
        },
        parse: (src) => {
            return loadDeployOk(src.loadRef().beginParse());
        }
    }
}

export type FactoryDeploy = {
    $$type: 'FactoryDeploy';
    queryId: bigint;
    cashback: Address;
}

export function storeFactoryDeploy(src: FactoryDeploy) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1829761339, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.cashback);
    };
}

export function loadFactoryDeploy(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1829761339) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _cashback = sc_0.loadAddress();
    return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}

function loadTupleFactoryDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _cashback = source.readAddress();
    return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}

function storeTupleFactoryDeploy(source: FactoryDeploy) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeAddress(source.cashback);
    return builder.build();
}

function dictValueParserFactoryDeploy(): DictionaryValue<FactoryDeploy> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeFactoryDeploy(src)).endCell());
        },
        parse: (src) => {
            return loadFactoryDeploy(src.loadRef().beginParse());
        }
    }
}

export type InternalAddTons = {
    $$type: 'InternalAddTons';
    amount: bigint;
    origin: Address;
}

export function storeInternalAddTons(src: InternalAddTons) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1709798588, 32);
        b_0.storeCoins(src.amount);
        b_0.storeAddress(src.origin);
    };
}

export function loadInternalAddTons(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1709798588) { throw Error('Invalid prefix'); }
    let _amount = sc_0.loadCoins();
    let _origin = sc_0.loadAddress();
    return { $$type: 'InternalAddTons' as const, amount: _amount, origin: _origin };
}

function loadTupleInternalAddTons(source: TupleReader) {
    let _amount = source.readBigNumber();
    let _origin = source.readAddress();
    return { $$type: 'InternalAddTons' as const, amount: _amount, origin: _origin };
}

function storeTupleInternalAddTons(source: InternalAddTons) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.amount);
    builder.writeAddress(source.origin);
    return builder.build();
}

function dictValueParserInternalAddTons(): DictionaryValue<InternalAddTons> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeInternalAddTons(src)).endCell());
        },
        parse: (src) => {
            return loadInternalAddTons(src.loadRef().beginParse());
        }
    }
}

export type InternalSubTons = {
    $$type: 'InternalSubTons';
    origin: Address;
}

export function storeInternalSubTons(src: InternalSubTons) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1285286933, 32);
        b_0.storeAddress(src.origin);
    };
}

export function loadInternalSubTons(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1285286933) { throw Error('Invalid prefix'); }
    let _origin = sc_0.loadAddress();
    return { $$type: 'InternalSubTons' as const, origin: _origin };
}

function loadTupleInternalSubTons(source: TupleReader) {
    let _origin = source.readAddress();
    return { $$type: 'InternalSubTons' as const, origin: _origin };
}

function storeTupleInternalSubTons(source: InternalSubTons) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.origin);
    return builder.build();
}

function dictValueParserInternalSubTons(): DictionaryValue<InternalSubTons> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeInternalSubTons(src)).endCell());
        },
        parse: (src) => {
            return loadInternalSubTons(src.loadRef().beginParse());
        }
    }
}

export type Predict = {
    $$type: 'Predict';
    queryId: bigint;
    amount: bigint;
    roundNumber: bigint;
    predictionNumber: bigint;
}

export function storePredict(src: Predict) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2019530622, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeCoins(src.amount);
        b_0.storeUint(src.roundNumber, 64);
        b_0.storeUint(src.predictionNumber, 64);
    };
}

export function loadPredict(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2019530622) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _amount = sc_0.loadCoins();
    let _roundNumber = sc_0.loadUintBig(64);
    let _predictionNumber = sc_0.loadUintBig(64);
    return { $$type: 'Predict' as const, queryId: _queryId, amount: _amount, roundNumber: _roundNumber, predictionNumber: _predictionNumber };
}

function loadTuplePredict(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _amount = source.readBigNumber();
    let _roundNumber = source.readBigNumber();
    let _predictionNumber = source.readBigNumber();
    return { $$type: 'Predict' as const, queryId: _queryId, amount: _amount, roundNumber: _roundNumber, predictionNumber: _predictionNumber };
}

function storeTuplePredict(source: Predict) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeNumber(source.amount);
    builder.writeNumber(source.roundNumber);
    builder.writeNumber(source.predictionNumber);
    return builder.build();
}

function dictValueParserPredict(): DictionaryValue<Predict> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storePredict(src)).endCell());
        },
        parse: (src) => {
            return loadPredict(src.loadRef().beginParse());
        }
    }
}

export type Withdraw = {
    $$type: 'Withdraw';
    amount: bigint;
}

export function storeWithdraw(src: Withdraw) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(195467089, 32);
        b_0.storeCoins(src.amount);
    };
}

export function loadWithdraw(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 195467089) { throw Error('Invalid prefix'); }
    let _amount = sc_0.loadCoins();
    return { $$type: 'Withdraw' as const, amount: _amount };
}

function loadTupleWithdraw(source: TupleReader) {
    let _amount = source.readBigNumber();
    return { $$type: 'Withdraw' as const, amount: _amount };
}

function storeTupleWithdraw(source: Withdraw) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.amount);
    return builder.build();
}

function dictValueParserWithdraw(): DictionaryValue<Withdraw> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeWithdraw(src)).endCell());
        },
        parse: (src) => {
            return loadWithdraw(src.loadRef().beginParse());
        }
    }
}

export type Claim = {
    $$type: 'Claim';
    amount: bigint;
    sender: Address;
}

export function storeClaim(src: Claim) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(716220419, 32);
        b_0.storeCoins(src.amount);
        b_0.storeAddress(src.sender);
    };
}

export function loadClaim(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 716220419) { throw Error('Invalid prefix'); }
    let _amount = sc_0.loadCoins();
    let _sender = sc_0.loadAddress();
    return { $$type: 'Claim' as const, amount: _amount, sender: _sender };
}

function loadTupleClaim(source: TupleReader) {
    let _amount = source.readBigNumber();
    let _sender = source.readAddress();
    return { $$type: 'Claim' as const, amount: _amount, sender: _sender };
}

function storeTupleClaim(source: Claim) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.amount);
    builder.writeAddress(source.sender);
    return builder.build();
}

function dictValueParserClaim(): DictionaryValue<Claim> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeClaim(src)).endCell());
        },
        parse: (src) => {
            return loadClaim(src.loadRef().beginParse());
        }
    }
}

export type NewPredictionEvent = {
    $$type: 'NewPredictionEvent';
    amount: bigint;
    roundNumber: bigint;
    predictionNumber: bigint;
    sender: Address;
}

export function storeNewPredictionEvent(src: NewPredictionEvent) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(4110679490, 32);
        b_0.storeCoins(src.amount);
        b_0.storeUint(src.roundNumber, 64);
        b_0.storeUint(src.predictionNumber, 64);
        b_0.storeAddress(src.sender);
    };
}

export function loadNewPredictionEvent(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 4110679490) { throw Error('Invalid prefix'); }
    let _amount = sc_0.loadCoins();
    let _roundNumber = sc_0.loadUintBig(64);
    let _predictionNumber = sc_0.loadUintBig(64);
    let _sender = sc_0.loadAddress();
    return { $$type: 'NewPredictionEvent' as const, amount: _amount, roundNumber: _roundNumber, predictionNumber: _predictionNumber, sender: _sender };
}

function loadTupleNewPredictionEvent(source: TupleReader) {
    let _amount = source.readBigNumber();
    let _roundNumber = source.readBigNumber();
    let _predictionNumber = source.readBigNumber();
    let _sender = source.readAddress();
    return { $$type: 'NewPredictionEvent' as const, amount: _amount, roundNumber: _roundNumber, predictionNumber: _predictionNumber, sender: _sender };
}

function storeTupleNewPredictionEvent(source: NewPredictionEvent) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.amount);
    builder.writeNumber(source.roundNumber);
    builder.writeNumber(source.predictionNumber);
    builder.writeAddress(source.sender);
    return builder.build();
}

function dictValueParserNewPredictionEvent(): DictionaryValue<NewPredictionEvent> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeNewPredictionEvent(src)).endCell());
        },
        parse: (src) => {
            return loadNewPredictionEvent(src.loadRef().beginParse());
        }
    }
}

export type ClaimEvent = {
    $$type: 'ClaimEvent';
    amount: bigint;
    roundNumber: bigint;
    predictionNumber: bigint;
    sender: Address;
}

export function storeClaimEvent(src: ClaimEvent) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(3621112551, 32);
        b_0.storeCoins(src.amount);
        b_0.storeUint(src.roundNumber, 64);
        b_0.storeUint(src.predictionNumber, 64);
        b_0.storeAddress(src.sender);
    };
}

export function loadClaimEvent(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 3621112551) { throw Error('Invalid prefix'); }
    let _amount = sc_0.loadCoins();
    let _roundNumber = sc_0.loadUintBig(64);
    let _predictionNumber = sc_0.loadUintBig(64);
    let _sender = sc_0.loadAddress();
    return { $$type: 'ClaimEvent' as const, amount: _amount, roundNumber: _roundNumber, predictionNumber: _predictionNumber, sender: _sender };
}

function loadTupleClaimEvent(source: TupleReader) {
    let _amount = source.readBigNumber();
    let _roundNumber = source.readBigNumber();
    let _predictionNumber = source.readBigNumber();
    let _sender = source.readAddress();
    return { $$type: 'ClaimEvent' as const, amount: _amount, roundNumber: _roundNumber, predictionNumber: _predictionNumber, sender: _sender };
}

function storeTupleClaimEvent(source: ClaimEvent) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.amount);
    builder.writeNumber(source.roundNumber);
    builder.writeNumber(source.predictionNumber);
    builder.writeAddress(source.sender);
    return builder.build();
}

function dictValueParserClaimEvent(): DictionaryValue<ClaimEvent> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeClaimEvent(src)).endCell());
        },
        parse: (src) => {
            return loadClaimEvent(src.loadRef().beginParse());
        }
    }
}

 type MemeCrashChild_init_args = {
    $$type: 'MemeCrashChild_init_args';
    parent: Address;
    owner: Address;
}

function initMemeCrashChild_init_args(src: MemeCrashChild_init_args) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeAddress(src.parent);
        b_0.storeAddress(src.owner);
    };
}

async function MemeCrashChild_init(parent: Address, owner: Address) {
    const __code = Cell.fromBase64('te6ccgECEQEAAsAAART/APSkE/S88sgLAQIBYgIDA3rQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxVEts88uCCCwQFAgFYBwgB0gGSMH/gcCHXScIflTAg1wsf3iCCEGXpdLy6jkEw0x8BghBl6XS8uvLggfoA+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiBJsEjCCAME9+EJSUMcF8vSgf+CCEEyb7BW64wIwcAYAnsj4QwHMfwHKAFUgWiDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFlgg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxYB+gLJ7VQAeNMfAYIQTJvsFbry4IH6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIMVuCAME9+EJSMMcF8vRwfwIDl7AJCgIBSA8QAg+gC2zzbPGwxgsMALejRgnBc7D1dLK57HoTsOdZKhRtmgnCd1jUtK2R8syLTry398WI5gnAgVcAbgGdjlM5YOq5HJbLDgnAb1J3vlUWW8cdT094FWcMmgnCdl05as07LczoOlm2UZuikgG87UTQ1AH4Y9IAAY5G+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiAH6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIAfoAVSBsE+D4KNcLCoMJuvLgiQ0AAiABivpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiBIC0QHbPA4AAnAAEbCvu1E0NIAAYAB1sm7jQ1aXBmczovL1FtUmdlRHJIRjR3NTFyVzJTcUdiREhQMU5uMmdtM0JQNXBQeEVSdmI4Q1UyejKCA=');
    const __system = Cell.fromBase64('te6cckECEwEAAsoAAQHAAQEFoT1DAgEU/wD0pBP0vPLICwMCAWIECAN60AHQ0wMBcbCjAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IhUUFMDbwT4YQL4Yts8VRLbPPLgggsFBwHSAZIwf+BwIddJwh+VMCDXCx/eIIIQZel0vLqOQTDTHwGCEGXpdLy68uCB+gD6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIEmwSMIIAwT34QlJQxwXy9KB/4IIQTJvsFbrjAjBwBgB40x8BghBMm+wVuvLggfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgxW4IAwT34QlIwxwXy9HB/AJ7I+EMBzH8BygBVIFog10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxZYINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WAfoCye1UAgFYCRACA5ewCg8CD6ALbPNs8bDGCw4BvO1E0NQB+GPSAAGORvpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiAH6AFUgbBPg+CjXCwqDCbry4IkMAYr6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgSAtEB2zwNAAJwAAIgALejRgnBc7D1dLK57HoTsOdZKhRtmgnCd1jUtK2R8syLTry398WI5gnAgVcAbgGdjlM5YOq5HJbLDgnAb1J3vlUWW8cdT094FWcMmgnCdl05as07LczoOlm2UZuikgIBSBESABGwr7tRNDSAAGAAdbJu40NWlwZnM6Ly9RbVJnZURySEY0dzUxclcyU3FHYkRIUDFObjJnbTNCUDVwUHhFUnZiOENVMnoyggphfCLg==');
    let builder = beginCell();
    builder.storeRef(__system);
    builder.storeUint(0, 1);
    initMemeCrashChild_init_args({ $$type: 'MemeCrashChild_init_args', parent, owner })(builder);
    const __data = builder.endCell();
    return { code: __code, data: __data };
}

const MemeCrashChild_errors: { [key: number]: { message: string } } = {
    2: { message: `Stack underflow` },
    3: { message: `Stack overflow` },
    4: { message: `Integer overflow` },
    5: { message: `Integer out of expected range` },
    6: { message: `Invalid opcode` },
    7: { message: `Type check error` },
    8: { message: `Cell overflow` },
    9: { message: `Cell underflow` },
    10: { message: `Dictionary error` },
    13: { message: `Out of gas error` },
    32: { message: `Method ID not found` },
    34: { message: `Action is invalid or not supported` },
    37: { message: `Not enough TON` },
    38: { message: `Not enough extra-currencies` },
    128: { message: `Null reference exception` },
    129: { message: `Invalid serialization prefix` },
    130: { message: `Invalid incoming message` },
    131: { message: `Constraints error` },
    132: { message: `Access denied` },
    133: { message: `Contract stopped` },
    134: { message: `Invalid argument` },
    135: { message: `Code of a contract was not found` },
    136: { message: `Invalid address` },
    137: { message: `Masterchain support is not enabled for this contract` },
    15509: { message: `Only deployer is allowed to withdraw` },
    24495: { message: `Withdraw Amount Too much => Master ` },
    49469: { message: `Access denied` },
    54615: { message: `Insufficient balance` },
}

const MemeCrashChild_types: ABIType[] = [
    {"name":"StateInit","header":null,"fields":[{"name":"code","type":{"kind":"simple","type":"cell","optional":false}},{"name":"data","type":{"kind":"simple","type":"cell","optional":false}}]},
    {"name":"Context","header":null,"fields":[{"name":"bounced","type":{"kind":"simple","type":"bool","optional":false}},{"name":"sender","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"raw","type":{"kind":"simple","type":"slice","optional":false}}]},
    {"name":"SendParameters","header":null,"fields":[{"name":"bounce","type":{"kind":"simple","type":"bool","optional":false}},{"name":"to","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"mode","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"body","type":{"kind":"simple","type":"cell","optional":true}},{"name":"code","type":{"kind":"simple","type":"cell","optional":true}},{"name":"data","type":{"kind":"simple","type":"cell","optional":true}}]},
    {"name":"Deploy","header":2490013878,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"DeployOk","header":2952335191,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"FactoryDeploy","header":1829761339,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"cashback","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"InternalAddTons","header":1709798588,"fields":[{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"origin","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"InternalSubTons","header":1285286933,"fields":[{"name":"origin","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"Predict","header":2019530622,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"roundNumber","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"predictionNumber","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"Withdraw","header":195467089,"fields":[{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}}]},
    {"name":"Claim","header":716220419,"fields":[{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"sender","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"NewPredictionEvent","header":4110679490,"fields":[{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"roundNumber","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"predictionNumber","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"sender","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"ClaimEvent","header":3621112551,"fields":[{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"roundNumber","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"predictionNumber","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"sender","type":{"kind":"simple","type":"address","optional":false}}]},
]

const MemeCrashChild_getters: ABIGetter[] = [
    {"name":"predictionBalance","arguments":[],"returnType":{"kind":"simple","type":"int","optional":false,"format":257}},
]

const MemeCrashChild_receivers: ABIReceiver[] = [
    {"receiver":"internal","message":{"kind":"typed","type":"InternalAddTons"}},
    {"receiver":"internal","message":{"kind":"typed","type":"InternalSubTons"}},
]

export class MemeCrashChild implements Contract {
    
    static async init(parent: Address, owner: Address) {
        return await MemeCrashChild_init(parent, owner);
    }
    
    static async fromInit(parent: Address, owner: Address) {
        const init = await MemeCrashChild_init(parent, owner);
        const address = contractAddress(0, init);
        return new MemeCrashChild(address, init);
    }
    
    static fromAddress(address: Address) {
        return new MemeCrashChild(address);
    }
    
    readonly address: Address; 
    readonly init?: { code: Cell, data: Cell };
    readonly abi: ContractABI = {
        types:  MemeCrashChild_types,
        getters: MemeCrashChild_getters,
        receivers: MemeCrashChild_receivers,
        errors: MemeCrashChild_errors,
    };
    
    private constructor(address: Address, init?: { code: Cell, data: Cell }) {
        this.address = address;
        this.init = init;
    }
    
    async send(provider: ContractProvider, via: Sender, args: { value: bigint, bounce?: boolean| null | undefined }, message: InternalAddTons | InternalSubTons) {
        
        let body: Cell | null = null;
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'InternalAddTons') {
            body = beginCell().store(storeInternalAddTons(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'InternalSubTons') {
            body = beginCell().store(storeInternalSubTons(message)).endCell();
        }
        if (body === null) { throw new Error('Invalid message type'); }
        
        await provider.internal(via, { ...args, body: body });
        
    }
    
    async getPredictionBalance(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('predictionBalance', builder.build())).stack;
        let result = source.readBigNumber();
        return result;
    }
    
}
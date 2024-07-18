import { Blockchain, SandboxContract, TreasuryContract } from '@ton/sandbox';
import { toNano } from '@ton/core';
import { MemeCashPool } from '../wrappers/MemeCashPool';
import '@ton/test-utils';
import { MemeCrashChild } from '../build/MemeCashPool/tact_MemeCrashChild';

describe('MemeCashPool', () => {
    let blockchain: Blockchain;
    let deployer: SandboxContract<TreasuryContract>;
    let bettor1: SandboxContract<TreasuryContract>;
    let bettor2: SandboxContract<TreasuryContract>;
    let memeCashPool: SandboxContract<MemeCashPool>;

    beforeEach(async () => {
        blockchain = await Blockchain.create();

        memeCashPool = blockchain.openContract(await MemeCashPool.fromInit());

        deployer = await blockchain.treasury('deployer');
        bettor1 = await blockchain.treasury('bettor1');
        bettor2 = await blockchain.treasury('bettor2');

        const deployResult = await memeCashPool.send(
            deployer.getSender(),
            {
                value: toNano('0.05'),
            },
            {
                $$type: 'Deploy',
                queryId: 0n,
            },
        );

        expect(deployResult.transactions).toHaveTransaction({
            from: deployer.address,
            to: memeCashPool.address,
            deploy: true,
            success: true,
        });
    });

    it('should deploy', async () => {
        // the check is done inside beforeEach
        // blockchain and memeCashPool are ready to use
    });

    it('should predict', async () => {
        const increaser = await blockchain.treasury('increaser');

        let poolBalance = await memeCashPool.getMyPoolBalance();

        console.log('counter before increasing', poolBalance);

        const increaseResult = await memeCashPool.send(
            increaser.getSender(),
            {
                value: toNano('10.03'),
            },
            {
                $$type: 'Predict',
                queryId: 0n,
                amount: toNano('10.03'),
                roundNumber: 1n,
                predictionNumber: toNano('300'),
            },
        );
        expect(increaseResult.transactions).toHaveTransaction({
            from: increaser.address,
            to: memeCashPool.address,
            success: true,
        });
        poolBalance = await memeCashPool.getMyPoolBalance();
        console.log('counter', poolBalance);

        expect(poolBalance).toEqual(toNano('10'));
    });
    it('shouldnt claim', async () => {
        const increaser = await blockchain.treasury('increaser');
        let poolBalance = await memeCashPool.getMyPoolBalance();

        console.log('poolbalance', poolBalance);

        const increaseResult = await memeCashPool.send(
            increaser.getSender(),
            {
                value: toNano('0.04'),
            },
            {
                $$type: 'Claim',
                amount: toNano('10'),
                sender: deployer.address,
            },
        );
        expect(increaseResult.transactions).toHaveTransaction({
            from: increaser.address,
            to: memeCashPool.address,
            success: false,
        });
    });
    it('should claim', async () => {
        const increaser = await blockchain.treasury('increaser');
        let poolBalance = await memeCashPool.getMyPoolBalance();

        console.log('poolbalance', poolBalance);

        const predictResult = await memeCashPool.send(
            increaser.getSender(),
            {
                value: toNano('10.03'),
            },
            {
                $$type: 'Predict',
                queryId: 0n,
                amount: toNano('10.03'),
                roundNumber: 1n,
                predictionNumber: toNano('300'),
            },
        );
        expect(predictResult.transactions).toHaveTransaction({
            from: increaser.address,
            to: memeCashPool.address,
            success: true,
        });
        poolBalance = await memeCashPool.getMyPoolBalance();

        console.log('poolbalance', poolBalance);
        const increaseResult = await memeCashPool.send(
            increaser.getSender(),
            {
                value: toNano('0.04'),
            },
            {
                $$type: 'Claim',
                amount: toNano('10'),
                sender: deployer.address,
            },
        );
        poolBalance = await memeCashPool.getMyPoolBalance();

        console.log('poolbalance', poolBalance);
        expect(increaseResult.transactions).toHaveTransaction({
            from: increaser.address,
            to: memeCashPool.address,
            success: true,
        });
    });
    it('should fetch user details from storeContract', async () => {
        const increaser = await blockchain.treasury('increaser');
        let poolBalance = await memeCashPool.getMyPoolBalance();

        console.log('poolbalance', poolBalance);

        const predictResult = await memeCashPool.send(
            increaser.getSender(),
            {
                value: toNano('10.03'),
            },
            {
                $$type: 'Predict',
                queryId: 0n,
                amount: toNano('10'),
                roundNumber: 1n,
                predictionNumber: toNano('300'),
            },
        );
        const userStoreAddress = await memeCashPool.getGetPredictorStoreAddress(increaser.address);
        const userStoreContract = MemeCrashChild.fromAddress(userStoreAddress);
        expect(predictResult.transactions).toHaveTransaction({
            from: increaser.address,
            to: memeCashPool.address,
            success: true,
        });
        poolBalance = await memeCashPool.getMyPoolBalance();
        let storeBalance = await userStoreContract.getPredictionBalance(blockchain.provider(userStoreAddress));
        expect(poolBalance).toEqual(storeBalance);

        const increaseResult = await memeCashPool.send(
            increaser.getSender(),
            {
                value: toNano('0.04'),
            },
            {
                $$type: 'Claim',
                amount: toNano('10'),
                sender: deployer.address,
            },
        );
        expect(increaseResult.transactions).toHaveTransaction({
            from: increaser.address,
            to: memeCashPool.address,
            success: true,
        });
        poolBalance = await memeCashPool.getMyPoolBalance();

        storeBalance = await userStoreContract.getPredictionBalance(blockchain.provider(userStoreAddress));
        console.log({ poolBalance, storeBalance });
        expect(0n).toEqual(storeBalance);
    });
});

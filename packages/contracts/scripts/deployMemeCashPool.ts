import { toNano } from '@ton/core';
import { MemeCashPool } from '../wrappers/MemeCashPool';
import { NetworkProvider } from '@ton/blueprint';

export async function run(provider: NetworkProvider) {
    const memeCashPool = provider.open(await MemeCashPool.fromInit());

    await memeCashPool.send(
        provider.sender(),
        {
            value: toNano('0.05'),
        },
        {
            $$type: 'Deploy',
            queryId: 0n,
        },
    );

    await provider.waitForDeploy(memeCashPool.address);

    console.log('ID', await memeCashPool.getMyPoolBalance());
}

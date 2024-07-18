import { toNano } from '@ton/core';
import { MemeCrashChild } from '../wrappers/MemeCrashChild';
import { NetworkProvider } from '@ton/blueprint';

export async function run(provider: NetworkProvider) {
    const memeCrashChild = provider.open(await MemeCrashChild.fromInit(BigInt(Math.floor(Math.random() * 10000))));

    await memeCrashChild.send(
        provider.sender(),
        {
            value: toNano('0.05'),
        },
        {
            $$type: 'Deploy',
            queryId: 0n,
        }
    );

    await provider.waitForDeploy(memeCrashChild.address);

    console.log('ID', await memeCrashChild.getId());
}

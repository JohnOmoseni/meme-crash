import { CompilerConfig } from '@ton/blueprint';

export const compile: CompilerConfig = {
    lang: 'tact',
    target: 'contracts/meme_cash_pool.tact',
    options: {
        debug: true,
    },
};

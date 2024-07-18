import { CompilerConfig } from '@ton/blueprint';

export const compile: CompilerConfig = {
    lang: 'tact',
    target: 'contracts/meme_crash_child.tact',
    options: {
        debug: true,
    },
};

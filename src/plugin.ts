import type { PluginClass } from 'ultimate-crosscode-typedefs/modloader/mod'
import type { Mod1 } from './types'
import ccmod from '../ccmod.json'

export default class TsTemplateEsbuild implements PluginClass {
    static dir: string
    static mod: Mod1
    static manifset: typeof import('../ccmod.json') = ccmod

    constructor(mod: Mod1) {
        TsTemplateEsbuild.dir = mod.baseDirectory
        TsTemplateEsbuild.mod = mod
        TsTemplateEsbuild.mod.isCCL3 = mod.findAllAssets ? true : false
        TsTemplateEsbuild.mod.isCCModPacked = mod.baseDirectory.endsWith('.ccmod/')
    }

    async prestart() {}

    async poststart() {}
}

import { Mod1 } from './types'

export default class TsTemplateEsbuild {
    static dir: string
    static mod: Mod1

    constructor(mod: Mod1) {
        TsTemplateEsbuild.dir = mod.baseDirectory
        TsTemplateEsbuild.mod = mod
        TsTemplateEsbuild.mod.isCCL3 = mod.findAllAssets ? true : false
        TsTemplateEsbuild.mod.isCCModPacked = mod.baseDirectory.endsWith('.ccmod/')
    }

    async prestart() {
        console.log('cc-ts-template-esbuild prestart')
    }

    async poststart() {
        console.log('cc-ts-template-esbuild poststart')
    }
}

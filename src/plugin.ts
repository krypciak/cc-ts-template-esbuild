import type { PluginClass } from 'ultimate-crosscode-typedefs/modloader/mod'
import type { Mod1 } from './types'
import { setModMetadata } from './mod-metadata'

export default class TsTemplateEsbuild implements PluginClass {
    constructor(mod: Mod1) {
        setModMetadata(mod)
    }

    async prestart() {}

    async poststart() {}
}

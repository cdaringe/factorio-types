interface Serpent {
    dump(this: void, a: object, options: SerpentOptions): string
    line(this: void, a: object, options: SerpentOptions): string
    block(this: void, a: object, options: SerpentOptions): string
    load(this: void, str: string, options?: {safe?: boolean}): string
}

interface SerpentOptions {
    indent?: string
    comment?: boolean | number
    sortkeys?: boolean | ((this: void, keys: any[], table: object) => void)
    sparse?: boolean
    compact?: boolean
    fatal?: boolean
    nocode?: boolean
    nohuge?: boolean
    maxlevel?: number
    maxnum?: number
    maxlength?: number
    metatostring?: boolean
    numformat?: string
    valignore?: string[]
    keyallow?: string[]
    keyignore?: string[]
    valtypeignore?: string[]
    custom?: (tag: string, head: string, body: string, tail: string, level?: number) => void
    name?: string
}

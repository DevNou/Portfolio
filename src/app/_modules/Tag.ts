export class Tag{
    static readonly ANGULAR = new Tag('Angular','red')
    static readonly TYPESCRIPT = new Tag('TypeScript','darkred')
    static readonly CSHARP = new Tag('C#','lightblue')
    static readonly JAVASCRIPT = new Tag('JavaScript','orange')
    static readonly C = new Tag('C','purple')
    static readonly JAVA = new Tag('Java','grey')
    static readonly PYTHON = new Tag('Python','yellow')


private constructor(private readonly key: string, public readonly color:string){}
toString()
{
    return this.key;
}
}
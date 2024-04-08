export class Project{
    constructor(public data:{
        id: number,
        name: string,
        description: string | null,
        htmlUrl: string,
        createdAt: Date,
        languagesUrl: string,
        homepage: string | null,
        tags?: string[]
    }){
    }
}


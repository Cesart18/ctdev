

export class Repository{
    constructor(public data:{
        id: number | string,
        name?: string,
        description?: string | null,
        htmlUrl?: string,
        createdAt: Date,
        homepage?: string | null,
    }){
    }
    
}


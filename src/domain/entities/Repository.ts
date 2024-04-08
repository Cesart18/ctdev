

export class Repository{
    constructor(public data:{
        id: number | string,
        name?: string,
        description?: string | null,
        htmlUrl?: string,
        createdAt: Date,
        languagesUrl?: string,
        homepage?: string | null,
        tags?: string[]
    }){
        this.getTags();
    }
    async getTags() {
        try {
            const response = await fetch(this.data.languagesUrl!);
            const languagesData = await response.json();

            // Assuming languagesUrl returns an object where keys are languages 
            this.data.tags = Object.keys(languagesData); 
        } catch (error) {
            console.error("Error fetching tags:", error);
            // Handle the error appropriately (e.g., by setting default tags)
        }
    }
}


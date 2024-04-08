export class Projects{
    constructor(
        public id: number,
        public description: string | null,
        public htmlUrl: string,
        public createdAt: Date,
        public languagesUrl: string,

    ){

    }
}
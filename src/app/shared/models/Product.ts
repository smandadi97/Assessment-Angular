export class Product {
    constructor(id:number) {
        this.id = id;
    }
    id:number;
    brand!:string;
    description!:string;
    price!:number;
    imgurl!:string;
    detaileddesc?:string;
    

}
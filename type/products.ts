
export interface Product{
    _id : string;
    name : string;
    _type : "product";
    price : number;
    description : string;
    image?: {
        asset : {
            _ref : "image";
        }
    };
    discountPercentage: number;
    category: string;
}
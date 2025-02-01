
export interface Product{
    quantity: number;
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
    stock: number;
    reviews: [];
}
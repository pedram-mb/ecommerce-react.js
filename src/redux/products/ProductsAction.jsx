import { SET_PRODUCTS } from "./ProductsActionType";

const products = [
    {
        id : 1,
        name : "galaxy s22 plus",
        discription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, architecto!",
        image : "https://dkstatics-public.digikala.com/digikala-products/cf2b967630cb84c3e43fb141c887515819fa7ab3_1644744869.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
        price : 400,
    },
    {
        id : 2,
        name : "galaxy s22 ultra",
        discription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, architecto!",
        image : "https://dkstatics-public.digikala.com/digikala-products/3b80e5838f5ff4f674f82d5615296c06cd4f9f8c_1660628839.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
        price : 590,
    },
    {
        id : 3,
        name : "iphone 13 pro max",
        discription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, architecto!",
        image : "https://dkstatics-public.digikala.com/digikala-products/fa5961b7d2a4efb180d686f6f69dd45381a4d3dd_1649056488.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
        price : 650,
    },
    {
        id : 4,
        name : "galaxy 13",
        discription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, architecto!",
        image : "https://dkstatics-public.digikala.com/digikala-products/ec9a962187e1f82cc47e7a148ef99ec1c6fd024d_1656423242.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
        price : 300,
    },
]

export const GetProducts = ()=>{
    return{
        type : SET_PRODUCTS,
        paylaod : products,
    }
}
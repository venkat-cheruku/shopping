
import axios from "axios";
const productURL = 'https://dummyjson.com/products';
const categoryURL = "https://dummyjson.com/products/categories";
const productByCategoryURL = "https://dummyjson.com/products/category"

export const getAllProductService=()=>
axios.get(productURL);

export const getproductCategoryServices=()=>
axios.get(categoryURL);

export const getproductByCategoryServices=(category)=>
axios.get(`${productByCategoryURL}/${category}`);
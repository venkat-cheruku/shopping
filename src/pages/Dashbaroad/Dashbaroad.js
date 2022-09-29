import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { getAllProductService, getproductCategoryServices ,getproductByCategoryServices} from "../../services/dashbaroadAPI";
import Product from "../../components/Product";
import { Category } from "@mui/icons-material";


const Dashbaroad = () => {
    const [products, setproducts] = useState([]);
    const [categoryList, setCategoryList] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    useEffect(() => {
        getAllProductService().then(res => {
            setproducts(res?.data?.products);
        })
    }, []);
    useEffect(() => {
        getproductCategoryServices().then(res => {
            setCategoryList(res?.data);
        })
    }, []);

    useEffect(() => {
        if(selectedCategory){
        getproductByCategoryServices(selectedCategory).then(res => {
            //setCategoryList(res?.data);
            //console.log("use effect",res)
            setproducts(res?.data?.products);
        })
    }
    }, [selectedCategory]);
    const onCategoryClick = (category) => {
        setSelectedCategory(category );
    }
    //console.log("selected",selectedCategory)
    return (
        <div>
            <Grid container spacing={2}>
                <ul className="category-list">
                    {categoryList?.map((category) =>
                        <li key={category} onClick={() => onCategoryClick(category)}>{category}</li>

                    )}
                </ul>
                {products?.map((product) =>
                    <Grid item xs={3}>
                        <Product item={product} />
                    </Grid>
                )}
            </Grid>
        </div>
    )
}
export default Dashbaroad;
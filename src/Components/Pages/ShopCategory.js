import React, { useEffect } from 'react'
import "../Pages/CSS/ShopCategory.css"
import { useDispatch, useSelector } from 'react-redux'
import { fetchProduct } from '../../Redux/Slice/ProductSlice';
import dropdown_icon from "../Assests/dropdown_icon.png"
import Item from '../Item/Item';
 
function ShopCategory(props) {
    const dispatch = useDispatch();
    const products = useSelector(state=>state.productReducer.products);

    useEffect(()=>{
        dispatch(fetchProduct())
    },[dispatch])
  return (
    <div className='shop-category'>
        <img className='shopcategory-banner' src={props.banner} alt="" />
        <div className="shopcategory-indexSort">
            <p>
                <span>Showing 1-12</span> out of 36 products
            </p>
            <div className="shopcategory-sort">
                Sort by <img src={dropdown_icon} alt="" />
            </div>
        </div>
        <div className="shopcategory-products">
            {products.map((item,i)=>{
                if(props.category === item.category)
                {
                   return <Item key={i} props = {item}/>
                }else{
                    return null;
                }
            })}
        </div>
        <div className="shopcategory-loadmore">
            Explore More
        </div>
    </div>
  )
}

export default ShopCategory
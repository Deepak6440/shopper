import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import Breadcums from '../Breadcums/Breadcums';
import ProductDisplay from '../ProductDisplay/ProductDisplay';
import { fetchProduct } from '../../Redux/Slice/ProductSlice';
import Descriptionbox from '../DescriptionBox/Descriptionbox';
import RelatedProducts from '../RelatedProducts/RelatedProducts';

function Product() {
  const products = useSelector(state=>state.productReducer.products);
  const {id} = useParams();
  const dispatch = useDispatch();

  // useEffect(()=>{
  //   fetchProduct();
  // },[dispatch])

  useEffect(() => {
    const fetchData = async () => {
      // Dispatch action to fetch products
      await dispatch(fetchProduct());
    };

    fetchData();
  }, [dispatch]);

 // console.log(products);
  const product = products.find((p) => p.id === Number(id));

 
  if(!product)
  {
    return <div>Product Not Found..</div>
  }

  return (
    <div>
      <Breadcums product = {product}/>
      <ProductDisplay product = {product} />
      <Descriptionbox/>
      <RelatedProducts/>
    </div>
  )
}

export default Product
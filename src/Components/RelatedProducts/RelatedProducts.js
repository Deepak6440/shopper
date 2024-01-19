import React from 'react'
import data_product from '../Assests/data'
import Item from '../Item/Item'
import "../RelatedProducts/RelatedProducts.css"
function RelatedProducts() {
  return (
    <div className='Relatedproducts'>
        <h1>Related Products</h1>
        <hr />
        <div className="relatedproducts-item">
        {data_product.map((item,i)=>{
            return <Item key={i} props={item}/>
        })}
        </div>
    </div>
  )
}

export default RelatedProducts
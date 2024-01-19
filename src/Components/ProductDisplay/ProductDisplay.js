import React from 'react'
import "../ProductDisplay/ProductDisplay.css"
import star_icon from "../Assests/star_icon.png";
import start_dull_icon from "../Assests/star_dull_icon.png";
import { useDispatch, useSelector } from 'react-redux';
import { addtoCart } from '../../Redux/Slice/CartSlice';
 
function ProductDisplay(props) {
    const {product} = props;
    const dispatch = useDispatch();
    const handleAddToCart = () => {
        // Dispatch the addToCart action with the product id
        dispatch(addtoCart(product.id));
      };
    const cart = useSelector((state)=> state.cartReducer.cart);
  return (
    <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img className="productdisplay-main-img" src={product.image} alt="" />
                </div>
            </div>
           <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={start_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="productdisply-right-prices">
                    <div className="productdisply-right-price-old">${product.old_price}</div>
                    <div className="productdisply-right-price-new">${product.new_price}</div>
                </div>
                <div className="productdisplay-right-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, nisi totam. Repellendus laboriosam earum ipsa eius nemo delectus! Assumenda velit optio alias enim quam hic praesentium obcaecati atque, tenetur nesciunt?
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                {cart.find((item) => item.id === product.id) ? (
                    <p>This products is already in your cart</p>
                ):(
                    <button onClick={handleAddToCart}> ADD TO CART</button>
                )}
                
                <p className='productdisplay-right-category'><span>Category :</span> Women, T-shirt, Crop-top</p>
                <p className='productdisplay-right-category'><span>Tags :</span> Modern, Latesh</p>
           </div>
    </div>
  )
}

export default ProductDisplay
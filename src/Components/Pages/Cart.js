import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../../Redux/Slice/ProductSlice';
import CartItems from '../CartItems/CartItems';
import "../CartItems/CartItems.css"

function Cart() {
  const cart = useSelector((state) => state.cartReducer.cart);
  const productsList = useSelector((state) => state.productReducer.products);
  const dispatch = useDispatch();
  const [cartDetails, setCartDetails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Dispatch action to fetch products
      await dispatch(fetchProduct());
    };

    fetchData();
  }, [dispatch]);

  useEffect(() => {
    // Update the cart details whenever the cart or product page changes
    if (productsList && cart) {
      const updateCartDetails = cart.map((cartItem) => {
        const productDetails = productsList.find((product) => product.id === cartItem.id);
        return {
          ...cartItem,
          ...productDetails,
        };
      });
      setCartDetails(updateCartDetails);
    }
  }, [cart, productsList]);

  return cartDetails.length === 0 ? (
    <p className='cartempty'>No items in the cart. Please shop now!</p>
  ) : (
    <div className='cartitems'>
      <table className='cart-table'>
        <thead>
          <tr>
            <th>Products</th>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {cartDetails.map((item) => (
            <CartItems key={item.id} item={item} />
          ))}
        </tbody>
      </table>

      <div className="cartitems-down">
        <div className="cartitems-total">
            <h1>cart Totals</h1>
            <div>
                <div className='cartitems-total-items'>
                    <p>Subtotal</p>
                    <p>${cartDetails.reduce((total, item) => total + item.new_price * item.quantity, 0)}</p>
                </div>
                <hr />
                <div className='cartitems-total-items'> 
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className='cartitems-total-items'>
                    <h3>Total</h3>    
                    <h3>${cartDetails.reduce((total, item) => total + item.new_price * item.quantity, 0)}</h3>
                 </div>
                 <button className='process'>PROCEED TO CHECKOUT</button>
            </div>
          </div>
           <div className="cartitemspromo-code">
            <p>If you have a promo code, Enter it here</p>
            <div className="cart-item-promobox">
                <input type="text"placeholder='promo code' />
                <button className='promo-code'>Submit</button>
            </div>
           </div>
        </div>
      </div>
    

    
  );
}

export default Cart;
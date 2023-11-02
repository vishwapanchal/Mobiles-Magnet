import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';

export const Product = (props) => {
    const { id, productName, price, productImage } = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);
    const cartItemCount = cartItems[id];

    return (
        <div className='product'>
            <img src={productImage} alt={productName} />
            <div className="description">
                <p><b>{productName}</b></p>
                <p>&#8377;{price}</p>
                <br />
                <button type="button" class="btn btn-primary" onClick={() => addToCart(id)}><i class='bx bxs-shopping-bag'></i> Add to cart {cartItemCount > 0 && <> ({cartItemCount})</>}</button><hr style={{color:'black'}}/>

            </div>
        </div>
    );
};

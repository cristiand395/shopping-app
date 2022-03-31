import React , { useState } from 'react';
import iconAddToCart from '../assets/icons/bt_add_to_cart.svg'
import '../styles/ProductItem.scss';

const ProductItem = ({product}) => {
	const [cart, setCart] = useState([]);

	const handleClick = () => {
		console.log('click');
	}

	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt="" />
			<div className="product-info">
				<div>
					<p>{product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={handleClick}>
					<img src={iconAddToCart} alt="Add to cart" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
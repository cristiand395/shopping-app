import React, { useContext} from 'react';
import AppContext from '../context/AppContext';
import iconClose from '../assets/icons/icon_close.svg'
import '../styles/OrderItem.scss';

const OrderItem = ({product}) => {
	const { removeFromCart } = useContext(AppContext);

	const handleRemove = item => {
		removeFromCart(item);
	}
	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>${product.price}</p>
			<img src={iconClose} alt="close" onClick={() => handleRemove(product)}/>
		</div>
	);
}

export default OrderItem;
import React from 'react';
import iconArrow from '../assets/icons/flechita.svg'
import '../styles/Order.scss';

const Order = () => {
	return (
		<div className="Order">
			<p>
				<span>03.25.21</span>
				<span>6 articles</span>
			</p>
			<p>$560.00</p>
			<img src={iconArrow} alt="arrow" />
		</div>
	);
}

export default Order;
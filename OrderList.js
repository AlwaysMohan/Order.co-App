import React, { useEffect, useState } from 'react';
import { getOrders } from './auth';

const OrderList = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const data = await getOrders();
                setOrders(data);
            } catch (error) {
                console.error('Error fetching orders:', error);
            }
        };

        fetchOrders();
    }, []);

    return (
        <div>
            {orders.map(order => (
                <div key={order._id}>
                    <h2>Order {order._id}</h2>
                    <p>Total Price: {order.totalPrice}</p>
                    {order.products.map(item => (
                        <div key={item.product._id}>
                            <p>Product: {item.product.name}</p>
                            <p>Quantity: {item.quantity}</p>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default OrderList;

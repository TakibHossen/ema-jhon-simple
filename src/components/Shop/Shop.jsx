import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import { Link } from 'react-router-dom';

const Shop = () => {
    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([]);

    useEffect(() =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    useEffect( () =>{
        const storedCart = getShoppingCart();
        const savedCart = [];
        // console.log(storedCart)
        // step:1 get data 
        for(const id in storedCart){
            //step 2: get the using product by useing id 
            const addedProduct = products.find(product => product.id === id);
            // step 3: get quantity of the product 
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                // step 4: add the added product to the saved cart 
                savedCart.push(addedProduct);
            }
        }
        // step 5: set the cart 
        setCart(savedCart);
    }, [products])

    const handleAddToCart =(product) =>{
        let newCart = [];
        // const newCart = [...cart, product]
        const exists = cart.find(pd => pd.id === product.id);
        if(!exists){
            product.quantity =1;
            newCart = [...cart, product]
        }
        else{
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining, exists];
        }
        setCart(newCart)
        addToDb(product.id)
    }

    const handleClearCart = () =>{
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                {/* <h2>product coming soon: {products.length}</h2> */}

                {
                    products.map(product => <Product 
                    key = {product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart 
                    cart={cart}
                    handleClearCart={handleClearCart}
                >
                    <Link className='procced-link' to="/orders">
                        <button className='btn-procced'>Review Order</button>
                    </Link>
                </Cart>
            </div>
            
        </div>
    );
};

export default Shop;
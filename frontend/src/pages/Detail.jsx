import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProduct } from '../redux/features/ProductSlice'

const Detail = () => {

    const { id } = useParams();

    const dispatch = useDispatch()
    const { products } = useSelector((state) => state.products)
  
    const [findProduct, setFindProduct] = useState(null);

    useEffect(() => {
        dispatch(getProduct());
    }, [dispatch]);

    useEffect(() => {
        if (products.length > 0) {
            const product = products.find((product) => product._id === id );
            setFindProduct(product);
        }
    }, [products, id]);

  if (!findProduct) {
    return <p>Loading...</p>; 
  }

  
  return (
    <div>
      <h1>Məhsulun Təfərrüatları</h1>
      <div className="product-image">
        <img className="img" src={findProduct.image} alt="Product Image" />
      </div>

      <div className="product-details">
        <h4 className="product-title">{findProduct.name}</h4>
        <p className="product-category">Kateqoriya: {findProduct.category}</p>
        <p className="product-price">${findProduct.price}</p>
      </div>
    </div>
  );
}

export default Detail
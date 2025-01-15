import React from 'react'
import './Card.scss'
import { useDispatch, useSelector } from 'react-redux'
import { addBasket } from '../../redux/features/basketSlice'
import { useNavigate } from 'react-router-dom'

const Card = ({ product }) => {
    const dispatch = useDispatch()

    const navigate = useNavigate()
   const addTobasket = (e, product)=>{
    e.stopPropagation()
    dispatch(addBasket(product))
   }
    
  return (
    <div className="h-100" onClick={()=>{
        navigate(`/productdetail/${product._id}`)
    }}>
      <img src={product.image} className="card-img-top" alt={product.name}  />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">Price: ${product.price}</p>
        <p className="card-text">Category: {product.category}</p>
        <button className="btn btn-primary w-100" onClick={(e)=>{
            addTobasket(e, product)
        }}>Add to cart</button>
      </div>
    </div>
  )
}

export default Card

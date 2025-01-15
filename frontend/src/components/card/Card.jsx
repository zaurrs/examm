import React, { useState, useEffect } from 'react'
import './Card.scss'
import { useDispatch, useSelector } from 'react-redux'
import { addBasket } from '../../redux/features/basketSlice'
import { useNavigate } from 'react-router-dom'
import { addWishlist, deleteWishlist } from '../../redux/features/Wishlist'

const Card = ({ product }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { wishlist } = useSelector((state) => state.wishlist)
    const [heart, setHeart] = useState(false)

    useEffect(() => {
        const existProduct = wishlist.find((item) => item._id === product._id)
        if (existProduct) {
            setHeart(true)
        }
    }, [wishlist, product._id])

    const addToBasket = (e, product) => {
        e.stopPropagation()
        dispatch(addBasket(product))
    }

    const handleAddToWishlist = (e, product) => {
        e.stopPropagation()
        if (!heart) {
            dispatch(addWishlist(product))
        } else {
            dispatch(deleteWishlist(product))
        }
        setHeart(!heart)
    }

    return (
        <div className="h-100" onClick={() => {
            navigate(`/productdetail/${product._id}`)
        }}>
            {
                heart ? (
                    <i style={{ color: "red" }} onClick={(e) => {
                        handleAddToWishlist(e, product)
                    }} className="fa-solid fa-heart"></i>
                ) : (
                    <i className="fa-regular fa-heart" onClick={(e) => {
                        handleAddToWishlist(e, product)
                    }}></i>
                )
            }
            <img src={product.image} className="card-img-top" alt={product.name} />
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Price: ${product.price}</p>
                <p className="card-text">Category: {product.category}</p>
                <button className="btn btn-primary w-100" onClick={(e) => {
                    addToBasket(e, product)
                }}>Add to cart</button>
            </div>
        </div>
    )
}

export default Card

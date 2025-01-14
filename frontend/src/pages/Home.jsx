import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../redux/features/ProductSlice'

const Home = () => {

  const dispatch = useDispatch()
  const products = useSelector((state)=>state.products)
  useEffect(()=>{
    dispatch(getProduct())
  },[dispatch])
  console.log(products);
  
  return (
    <div>


    </div>
  )
}

export default Home
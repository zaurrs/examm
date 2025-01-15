import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../redux/features/ProductSlice'
import Card from '../components/card/Card'

const Home = () => {
  const dispatch = useDispatch()
  const { products } = useSelector((state) => state.products)

  useEffect(() => {
    dispatch(getProduct())
  }, [dispatch])

  return (
    <div className="container mt-4">
      <div className="row">
        {products.map((product) => (
          <div className="col-4 card" key={product._id}>
            <Card product={product} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home

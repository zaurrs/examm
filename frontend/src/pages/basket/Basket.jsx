import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Table from 'react-bootstrap/Table';
import "./Basket.scss"
import { deleteBasket } from '../../redux/features/basketSlice';
const Basket = () => {

  const dispatch = useDispatch()

  const {products} = useSelector((state)=>state.basket)
  console.log(products);

  const deleteBasketto =(pro)=>{
    dispatch(deleteBasket(pro))

  }
  
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th> Name</th>
            <th>prıce</th>
            <th>category</th>
            <th>quantity</th>
          </tr>
        </thead>
        <tbody>
            {
              products && products.map((pro)=>(
                <tr key={pro._id}>
                <td><img className='asd' src={pro.image} alt="" /></td>
                <td>{pro.name}</td>
                <td>{pro.price}</td>
                <td>{pro.category}</td>
                <td>{pro.quantity}</td>
                <button onClick={()=>{
                  deleteBasketto(pro)
                }}>delete</button>
          </tr>
              ))
            }
          
        </tbody>
      </Table>
    );
}

export default Basket
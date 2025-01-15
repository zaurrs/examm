import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import { deleteWishlist } from '../../redux/features/Wishlist';

const Wish = () => {
    const dispatch = useDispatch()
    const { wishlist } = useSelector((state) => state.wishlist)
    console.log(wishlist);
    
    const deletewishto = (pro) => {
        dispatch(deleteWishlist(pro))
    }

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th> Name</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    wishlist && wishlist.map((pro) => (
                        <tr key={pro._id}>
                            <td><img className='asd' src={pro.image} alt="" /></td>
                            <td>{pro.name}</td>
                            <td>{pro.price}</td>
                            <td>{pro.category}</td>
                            <td><button onClick={() => {
                                deletewishto(pro)
                            }}>delete</button></td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>
    );
}

export default Wish;

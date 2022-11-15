import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { ClearFromCart, Decrement, Increment, RemoveFromList } from "../redux/cart/CartAction";

const ShopingCart = () => {
  const {cart} = useSelector((state => state.ShopingCart))
  const dispatch = useDispatch()

  const HandleIncremrnt = (productId)=>{
    dispatch(Increment(productId))
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })
  }

  const HandleDcrement = (productId)=>{
    dispatch(Decrement(productId))
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })
  }

  const HandleDelete = (productId)=>{
    dispatch(RemoveFromList(productId))
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })
  }

  const HandleClearCart = ()=>{
    dispatch(ClearFromCart())
    Swal.fire({
      position: 'top',
      icon: 'warning',
      title: 'Your cart has been clear',
      showConfirmButton: false,
      timer: 1500
    })
  }

  console.log(cart);
  if(cart.length){
    return (
      <div className="container">
        <table className="table mt-5">
          <thead>
            <tr>
              <th scope="col">product</th>
              <th>info</th>
              <th scope="col">price</th>
              <th scope="col">quantity</th>
              <th scope="col">subtotal</th>
              <th scope="col">action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((shoping) => (
              <tr key={shoping.id} className="">
                <td className="col-1">
                      <img style={{height : "80px" , width : "80px"}} src={shoping.image} alt="" />                
                </td>
                <td className="col-5">
                      {shoping.name}
                      <br />
                      {shoping.discription}
                </td>
                <td className="col-1">{shoping.price}</td>
                <td className="col-2">
                    <i onClick={()=> HandleDcrement(shoping.id)} className="bi bi-patch-minus"></i>
                  {shoping.quantity}
                    <i onClick={()=> HandleIncremrnt(shoping.id)} className="bi bi-patch-plus"></i>
                </td>
                <td className="col-1">
                  {shoping.price * shoping.quantity}
                </td>
                <td className="col-2 ">
                  <button onClick={()=>HandleDelete(shoping.id)} className="btn btn-danger col-6">delete</button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr >
              <td>
                <button onClick={()=> HandleClearCart()} className="btn btn-dark">clear cart</button>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <button className="btn btn-success">checked out</button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }else{
    return(
      <div className="text-center mt-5">
        <h3>
          cart empty!!!
          <br />
        </h3>
        <h4 className="mt-3">
          <i className="bi bi-cart-plus"></i>
        </h4>
        <Link to="/products" className="btn btn-dark mt-3">products</Link>
      </div>
    )
  }
};
export default ShopingCart;

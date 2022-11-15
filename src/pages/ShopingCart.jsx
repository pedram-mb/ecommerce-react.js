import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { Decrement, Increment } from "../redux/cart/CartAction";

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

  console.log(cart);
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
              <td className="col-2 text-center">
                <button className="btn btn-success col-6">edit</button>
                <button className="btn btn-danger col-6">delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default ShopingCart;

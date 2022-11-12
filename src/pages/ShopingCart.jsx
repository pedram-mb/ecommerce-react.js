import { useSelector } from "react-redux";

const ShopingCart = () => {
  const { cart } = useSelector((state) => state.shopingCart);

  // console.log(cart);
  return (
    <div className="container">
      <table class="table mt-5">
        <thead>
          <tr>
            <th scope="col">product</th>
            
            <th scope="col">price</th>
            <th scope="col">quantity</th>
            <th scope="col">subtotal</th>
            <th scope="col">action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((shoping) => (
            <tr key={shoping.id} className="">
              <td className="col-6">
                <div className="col-1">
                    {shoping.image}
                </div>
                <div className="col-5">
                    {shoping.name}
                    {shoping.discription}
                </div>
              </td>
              <td className="col-1">{shoping.price}</td>
              <td className="col-2">
                <span>
                  <i className="bi bi-patch-minus"></i>
                </span>
                {shoping.quantity}
                <span>
                  <i className="bi bi-patch-plus"></i>
                </span>
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

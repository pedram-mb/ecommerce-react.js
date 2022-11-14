import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart } from "../redux/cart/CartAction";
import { GetProducts } from "../redux/products/ProductsAction";

const Products = () => {
  const { products } = useSelector((state => state.products));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetProducts());
  }, [dispatch]);
  // console.log(products);

  const HandleAddToCart = (product)=>{
    dispatch(AddToCart(product))
  }

  return (
    <>
    <h5 className="container mt-5">products : </h5>
      <div className="d-flex container mt-3">
        {products.map(product => (
          <div key={product.id} className="card mb-3 p-1" style={{maxWidth: "18rem;"}}>
            <img src={product.image} className="card-img-top" alt="..."></img>
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">
                {product.discription}
              </p>
            </div>
              <div className="card-footer bg-transparent border-dark">
                <span>
                  {product.price}$
                </span>
                <button onClick={()=> HandleAddToCart(product)} className="btn btn-primary">add to cart</button>
              </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Products;

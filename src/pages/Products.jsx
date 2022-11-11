import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GetProducts } from "../redux/products/ProductsAction";

const Products = () => {
  const { products } = useSelector((state => state.products));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetProducts());
  }, [dispatch]);
  console.log(products);

  return (
    <>
    <h5 className="container mt-5">products : </h5>
      <div className="d-flex container mt-3">
        <h2>sssssssss</h2>
        {products.map(product => (
          <div key={product.id} className="card shadow  mb-3 p-1" style={{maxWidth: "18rem;"}}>
            <img src={product.image} className="card-img-top" alt="..."></img>
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">
                {product.discription}
              </p>
            </div>
            <div className="card-footer bg-transparent border-success">{product.price}$</div>
            <Link className="btn btn-primary">bay</Link>
          </div>
        ))}
      </div>
    </>
  );
};
export default Products;

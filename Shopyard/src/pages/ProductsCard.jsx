import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/slices/cartSlice';
import { Toast, ToastContainer } from "react-bootstrap";

const ProductsCard = (props) => {
  const { img, title, price } = props;
  const [isAdded, setIsAdded] = useState(false);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem({ ...props }));
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 3000);
  };

  

  return (
    <>
      <div className="col-lg-10 col-md-6 col-sm-12 mb-6">
        <div className="card h-100 shadow-sm border-0">
          <div className="position-relative">
            <img
              src={img}
              className="card-img-top img-fluid"
              alt="item-img"
              loading="lazy"
              style={{ transition: "transform 0.3s ease-in-out" }}
              onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
              onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
            />
            
          </div>
          <div className="card-body text-center d-flex flex-column justify-content-between">
            <h5 className="card-title fw-bold">{title}</h5>
            <h4 className="card-text text-dark fw-bold">₹ {price.toLocaleString()}</h4>
            <button
            className="btn w-100"
              style={{ backgroundColor: isAdded ? "green" : "peru", color: "white" }}
              onClick={handleAddToCart}
            >
              {isAdded ? "✔ Added" : "🛒 Add to Cart"}
            </button>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      <ToastContainer position="top-end" className="p-3">
        <Toast bg="success" show={isAdded} onClose={() => setIsAdded(false)} delay={3000} autohide>
          <Toast.Body className="text-white">✅ {title} added to cart!</Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
};

export default ProductsCard;

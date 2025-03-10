import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from '../store/slices/cartSlice';




const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleOpenCart = (open) => {
    dispatch(toggleCart(open));
  };

  const cartQuantity = cartItems.length;

  return (
    <header className="bg-light  py-3">
      <div className="container-fluid px-4">
        <nav className="navbar navbar-expand-lg navbar-light">
          
          <div className="ms-auto">
            <button
              className="btn btn-outline-dark position-relative" style={{color:'white',backgroundColor:'peru'}}
              onClick={() => handleOpenCart(true)}
            >
              <img
                src="/images/bag-icon.svg"
                alt="Cart"
                width="24"
                className="me-2"
              />
              Cart
              {cartQuantity > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cartQuantity}
                </span>
              )}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
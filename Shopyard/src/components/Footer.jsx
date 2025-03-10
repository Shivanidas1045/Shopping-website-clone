
import { Button } from "@chakra-ui/react";
import {BsTwitter} from "react-icons/bs";
import { Link } from "react-router-dom";
import {CiFacebook} from "react-icons/ci";
import {AiOutlineInstagram} from "react-icons/ai";


const Footer = () => {
  return (
    <>
      <div className="container mt-5">
    
        <div className="row text-center text-md-start">
          {/* First Section */}
          <div className="col-md-2 mb-3">
            <h5>CUSTOMER CARE</h5>
            <ul className="list-unstyled">
              <li>Feedback</li>
              <li>Track Order</li>
              <li>Shipping Details & Fees</li>
              <li>Returns</li>
              <li>Pricing Policy</li>
              <li>Unsubscribe</li>
              <li>FAQ</li>
            </ul>
          </div>
          
          {/* Second Section */}
          <div className="col-md-2 mb-3">
            <h5>SERVICES</h5>
            <ul className="list-unstyled">
              <li>Lifetime Leather Care</li>
              <li>Product Care</li>
              <li>Repairs</li>
              <li>Bagiose Create Customization</li>
              <li>Chat with a Stylist</li>
              <li>Store Pickup and Virtual Shopping</li>
              <li>Gift Services</li>
              <li>ShopRunner</li>
            </ul>
          </div>
          
          {/* Third Section */}
          <div className="col-md-2 mb-3">
            <h5>SUSTAINABILITY</h5>
            <ul className="list-unstyled">
              <li>Crafted to Last</li>
              <li>Bagiouse (Re)Loved</li>
              <li>Sustainable Materials</li>
              <li>Tapestry Corporate Responsibility</li>
            </ul>
          </div>
          
          {/* Fourth Section */}
          <div className="col-md-2 mb-3">
            <h5>ABOUT US</h5>
            <ul className="list-unstyled">
              <li>Bagiouse Story</li>
              <li>Bagiouse Foundation</li>
              <li>Careers</li>
              <li>Tapestry</li>
              <li>Investor Relations</li>
            </ul>
          </div>
          
          {/* Fifth Section - Subscription */}
          <div className="col-md-4 mb-3">
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Enter Email"
            />
            <button className="btn w-100" style={{backgroundColor:'peru',color:'white'}}>Subscribe</button>
            <p className="mt-2">
              You are signing up to receive Bagiouse emails. You can withdraw your
              consent at any time.
            </p>
            <p>Read our Privacy Policy or Contact Us for more details</p>
            
            {/* Social Icons */}
            <div className="d-flex gap-3">
              <Link to=""><BsTwitter color="peru" size={25} /></Link>
              <Link to=""><CiFacebook color="peru" size={25} /></Link>
              <Link to=""><AiOutlineInstagram color="peru" size={25} /></Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-4 border-top pt-3">
          <div className="row">
            <div className="col-md-6 mb-2">
              <p className="mb-1">TERMS OF USE | PRIVACY POLICY | CA TRANSPARENCY & UK MODERN SLAVERY ACT | DO NOT SELL OR SHARE MY PERSONAL INFO | MANAGE COOKIES | BRAND PROTECTION</p>
            </div>
            <div className="col-md-3 mb-2">
              <p className="mb-1">ACCESSIBILITY | CUSTOMER CARE | FEEDBACK</p>
            </div>
            <div className="col-md-3 mb-2">
              <p>@2023 BAGIOUSE ALL RIGHTS RESERVED</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
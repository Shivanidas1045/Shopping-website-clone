
import { Button } from "@chakra-ui/react";
import "./Footer.css";
import {BsTwitter} from "react-icons/bs";
import { Link } from "react-router-dom";
import {CiFacebook} from "react-icons/ci";
import {AiOutlineInstagram} from "react-icons/ai";

const Footer=()=>{
   
    return (
        <>
        <div className="search">
        </div>

        {/* main footer */}
        <div className="footer">
            {/* first section */}
            <div>
            <h4>CUSTOMER CARE</h4><br></br>
            <p>Feedback</p>
            <p>Track Order</p>
            <p>Shipping Details & Fees</p>
            <p>Returns</p>
            <p>Pricing Policy</p>
            <p>Unsubscribe</p>
            <p>FAQ</p>
            </div>
{/* second section */}
            <div><h4>SERVICES</h4><br></br>
            <p>Lifetime Leather Care</p>
            <p>Product Care</p>
            <p>Repairs</p>
            <p>Bagiose Create Customization</p>
            <p>Chat with a Stylist</p>
            <p>Store Pickup and Virtual Shopping</p>
            <p>Gift Services</p>
            <p>ShopRunner</p></div>
        
        {/* third section */}
        <div><h4>SUSTAINABILITY</h4><br></br>
        <p>Crafted to Last</p>
        <p>Bagiouse (Re)Loved</p>
        <p>Sustainable Materials</p>
        <p>Tapestry Corporate Responsiblity</p></div>
{/* fourth section */}
<div>
    <h4>ABOUT US</h4><br></br>
    <p>Bagiouse Story</p>
    <p>Bagiouse Foundation</p>
    <p>Careers</p>
    <p>Tapestry</p>
    <p>Investor Relations</p>
</div>
{/* fifth section */}

<div>
    <input  type="text" placeholder="Enter Email"></input> <Button>Subscribe</Button>

<p>You are Signing up to receive Bagiouse emails.You can withdraw your consent at any time.</p>
<p>Read our Privacy Policy or Contact Us for more details</p><br />
<Link to=""><BsTwitter color="peru" marginRight="15px" size={25}/></Link>
<Link to=""><CiFacebook color="peru"  marginRight="5px" size={25}/></Link>
<Link to=""><AiOutlineInstagram color="peru"  marginRight="5px" size={25}/></Link>
</div>
</div>
{/* bottom */}
<div className="bottom1">
<div><p>TERMS OF USE</p>
<p>PRIVACY POLICY</p>
<p>CA TRANSPARENCY & UK MODERN SLAVERY ACT</p>
<p>DO NOT SELL OR SHARE MY PERSONAL INFO</p>
<p>MANAGE COOKIES</p>
<p>BRAND PROTECTION</p></div>
<div className="bottom2"/>
<div><p>ACCESSBLITY</p>
<p>CUSTOMER CARE</p>
<p>FEEDBACK</p></div>
<div className="bottom3">
    <p>@2023 BAGIOUSE ALL RIGHTS RESERVED</p>
</div>
</div>


      </>  
    )
    
}
export default Footer;
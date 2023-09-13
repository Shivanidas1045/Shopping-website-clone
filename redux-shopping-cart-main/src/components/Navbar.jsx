import {Link,NavLink} from "react-router-dom";
import "./Navbar.css";




const links=[
    {path:"/",title:"Home"},
    {path:"/product",title:"Product"},
    {path:"/login",title:"Login"},
    {path:"/register",title:"Sign Up"}
   
];

function Navbar(){
    

    <div className="top"><h1>top</h1></div>

    const defaultLinkStyle={textDecoration:"none",color:"black"}
    const activeLinkStyle={textDecoration:"none",color:"#CD853F"}
    return(
        <div className="nav" style={{display:"flex",
      alignItems:"center",
      justifyContent:"space-evenly",
      paddingTop:"30px",
      paddingBottom:"30px",
      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      background:"#FFFACD"
      
      
      }}>
        <img src="https://i.postimg.cc/NFs816sC/si.png" width={"100px"} alt="" />
        {links.map(({path,title})=>(
            <NavLink 
            style={({isActive})=>{
                return isActive ? activeLinkStyle : defaultLinkStyle;
            }}
            key={path}
            to={path}>
                {title}
            </NavLink>
        ))}



      </div>

    )
}
export default Navbar;
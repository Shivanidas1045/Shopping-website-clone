import React from "react";







const Women = () => {
  return (
    <>
      <div className="container text-center my-4">
        {/* Top Section */}
        <h3 className="text-danger fw-bold text-center mt-3 mb-3" style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem" }}>
  Shop the sale to get up to 50% off winter essentials
</h3>
        <img
          className="img-fluid"
          src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2023_CW08/Essentials_Big_desktop_x2_20230222115839.jpg?imwidth=1180&imdensity=1"
          alt="Winter Sale"
        />
      </div>

    
      {/* New Arrivals Section */}
<div className="text-center my-4">
  <p className="text-uppercase fw-bold text-black-50" style={{ color: "peru", fontSize: "1.2rem", letterSpacing: "2px" }}>
    DON'T MISS OUT
  </p>
  <h1 className="fw-bold" style={{ color: "black", fontSize: "2.5rem" }}>New Arrivals</h1>
  <h2 className="fw-semibold text-black-50" style={{ fontSize: "1.5rem" }}>
    Diane von Furstenberg, Alexander McQueen, Loewe, Alaïa...
  </h2>
  <div className="container d-flex justify-content-center my-4">
  <button className="btn btn-danger px-4 py-2 shadow-sm custom-btn">
    <a href="/product">SHOP NOW</a>
  </button></div>
</div>


      {/* Two Boxes Section */}
     
<div className="container text-center row my-5 mx-auto">
  <div className="col-lg-6 p-5 border rounded-3 shadow-lg mx-auto"
       style={{ background: "linear-gradient(to right, peru, black)", color: "white" }}>
    <p className="fw-bold fs-4 text-uppercase">NENSI DOJAKA X MYTHERESA</p>
    <h1 className="fw-bold">NENSI DOJAKA X MYTHERESA</h1>
  </div>
  
  <div className="col-lg-6 p-5 border rounded-3 shadow-lg mx-auto mt-4 mt-lg-0"
       style={{ background: "linear-gradient(to right, black, peru)", color: "white" }}>
    <p className="fw-bold fs-4 text-uppercase">NEW TO SALE</p>
    <h1 className="fw-bold">Ski and cold-weather essentials: <br/> Up to 50% off</h1>
  </div>
</div>


      
    
{/* Bridal Section */}
<div className="container my-5">
  <div className="row g-4">

    {/* Left Side - Large Image with Button */}
    <div className="col-lg-6">
      <div className="position-relative overflow-hidden rounded shadow-lg">
        <img 
          className="img-fluid w-100 rounded hover-zoom"
          src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2023_CW08/CW08_ActboxTall__2x_20230220091053.jpg?imwidth=600&imdensity=1" 
          alt="Bridal Wear"
        />
        
      </div>

      <div className="container d-flex justify-content-center my-4">
  <button className="btn btn-danger px-4 py-2 shadow-sm custom-btn">
    <a href="/product">SHOP NOW</a>
  </button>
</div>

      </div>
    

    {/* Right Side - Two Images with Text Overlay */}
    <div className="col-lg-6 d-flex flex-column justify-content-between">
      
      {/* First Image with Text */}
      <div className="position-relative overflow-hidden rounded shadow-lg">
        <img 
          className="img-fluid w-100 rounded hover-zoom"
          src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2023_CW08/CW08_ActboxSmall_6_2x_20230220091136.jpg?imwidth=600&imdensity=1"
          alt="Balletcore Flats"
        />
        <div className="position-absolute bottom-0 start-50 translate-middle-x mb-3 text-center text-overlay">
          
        </div>
        <p className="fw-bold bg-dark text-white px-3 py-1 rounded mt-10 text-center fs-3">LIGHT ON YOUR FEET</p>
          <h2 className="text-dark text-center fs-5 fw-3">Explore balletcore with dainty flats</h2>
          <p className="text-dark text-center fs-7 fw-5">Find the comfortable footwear!!</p>
          <p className="text-dark text-center fs-8 fw-6">Walk with comfort</p>


          <div className="container d-flex justify-content-center my-4">
  <button className="btn btn-danger px-4 py-2 shadow-sm custom-btn">
    <a href="/product">SHOP NOW</a>
  </button></div>

      </div>

      {/* Second Image */}
      <div className="mt-4">
        <div className="position-relative overflow-hidden rounded shadow-lg">
          <img 
            className="img-fluid w-100  rounded hover-zoom"
            src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2023_CW08/CW08_ActboxSmall_4_2x_20230220091134.jpg?imwidth=600&imdensity=1"
            alt="More Collection"
          />
          <div className="position-absolute bottom-0 start-50 translate-middle-x mb-3 text-center">
         
          </div>
          <div className="container d-flex justify-content-center my-4">
  <button className="btn btn-danger px-4 py-2 shadow-sm custom-btn">
    <a href="/product">SHOP NOW</a>
  </button></div>
        </div>
      </div>

    </div>

  </div>
</div>


      {/* Bag Section */}
      {/* Sunglasses & Luxury Bags Section */}
<div className="container my-5">
  <div className="row g-4 align-items-center text-center">
    
    {/* Sunglasses Section */}
    <div className="col-lg-6">
      <div className="position-relative rounded shadow-lg overflow-hidden">
        <img
          className="img-fluid w-100 rounded hover-zoom"
          src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2023_CW08/CW08_ActboxSmall_2_2x_20230220091134.jpg?imwidth=600&imdensity=1"
          alt="Sunglasses"
        />
        <div className="mt-3">
          <p className="fw-bold text-uppercase text-dark">THE SHADE OF ALL</p>
          <h2 className="text-muted">Get to know new-season sunglasses</h2>
          
        </div>
        <div className="container d-flex justify-content-center my-4">
  <button className="btn btn-danger px-4 py-2 shadow-sm custom-btn">
    <a href="/product">SHOP NOW</a>
  </button></div>
      </div>
    </div>

    {/* Luxury Bags Section */}
    <div className="col-lg-6">
      <div className="position-relative rounded shadow-lg overflow-hidden">
        <img
          className="img-fluid w-100 rounded hover-zoom"
          src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2023_CW08/CW08_ActboxTall_2_2x_20230220091055.jpg?imwidth=600&imdensity=1"
          alt="Luxury Bags"
        />
        
      </div>
      <div className="container d-flex justify-content-center my-4">
  <button className="btn btn-danger px-4 py-2 shadow-sm custom-btn">
    <a href="/product">SHOP NOW</a>
  </button></div>
    </div>

  </div>
</div>


      {/* Bottom Section */}
<div className="text-center my-5">
  <p className="fw-bold text-uppercase text-success">SPRING AWAKENINGS</p>
  <h1 className="fw-bold text-dark">Styles That Welcome Sunshine's Return</h1>
</div>

{/* Brands Section */}
<div className="container">
  <div className="row g-4 justify-content-center">
    {[
      { img: "https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2023_CW08/CW08_FE_642x642_1_2x_20230220091133.jpg", name: "Alaia" },
      { img: "https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2023_CW08/CW08_FE_642x642_2_2x_20230220091136.jpg", name: "Valentino Garavani" },
      { img: "https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2023_CW08/CW08_FE_642x642_3_2x_20230220091137.jpg", name: "Meront Toile" },
      { img: "https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2023_CW08/CW08_FE_642x642_4_2x_20230220091136.jpg", name: "Victoria Beckham" }
    ].map((item, index) => (
      <div key={index} className="col-6 col-md-3">
        <div className="brand-card position-relative overflow-hidden rounded shadow-lg">
          <img className="img-fluid rounded brand-img" src={item.img} alt={item.name} />
          <div className="overlay">
            <p className="fw-bold text-light">{item.name}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

{/* Shop Now Button */}
<div className="text-center my-5">
<div className="container d-flex justify-content-center my-4">
  <button className="btn btn-danger px-4 py-2 shadow-sm custom-btn">
    <a href="/product">SHOP NOW</a>
  </button></div>
</div>
    </>
  );
};

export default Women;

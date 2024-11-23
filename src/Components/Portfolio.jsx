import React from "react";
import photo1 from "../assets/images/poert1.png";
import photo2 from "../assets/images/port2.png";
import photo3 from "../assets/images/port3.png";

const Portfolio = () => {
  return (
    <div style={{ textAlign: "center", padding: "20px", height:"100vh" }}>
      <h1 style={{fontSize:"35px", fontWeight:"bold"}}>PORTFOLIO COMPONENT</h1>
      <div style={{ borderTop: '2px solid #fff', borderBottom: '2px solid #000', width: '20%', margin: '1rem auto' }}></div>
      <div style={{display:"flex", gap:"25px", justifyContent:"center", alignItems:"center" , maxWidth:"1200px" , margin:"20px auto"}}>
        <div style={{borderRadius:"10px", boxShadow:" 0 4px 6px rgba(0, 0, 0, 0.1)", textAlign:"center",width:"300px"}}>
          <img src={photo1} alt="" style={{ borderRadius:"10px", width:"100%"}} />
        </div>
        <div style={{borderRadius:"10px", boxShadow:" 0 4px 6px rgba(0, 0, 0, 0.1)", textAlign:"center",width:"300px"}}>
          <img src={photo2} alt="" style={{ borderRadius:"10px", width:"100%"}} />
        </div>
        <div style={{borderRadius:"10px", boxShadow:" 0 4px 6px rgba(0, 0, 0, 0.1)", textAlign:"center",width:"300px"}}>
          <img src={photo3} alt="" style={{ borderRadius:"10px", width:"100%"}} />
        </div>
       

      </div>
      <div style={{display:"flex", gap:"25px", justifyContent:"center", alignItems:"center" , maxWidth:"1200px" , margin:"20px auto"}}>
        <div style={{borderRadius:"10px", boxShadow:" 0 4px 6px rgba(0, 0, 0, 0.1)", textAlign:"center",width:"300px"}}>
          <img src={photo1} alt="" style={{ borderRadius:"10px", width:"100%"}} />
        </div>
        <div style={{borderRadius:"10px", boxShadow:" 0 4px 6px rgba(0, 0, 0, 0.1)", textAlign:"center",width:"300px"}}>
          <img src={photo2} alt="" style={{ borderRadius:"10px", width:"100%"}} />
        </div>
        <div style={{borderRadius:"10px", boxShadow:" 0 4px 6px rgba(0, 0, 0, 0.1)", textAlign:"center",width:"300px"}}>
          <img src={photo3} alt="" style={{ borderRadius:"10px", width:"100%"}} />
        </div>
       

      </div>
    </div>
  );
};

export default Portfolio;

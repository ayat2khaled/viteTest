import React from "react";
import demo from "../assets/images/avataaars.svg"

const Home = () => {
  return (
    <div style={{ height:"90vh", backgroundColor: "#1ABC9C", color: "#fff",textAlign: "center", padding: "20px", display:"flex", justifyContent:"center", alignItems:"center"}}>
      <div style={{margin:"auto"}}>
        <img src = {demo} alt="profile photo" style={{width:"250px" , margin:"auto"}} />
        <h1 style={{fontSize:"40px", fontWeight:"bold", marginBottom:"10px" , marginTop:"10px"}}>START FRAMEWORK</h1>
        <div style={{ borderTop: '2px solid #fff', borderBottom: '2px solid #fff', width: '50%', margin: '1rem auto' }}></div>
        <p style={{fontSize:"15px", fontWeight:"400"}}>Graphic Artist - Web Designer - Illustrator</p>
      </div>
        
    </div>
  );
};

export default Home;
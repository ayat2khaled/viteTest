import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div  style={{ backgroundColor: '#2c3e50', color: '#fff', padding: '20px ', textAlign: 'center', display:"flex" , justifyContent:"center", alignItems:"center", gap:"30px"}}>
         <div style={{maxWidth:"33.33%" , padding:"20px"}}>
            <h4 style={{fontSize:"25px", fontWeight:"500", paddingTop:"20px"}}>LOCATION</h4>
            <p>2215 John Daniel Drive</p>
            <p style={{paddingTop:"15px", paddingBottom:"20px"}}>Clark, MO 65243</p>
         </div>
         <div style={{maxWidth:"33.33%", padding:"20px", paddingTop:"10px", paddingBottom:"40px"}}>
           <h4 style={{fontSize:"25px", fontWeight:"500"}}>AROUND THE WEB</h4>
           <p>
              <i style={{border: '1px white solid', padding:"10px", borderRadius:"50%"}} _ngcontent-phu-c21="" class="fa-brands fa-facebook mx-1 icon"></i>
              <i style={{border: '1px white solid', padding:"10px", borderRadius:"50%"}} _ngcontent-phu-c21="" class="fa-brands fa-twitter mx-1 icon"></i>
              <i style={{border: '1px white solid', padding:"10px", borderRadius:"50%"}} _ngcontent-phu-c21="" class="fa-brands fa-linkedin-in mx-1 icon"></i>
              <i  style={{border: '1px white solid', padding:"10px", borderRadius:"50%"}} _ngcontent-phu-c21="" class="fa-solid fa-globe mx-1 icon"></i>
           </p>
         </div>
         <div style={{maxWidth:"33.33%", padding:"20px" , paddingTop:"10px", paddingBottom:"40px"}}>
              <h4 style={{fontSize:"25px", fontWeight:"500"}}>ABOUT FREELANCER</h4>
              <p>Freelance is a free to use, licensed Bootstrap theme created by Route.</p>
         </div>
      </div>
      <p style={{backgroundColor: '#333', color: '#fff', padding: '20px ', textAlign: 'center'}}>Copyright © Your Website 2021</p>
    </footer>
  );
};

export default Footer;
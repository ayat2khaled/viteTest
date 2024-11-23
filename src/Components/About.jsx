import React from 'react';

const About = () => {
  return (
    <div style={{ height:"90vh", backgroundColor: "#1ABC9C", color: "#fff",textAlign: "center", padding: "20px", display:"flex", justifyContent:"center", alignItems:"center"}}>
      <div style={{margin:"auto"}}>
          <h2 style={{fontSize:"35px", fontWeight:"bold"}}>ABOUT COMPONENT</h2>
          <div style={{ borderTop: '2px solid #fff', borderBottom: '2px solid #fff', width: '20%', margin: '1rem auto' }}></div>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px"}}>
            <div style={{maxWidth:"50%" , paddingLeft:"100px"}}>
              <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
            <div style={{maxWidth:"50%", paddingRight:"100px"}}>
              <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;

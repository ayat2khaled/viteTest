import React from "react";

const Contact = () => {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1 style={{fontSize:"35px", fontWeight:"bold"}}>CONTACT SECTION</h1>
      <div style={{ borderTop: '2px solid #fff', borderBottom: '2px solid #000', width: '20%', margin: '1rem auto' }}></div>
      <form>
        <input type="text" placeholder="userName" style={styles.input} />
        <input type="text" placeholder="userAge" style={styles.input} />
        <input type="email" placeholder="userEmail" style={styles.input} />
        <input type="email" placeholder="userPassword" style={styles.input} />
        <br />
        <button style={styles.button}>Send Message</button>
      </form>
    </div>
  );
};

const styles = {
  input: { margin: "20px", padding: "10px", width: "60%" , border: "2px solid white", boxShadow:" 0 4px 6px rgba(0, 0, 0, 0.1)"},
  button: { padding: "10px 20px", backgroundColor: "#2c3e50", color: "#fff", border: "none" },
};

export default Contact;
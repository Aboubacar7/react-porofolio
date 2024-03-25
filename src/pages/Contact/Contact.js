// import React, { useEffect, useState } from "react";
// import "./Contact.css";

// function Contact() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [emptyFields, setEmptyFields] = useState([])

//   useEffect(() => {
    
//   }, [emptyFields])
  
//   const requiredFieldsNotification = (<p className="required-fields">Required fields are empty: 
//   {emptyFields.map((f, i)=> {
//     if (i !== 2) {
//       return `${f}, `;
//     } else {
//       return f;
//     }
//   })}
// </p>);
// const handleSubmit = (e) => {
//   e.preventDefault();

//   const mailtoLink = `mailto:dragoaboubacar5@gmail.com?subject=${encodeURIComponent("New message from your website")}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`)}`;

//   // Open the user's default email client with the mailto link
//   window.location.href = mailtoLink;
// };
//   const handleChange = (e) => {
//     if (e.target.name === "name") {
//       setName(e.target.value);
//       if(e.target.value !== "") {
//         setEmptyFields(emptyFields.filter((f)=> f !== e.target.name))
//       } else {
//         setEmptyFields([...emptyFields, e.target.name]);
//       }
//     } else if (e.target.name === "email") {
//       setEmail(e.target.value);
//       if(e.target.value !== "") {
//         setEmptyFields(emptyFields.filter((f)=> f !== e.target.name))
//       } else {
//         setEmptyFields([...emptyFields, e.target.name]);
//       }
//     } else if (e.target.name === "message") {
//       setMessage(e.target.value);
//       if(e.target.value !== "") {
//        setEmptyFields(emptyFields.filter((f)=> f !== e.target.name))
//       } else {
//         setEmptyFields([...emptyFields, e.target.name]);
//       }
//     }
//   };
// // const handleNotification= () =>{
// //   if(!name)
// // }
//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   // };
//   return (
//     <div className="form-content">
//       <div className="form" onSubmit={handleSubmit}>
//         <h1>Contact</h1>
//         <div className="sub-form1">
//           <label>Name:</label>
//           <input
//             type="text"
//             placeholder=" "
//             value={name}
//             name="name"
//             className="name-input1"
//             onChange={handleChange}
//           ></input>
//         </div>
//         <div className="sub-form2">
//           <label>Email Address:</label>
//           <input
//             type="text"
//             placeholder=" "
//             value={email}
//             name="email"
//             className="name-input2"
//             onChange={handleChange}
//           ></input>
//         </div>
//         <div className="sub-form2">
//           <label>Message:</label>
//           <textarea
//             type="text"
//             placeholder=" "
//             value={message}
//             name="message"
//             className="name-input3"
//             onChange={handleChange}
//           ></textarea>
//         </div>
//         <div>
//           <div className="empty-fields">
//             {emptyFields.length > 0 && requiredFieldsNotification}
//           </div>
//           <button type="submit" id="sbm-btn">
//             Submit
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Contact;


import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailtoLink = `mailto:dragoaboubacar5@gmail.com?subject=${encodeURIComponent("New message from your website")}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`)}`;

    // Open the user's default email client with the mailto link
    window.location.href = mailtoLink;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "message") {
      setMessage(value);
    }

    // Update emptyFields array based on input value
    if (value.trim() === "") {
      setEmptyFields((prevEmptyFields) => [...prevEmptyFields, name]);
    } else {
      setEmptyFields((prevEmptyFields) => prevEmptyFields.filter((f) => f !== name));
    }
  };

  const requiredFieldsNotification = (
    <p className="required-fields">
      Required fields are empty: {emptyFields.join(", ")}
    </p>
  );

  return (
    <div className="form-content">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Contact</h1>
        <div className="sub-form1">
          <label>Name:</label>
          <input
            type="text"
            placeholder=" "
            value={name}
            name="name"
            className="name-input1"
            onChange={handleChange}
          ></input>
        </div>
        <div className="sub-form2">
          <label>Email Address:</label>
          <input
            type="text"
            placeholder=" "
            value={email}
            name="email"
            className="name-input2"
            onChange={handleChange}
          ></input>
        </div>
        <div className="sub-form2">
          <label>Message:</label>
          <textarea
            type="text"
            placeholder=" "
            value={message}
            name="message"
            className="name-input3"
            onChange={handleChange}
          ></textarea>
        </div>
        <div>
          <div className="empty-fields">{emptyFields.length > 0 && requiredFieldsNotification}</div>
          <button type="submit" id="sbm-btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;

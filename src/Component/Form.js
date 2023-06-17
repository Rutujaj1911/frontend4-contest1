import React, {useState} from "react";


const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cnfpassword, setCnfPassword] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    function singup(){
        setSuccessMsg("");
        setErrorMsg("");
        if(name === "" || email === "" || password === "" || cnfpassword === ""){
            setErrorMsg("Error :  All fields are mandatory!");
        }
        else if(name.trim().split(" ").length === 1){
            setErrorMsg("Error : Please enter FullName!");
        }
        else if(!email.includes("@")){
            setErrorMsg("Error : Please enter valid email!");
        }
        else if(password!=cnfpassword){
            setErrorMsg("Error : Password and conform password did not match");
        }
        else{
            setSuccessMsg("Singed up Successfully");
        }

    }


    return(
      <div className="form">
            <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Full Name" />
            <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
            <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
            <input type="password" onChange={(e) => setCnfPassword(e.target.value)} placeholder="Confirm Password"/>
            
            <p className="error">{errorMsg}</p>
            <p className="success">{successMsg}</p>
            
            <button className="btn"  onClick={singup}>Signup</button>
      </div>
    )

}
export default Form;
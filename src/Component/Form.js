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
        else if(password!==cnfpassword){
            setErrorMsg("Error :Please Make sure your passwords and confirm password match!");
        }
        else{
            setSuccessMsg("Singed up Successfully");
        }

    }


    return(
         <div id="main">
            <div id="left">
                <h1>Find 3D Objects , Mockups and llustration here</h1>
                <div id="image">

                </div>
            </div>
            <div id="right">
                 <h1>Create Account</h1>
                 <div id="logo-container">
                    <div className="logo">
                         <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" alt="unable"/>
                         <h6>Sign up with Google</h6>
                    </div>
                    <div className="logo">
                         <img src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-facebook-social-media-icon-png-image_6315968.png" alt="unable"/>
                         <h6>Sign up with Facebook</h6>
                    </div>
                 </div>
                 <div id="middle-container">
                    <div className="line"></div>
                    <h5>OR</h5>
                    <div className="line"></div>
                 </div>
                 <div className="form">
                    <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Full Name" />
                    <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
                    <div className="index-content">
                          <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
                          <i class="ri-eye-off-line"></i>
                    </div>
                    <div className="index-content">
                          <input type="password" onChange={(e) => setCnfPassword(e.target.value)} placeholder="Confirm Password"/>
                          <i class="ri-eye-off-line"></i>
                    </div>
            
                    <button className="btn"  onClick={singup}>Create Account</button>

                    <p className="error">{errorMsg}</p>
                    <p className="success">{successMsg}</p>
                 </div>
            </div>
               
         </div>
    )

}
export default Form;
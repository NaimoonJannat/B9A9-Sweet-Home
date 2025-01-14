import { signInWithEmailAndPassword } from "firebase/auth";
import { useRef, useState } from "react";
import auth from "../firebase/firebase.config";
import { Link } from "react-router-dom";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { Helmet } from "react-helmet-async";

const Login = () => {
    const[loginError, setLoginError]=useState('');
  const[loginSuccess, setLoginSuccess]=useState('');
  const[showPass, setShowPass]=useState(false);
  const emailRef= useRef(null);

  const handleLogin = e =>{
    e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
        console.log(email, password);

        // reset error 
        setLoginError('');
        setLoginSuccess('');

        // validation 
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {setLoginSuccess('Logged in successfully!')
        })
        .catch(error => {console.log(error)
          setLoginError(error.message);
        })
  }
    return (
        <div className="w-2/3 mx-auto text-center space-y-8">
             <Helmet>
        <title>Sweet Home | Login</title>
      </Helmet>
            <h1 className="text-2xl font-bold">Please Login</h1>
            <form onSubmit={handleLogin} className="space-y-8">
            <label className="input input-bordered flex items-center gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
  <input type="text" ref={emailRef} name="email" className="grow" placeholder="Email" required />
</label>

<label className="input input-bordered flex items-center gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
  <input type={showPass ? "text":"password"} required className="grow" name="password" />
  <span onClick={() => setShowPass(!showPass)} className="text-base">
    {
        showPass ? <IoEyeOffOutline /> : <IoEyeOutline />
    }
    </span>
</label>
<label>
<input type="submit" className="btn w-full bg-[#ef5060e9] mt-8" value="Login"></input>
</label>
            </form>
            {
                loginError && <p className="text-red-600">{loginError}</p>
            }
            {
                loginSuccess && <p className="text-green-600">{loginSuccess}</p>
            }
        <p>New Here? Please <Link to="/register">Register</Link> </p>
        </div>
    );
};

export default Login;
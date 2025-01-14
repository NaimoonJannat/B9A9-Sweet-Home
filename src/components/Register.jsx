import { useState } from "react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import auth from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet-async";

const Register = () => {
    const[registerError, setRegisterError]=useState('');
    const[registerSuccess, setRegisterSuccess]=useState('');
    const[showPass, setShowPass]=useState(false);
   
    const handleRegister = e =>{
        e.preventDefault();
        const name=e.target.name.value;
        const email=e.target.email.value;
        const photo=e.target.url.value;
        const password=e.target.password.value;
        const accepted = e.target.terms.checked;
       

        if(password.length<6){
            setRegisterError('Password should be at least 6 characters');
            return;
        }
        else if(!/[A-Z]/.test(password)){
            setRegisterError('Your password should have at least one uppercase character')
            return;
        }
        else if(!/[a-z]/.test(password)){
            setRegisterError('Your password should have at least one lowercase character')
            return;
        }
        
        else if(!accepted){
            setRegisterError('Please accept our terms and conditions');
            return;
        }

        // reset error 
        setRegisterError('');
        setRegisterSuccess('')

        //create user
        createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
            console.log(result.user);
            setRegisterSuccess('Registered Successfully!');

            // update profile
            updateProfile(result.user,{displayName: name,
                photoURL: photo
            })
            .then(()=> {console.log('profile updated');})
            .catch(error =>{
                console.log(error);
                setRegisterError(error.message);
            })

        })
        .catch(error =>{
            console.log(error);
            setRegisterError(error.message);
        })
    }
    return (
        <div className="w-2/3 mx-auto text-center space-y-8">
             <Helmet>
        <title>Sweet Home | Register</title>
      </Helmet>
            <h1 className="text-2xl font-bold">Register Here</h1>
            <form onSubmit={handleRegister} className="space-y-8">
            <label className="input input-bordered flex items-center gap-2">
  <input type="text" name="name" className="grow" placeholder="Your Name" required />
</label>
            <label className="input input-bordered flex items-center gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
  <input type="email" name="email" className="grow" placeholder="Email" required />
</label>
<label className="input input-bordered flex items-center gap-2">
  <input type="text" name="url" className="grow" placeholder="Photo URL" required />
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

<div>
    <input type="checkbox" name="terms" />
    <label htmlFor="terms">Accept our <a href="">Terms and Conditions</a></label>
</div>
<label>
<input type="submit" className="btn w-full bg-[#ef5060e9] mt-8" value="Register"></input>
</label>
            </form>
            {
                registerError && <p className="text-red-600">{registerError}</p>
            }
            {
                registerSuccess && <p className="text-green-600">{registerSuccess}</p>
            }
            <p>Already Have an Account? Please <Link to="/login">Login</Link> </p>
        </div>
    );
};

export default Register;
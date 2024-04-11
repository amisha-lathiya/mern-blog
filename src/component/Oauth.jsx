import React from 'react'
import {Button} from 'flowbite-react'
import {AiFillGoogleCircle} from  "react-icons/ai"
import {GoogleAuthProvider, signInWithPopup,getAuth} from  'firebase/auth'
import {app} from '../firebase';
import {useDispatch} from 'react-redux'
import { SingUser } from '../features/user/userSlice';
import {useNavigate} from 'react-router-dom'
const Oauth = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleGoogle=async()=>{
        const auth=getAuth(app);
        console.log('hello');
        const provider= new GoogleAuthProvider();
        provider.setCustomParameters({prompt: 'select_account'});
        try{
            const resultsFromGoogle= await signInWithPopup(auth,provider)
             console.log(resultsFromGoogle);
             const data={
                username:resultsFromGoogle.user?.displayName,
                email: resultsFromGoogle.user?.email,
                googlePhotoUrl: resultsFromGoogle.user?.photoURL,
             }
           if(data){
            dispatch(SingUser(data)).then((user)=>{
                if (user.payload === "SingIn Successful") {
                    navigate("/");
                  } else {
                    alert("Wrong Password or Email");
                  }
            });
          
           }  
            //  console.log(resultsFromGoogle.user.displayName);
            //  console.log(resultsFromGoogle.user.email);
            //  console.log(resultsFromGoogle.user.photoURL);
        }catch(err){
            console.log(err);
        }
      
    }
  return (
    <Button type="button" className="bg-gradient-to-r from-purple-40bg-gradient-to-r from-pink-500  to-orange-400   rounded-lg text-white focus:ring-0  w-[80%] mt-2" onClick={handleGoogle}>
    <AiFillGoogleCircle className='w-5 h-5 mr-2 '/> continue with google
</Button>
  )
}

export default Oauth
import React, { useEffect} from "react";
import { Link } from "react-router-dom";
import { InputField } from "../component/InputField";
import { Button } from "flowbite-react";
import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { authSchema } from "../utils/validation";
import {useDispatch,useSelector} from 'react-redux'
import { AddUser, GetUser } from "../features/user/userSlice";
import Oauth from "../component/Oauth";

const Singup = () => {
  const dispatch= useDispatch()
  const {user,loading}=useSelector(state=>state);
  console.log(user);
  console.log(loading);
  // const [showData,setShowData]=useState();
  
  const {register,handleSubmit,formState:{errors}}=useForm({
    defaultValues:{
      username:"",
      email:"",
      password:""
    },
    resolver:yupResolver(authSchema)
  })
  console.log(errors)
  
  useEffect(()=>{
    dispatch(GetUser())
  },[dispatch])

  const userSubmit=(data)=>{
    console.log(data);
    //dispatch here to login action cre
    dispatch(AddUser(data));

  }
  return (
    <div className="max-w-3xl  flex flex-col sm:flex-row  min-280px:flex-col m-auto  mt-20 ">
      <div className=" w-full flex flex-col justify-center ">
        <div className="mx-9">
          <Link to="/" className="text-3xl ">
            <span className="bg-gradient-to-r from-purple-400  to-blue-500 p-2 rounded-lg text-white">
              Sahand's
            </span>
            blog
          </Link>
        </div>

        <div className="mt-3 mx-9">
          You can sing up with your email and password or with Google
        </div>
      </div>
      <div className="w-full ml-9 ">
        <form>
          <InputField
            name="username"
            type="text"
            placeholder="Enter UserName"
            register={register}
           
          />
           {errors.username?.message && <p className="text-[15px] text-red-700">{errors.username?.message}</p>}
          <InputField
            name="email"
            type="email" 
            placeholder="abc@gmail.com"  
            register={register} 
            />
              {errors.email?.message && <p className="text-[15px] text-red-700">{errors.email?.message}</p>}
          <InputField
            name="password"
            type="password"
            placeholder="Enter Password"
            register={register}
            errors={errors}
            
          />
            {errors.password?.message && <p className="text-[15px] text-red-700">{errors.password?.message}</p>}
          <Button onClick={handleSubmit(userSubmit)} className="bg-gradient-to-r from-purple-40bg-gradient-to-r from-indigo-500 via-purple-700 to-pink-500 p-2 rounded-lg text-white focus:ring-0  w-[80%]">
            Sing Up
          </Button>
          <Oauth/>
          <div className="mt-2">
            <span>Have an account?  <Link to="/singin" className="text-blue-500">Sing In</Link></span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Singup;

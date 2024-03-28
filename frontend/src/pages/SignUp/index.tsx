import * as React from 'react';
import './SignUp.css'
import Box from '@mui/system/Box';
import { InputLabel, Link, Typography } from '@mui/material';
import PasswordAdornments from '../../components/PasswordInput'
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import { useState } from 'react';
import {useSelector} from 'react-redux' 
import {useNavigate} from 'react-router-dom';
import { createUser } from '../../features/auth/auth.action';
import { RootState } from '../../app/store';
import { useAppDispatch } from '../../app/hooks'
import FormField from '../../components/FormField/FormField';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function Signup(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const isLoading = useSelector((state : RootState)=> state.user.isLoading);
    const error = useSelector((state: RootState)=> state.user.error);

    const [emailError, setEmailError] = useState<string>("");
    const [nameError, setNameError] = useState<string>("");
    const [checkName, setCheckName] = useState<boolean>(false);
    const [checkEmail, setCheckEmail] = useState<boolean>(false);
    const [checkPass, setCheckPass] = useState<boolean>(false);


    
    
    // const handleSubmit = async(e: React.MouseEvent<HTMLElement>) => {
    //     e.preventDefault();
    //     console.log(checkEmail, checkPass, checkName);
    //     if(!(checkEmail &&checkPass && checkName)){
    //         alert('Enter Valid Credentials')
    //     }
    //     else{
    //         dispatch(createUser({name, email, password})).then((response)=> {
    //             if(response.payload) navigate("/Login");
    //         });
    //     }
    // };   
    
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
      } = useForm<FormData>({
        resolver: zodResolver(UserSchema), // Apply the zodResolver
      });
    
    return (
        <Box>
           <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid col-auto">
                <h1 className="text-3xl font-bold mb-4">
                    Zod & React-Hook-Form
                </h1>
                <FormField
                    type="email"
                    placeholder="Email"
                    name="email"
                    register={register}
                    error={errors.email}
                />

                

                <FormField
                    type="password"
                    placeholder="Password"
                    name="password"
                    register={register}
                    error={errors.password}
                />

                <FormField
                    type="password"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    register={register}
                    error={errors.confirmPassword}
                />
                <button type="submit" className="submit-button">
                    Submit
                </button>
                </div>
            </form>
        </Box>
    );
}

import Box from '@mui/system/Box';
import FormField from '../../components/FormField/FormField';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {FormData, UserSchema} from './types';

export default function Signup(){
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
      } = useForm<FormData>({
        resolver: zodResolver(UserSchema), // Apply the zodResolver
    });

    const onSubmit = async (data: FormData) => {
        console.log("SUCCESS", data);
    }
    
    return (
        <Box>
           <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid col-auto">
                
                <FormField
                    type="text"
                    placeholder="Email"
                    name="email"
                    register={register}
                    error={errors.email}
                />

                <FormField
                    type="text"
                    placeholder="Name"
                    name="name"
                    register={register}
                    error={errors.name}
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

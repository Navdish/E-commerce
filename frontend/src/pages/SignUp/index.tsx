import Box from '@mui/system/Box';
import FormField from '../../components/FormField/FormField';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import signupPic from '../../assets/images/singupPic.png'
import {FormData, UserSchema} from './types';
import { Button, Paper, Stack, Typography } from '@mui/material';
import { useAppDispatch } from '../../app/hooks';
import { createUser } from '../../features/auth/auth.action';
import { useNavigate } from 'react-router-dom';

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
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<FormData>({
        resolver: zodResolver(UserSchema),
    });

    const onSubmit = async (data: FormData) => {
        dispatch(createUser(data)).then((response)=> {
            if(response.payload) navigate("/Login");
        });
    }
    
    return (
        <Box
        sx={{
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            bgcolor: "#f9fafb",
          }}>
           <form onSubmit={handleSubmit(onSubmit)}>
                <Paper
                sx={{
                width: "55vw",
                height: "80vh",
                display: "flex",
                alignItems: "center",
                p: 3,
                }}
            >
                <Box
                sx={{
                    width: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
                >
                <img
                    src={signupPic}
                    alt="SignupPage"
                    style={{width:"70%"}}
                />
                </Box>
                <Stack
                width={"50%"}
                alignItems={"flex-start"}
                justifyContent={"center"}
                >
                <Typography sx={{ fontSize: "20px", fontWeight: "bold", mb: 4 }}>
                    Create your Free Account
                </Typography>
                
                <FormField
                    type="text"
                    placeholder="Name"
                    name="name"
                    register={register}
                    error={errors.name}
                />

                <FormField
                    type="text"
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
                {/* <button type="submit" className="submit-button">
                    Submit
                </button> */}
            
                    <Button
                        color="primary"
                        variant="contained"
                        type="submit"
                        sx={{
                        textTransform: "none",
                        borderRadius: "10px",
                        fontSize: "16px",
                        width: "90%",
                        fontWeight: "500",
                        boxShadow: "none",
                        mb: 4,
                    }}
                >
                    Create Account
                </Button>
                </Stack>
            </Paper>
            </form>
        </Box>
    );
}

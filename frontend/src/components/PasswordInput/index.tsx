import * as React from 'react';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import { TextField, Typography } from '@mui/material';
// import validator from 'validator';
import { z } from "zod";
import { useState } from 'react';

interface PasswordAdornmentsProps {
  password: string,
  setPassword: React.Dispatch<React.SetStateAction<string>>,
  setCheckPass:  React.Dispatch<React.SetStateAction<boolean>>
}

export default function PasswordAdornments({password, setPassword, setCheckPass}: PasswordAdornmentsProps) {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event : React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
  };

  const User = z.object({
    password: z.string().min(6, { message: "Must be 6 or more characters long" }),
  });

  const validate = (value: string) => {
    setPassword(value);
    if (
        validator.isStrongPassword(value, {
            minLength: 6,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 1,
        })
    ) {
        console.log("weak");
        setErrorMessage("");
        setCheckPass(true)
    } else {
        setErrorMessage("Is Not a valid Password");
        setCheckPass(false)
    }
  };


  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', width: '100%'}}>
            
            <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
            <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                sx={{width:"100%",
                mb:'10px',
                "& .MuiFilledInput-root": {
                  height: '52px',
                  background: "white",
                  border: "1px solid black",
                  '&.Mui-focused fieldset': {
                      border: 'none',
                    },
                  '&:hover fieldset': {
                    border: 'none',
                  },
                }
                }}
                onChange={(e)=> { validate(e.target.value)}}
                endAdornment={
                <InputAdornment position="end">
                    <Box
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                    >
                    {showPassword ? <Box sx={{color:"black", fontSize:"16px", fontWeight:"600"}}>Hide</Box> : <Box sx={{color:"black", fontSize:"16px", fontWeight:"600"}}>Show</Box>}
                    </Box>
                </InputAdornment>
                }
            />
            {errorMessage && <Typography sx={{ color: "red", mt:"-12px", mb:"-12px" }}>{errorMessage}</Typography>}
    </Box>
  );
}
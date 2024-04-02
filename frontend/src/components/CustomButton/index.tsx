import { Button, ButtonProps } from '@mui/material'
import React from 'react'

interface CustomButtonProps {
    sxprops: ButtonProps,
    variant: "text" | "contained" | "outlined",
    text: string,
    onclick?: () => void
}
function CustomButton(props: CustomButtonProps) {
    return (
        <Button onClick={props.onclick} variant={props.variant} {...props.sxprops}>
            {props.text}
        </Button>
    )
}

export default CustomButton
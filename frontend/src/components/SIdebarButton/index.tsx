import { Button, ButtonOwnProps, ButtonProps, Typography } from "@mui/material"
import React, { FC, ReactElement } from "react"
import { SvgIconProps, TypographyProps } from '@mui/material'

interface SidebarButtonProps {
    variant: 'text'| 'outlined' | 'contained',
    content: string,
    icon?:ReactElement<SvgIconProps>;
    textProp:TypographyProps;
    iconProp?:SvgIconProps;
    buttonProps:ButtonOwnProps 
}



const SidebarButton: FC<SidebarButtonProps> =({variant, content, icon, textProp, iconProp, buttonProps}) => {
    
    return (
        <>
            <Button variant={variant} {...buttonProps} >
                {icon && React.cloneElement(icon,iconProp) }
                <Typography {...textProp} >
                    {content}
                </Typography>
            </Button>
        </>
    )
}

export default SidebarButton
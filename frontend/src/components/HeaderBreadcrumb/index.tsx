import { Box, Typography, TypographyProps } from '@mui/material'
import React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';
// import {Link} from 'react-router-dom';


interface linkDetails {
    text: string,
    link: string,
}

interface HeaderBreadcrumbProps {
    text: string,
    textStyles: TypographyProps,
    breadcrumb: linkDetails[]
}

function HeaderBreadcrumb(props: HeaderBreadcrumbProps) {
    
    return (
        <Box>
            <Typography {...props.textStyles}>{props.text}</Typography>
            <div role="presentation" >
                <Breadcrumbs aria-label="breadcrumb">
                    {props.breadcrumb && props.breadcrumb.length > 0 && props.breadcrumb.map((bread)=> {
                        return (
                            <Link to={bread.link} style={{fontSize:"16px", fontWeight:"600"}}>
                             {bread.text}
                            </Link>
                        )
                    })}
                    <Typography  fontSize="16px" fontWeight="600">{props.text}</Typography>
                </Breadcrumbs>
            </div>
        </Box>

    )
}

export default HeaderBreadcrumb
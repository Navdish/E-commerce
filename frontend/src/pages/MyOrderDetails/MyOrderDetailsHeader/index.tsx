import { FC } from 'react'
import {Box} from '@mui/material'
import HeaderBreadcrumb from '../../../components/HeaderBreadcrumb';


const MyOrderDetailsHeader: FC = () => {
    return (
        <Box>
            <Box sx={{height:'32px' , fontSize:"20px", fontWeight:"600", lineHeight:"28.44px", mb:"24px"}} >Order ID: 653519372</Box>
        </Box>
    )
}

export default MyOrderDetailsHeader;
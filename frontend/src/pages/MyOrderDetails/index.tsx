import { FC } from 'react'
import {Box} from '@mui/material'
import MyOrderDetailsHeader from './MyOrderDetailsHeader';
import MyOrderDetailsMain from './MyOrderDetailsMain';


const MyOrderDetails: FC = () => {
    return (
        <Box sx={{p:"24px"}}>
            <MyOrderDetailsHeader/>
            <MyOrderDetailsMain />
        </Box>
    )
}

export default MyOrderDetails;
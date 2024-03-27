import { FC } from 'react'
import {Box} from '@mui/material'
import MyOrderListHeader from './MyOrderListHeader';
import MyOrderListMain from './MyOrderListMain';


const MyOrderList: FC = () => {
    return (
        <Box sx={{p:"24px"}}>
            <MyOrderListHeader/>
            <MyOrderListMain />
        </Box>
    )
}

export default MyOrderList;
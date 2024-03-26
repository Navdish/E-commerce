import { FC } from 'react'
import { Box, Stack } from '@mui/material'
import HeaderBreadcrumb from '../../../components/HeaderBreadcrumb';


const OrderDetailsHeader: FC = () => {
    return (
        <Box display="flex" justifyContent="space-between" sx={{mb:"24px"}}>
            <HeaderBreadcrumb textStyles={{sx:{height:'32px' , width:'183px'}, fontSize:"24px", fontWeight:"600", lineHeight:"28.44px"}} text={'Order Details'} breadcrumb = {[{text: 'Home', link : '/'}, {text: 'Order List', link: '/order_list'}]}/>
        </Box>
    )
}

export default OrderDetailsHeader;
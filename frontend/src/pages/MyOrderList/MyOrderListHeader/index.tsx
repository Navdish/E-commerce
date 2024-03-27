import { FC } from 'react'
import {Box} from '@mui/material'
import HeaderBreadcrumb from '../../../components/HeaderBreadcrumb';


const MyOrderListHeader: FC = () => {
    return (
        <Box>
            <HeaderBreadcrumb textStyles={{sx:{height:'32px' , width:'183px'}, fontSize:"24px", fontWeight:"600", lineHeight:"28.44px"}} text={'My Order'} breadcrumb = {[{text: 'Home', link : '/'}]}/>
        </Box>
    )
}

export default MyOrderListHeader;
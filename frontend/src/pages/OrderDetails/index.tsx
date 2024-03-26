import { FC } from 'react'
import { Stack,Divider} from '@mui/material'
import OrderDetailsHeader from './OrderDetailsHeader';


const OrderDetails: FC = () => {
    return (
        <Stack p={4} sx={{ backgroundColor: 'rgb(246, 248, 255)' }} >
            <OrderDetailsHeader/>
        </Stack>
    )
}

export default OrderDetails;
import { FC } from 'react'
import { Stack,Divider} from '@mui/material'
import OrderDetailsHeader from './OrderDetailsHeader';
import OrderShip from './OrderShip';
import OrderFooter from './OrderFooter';


const OrderDetails: FC = () => {
    return (
        <Stack p={4} sx={{ backgroundColor: 'rgb(246, 248, 255)' }} >
            <OrderDetailsHeader/>
            <OrderShip />
            <OrderFooter/>
        </Stack>
    )
}

export default OrderDetails;
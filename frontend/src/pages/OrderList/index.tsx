import { FC } from 'react'
import { Stack,Divider} from '@mui/material'
import OrderListHeader from './OrderListHeader';
import EnhancedTable from './OrderListMain';


const OrderList: FC = () => {
    return (
        <Stack p={4} sx={{ backgroundColor: 'rgb(246, 248, 255)' }} >
            <OrderListHeader/>
            <EnhancedTable/>
        </Stack>
    )
}

export default OrderList;
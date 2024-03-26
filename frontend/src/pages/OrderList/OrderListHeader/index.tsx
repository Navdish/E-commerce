import React, { FC, useState } from "react"
import HeaderBreadcrumb from "../../../components/HeaderBreadcrumb"
import { Box, Button } from "@mui/material"
import Calender from "../../../components/Calender"
import { DateRange } from "@mui/x-date-pickers-pro/models"
import dayjs, { Dayjs } from 'dayjs';



const OrderListHeader: FC = () => {
    const [duration, setDuration] = React.useState<DateRange<Dayjs>>([
        dayjs(new Date()),
        dayjs(new Date()),
      ]);
    

    return (
        <Box display="flex" justifyContent="space-between" sx={{mb:"24px"}}>
            <HeaderBreadcrumb textStyles={{sx:{height:'32px' , width:'183px'}, fontSize:"24px", fontWeight:"600", lineHeight:"28.44px"}} text={'Order List'} breadcrumb = {[{text: 'Home', link : '/'}]}/>
            <Box>
                <Calender duration={duration} setDuration={setDuration}/>
            </Box>
        </Box>
    )
}

export default OrderListHeader
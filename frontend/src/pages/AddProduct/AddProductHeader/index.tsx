import { FC } from "react"
import HeaderBreadcrumb from "../../../components/HeaderBreadcrumb"
import { Box, Button } from "@mui/material"
import CustomButton from "../../../components/CustomButton"
import { Link } from "react-router-dom"

const AddProductHeader: FC = () => {
   
    return (
        <Box display="flex" justifyContent="space-between">
            <HeaderBreadcrumb textStyles={{sx:{height:'32px' , width:'183px'}, fontSize:"24px", fontWeight:"600", lineHeight:"28.44px"}} text={'Product Details'} breadcrumb = {[{text: 'Home', link : '/'}, {text: 'All Products', link: '/all_products'}]}/>
        </Box>
    )
}

export default AddProductHeader
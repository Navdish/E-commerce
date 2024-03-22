import { FC } from "react"
import HeaderBreadcrumb from "../../../components/HeaderBreadcrumb"
import { Box, Button } from "@mui/material"
import CustomButton from "../../../components/CustomButton"
import { Link } from "react-router-dom"

const AllProductHeader: FC = () => {
   
    return (
        <Box display="flex" justifyContent="space-between">
            <HeaderBreadcrumb textStyles={{sx:{height:'32px' , width:'157px'}, fontSize:"24px", fontWeight:"600", lineHeight:"28.44px"}} text={'All Products'} breadcrumb = {[{text: 'Home', link : '/'}]}/>
            <Link to={'/all_products/add_product'}><CustomButton variant={'contained'} text={'ADD NEW PRODUCT'} sxprops={{sx:{backgroundColor:"black", 
            '&:hover': {
                backgroundColor: 'black',
                borderColor: 'black',
                boxShadow: 'none',
            },
            '&:active': {
                boxShadow: 'none',
                backgroundColor: 'black',
                borderColor: 'black',
            }}}}/>
            </Link>
        </Box>
    )
}

export default AllProductHeader
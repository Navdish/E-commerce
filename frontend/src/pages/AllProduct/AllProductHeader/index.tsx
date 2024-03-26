import { FC } from "react"
import HeaderBreadcrumb from "../../../components/HeaderBreadcrumb"
import { Box, Button, Stack, Switch } from "@mui/material"
import CustomButton from "../../../components/CustomButton"
import { Link } from "react-router-dom"
import TypographyText from "../../../components/TypographyText"

interface PropsType {
    setView: any
}


const AllProductHeader = (props: PropsType) => {
    
   
    return (
        <Box display="flex" justifyContent="space-between">
            <HeaderBreadcrumb textStyles={{sx:{height:'32px' , width:'157px'}, fontSize:"24px", fontWeight:"600", lineHeight:"28.44px"}} text={'All Products'} breadcrumb = {[{text: 'Home', link : '/'}]}/>
            <Box sx={{display:"flex", alignItems:"center", gap:"10px"}}>
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
                <Stack direction={'row'} alignItems={'center'}>
                    <Switch onChange={(event) => {
                        props.setView(event.target.checked)
                    }} />
                </Stack>
            </Box>
        </Box>
    )
}

export default AllProductHeader
import { FC } from "react"
import AllProductHeader from "./AllProductHeader"
import { Box } from "@mui/material"



const AllProduct: FC = () => {
    return (
        <Box sx={{p:"24px"}}>
            <AllProductHeader/>
        </Box>


    )
}

export default AllProduct
// , {text: 'All Products', link : '/all_products'}
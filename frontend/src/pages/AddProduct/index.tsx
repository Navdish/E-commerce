import { FC } from "react"
import AddProductHeader from "./AddProductHeader"
import { Box } from "@mui/material"
import AddProductMain from "./AddProductMain/AddProductMain"


const AddProduct: FC = () => {
    return (
        <Box sx={{p:"24px"}}>
            <AddProductHeader/>
            <AddProductMain/>
        </Box>
    )
}

export default AddProduct
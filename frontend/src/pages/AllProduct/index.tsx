import { FC, useState } from "react"
import AllProductHeader from "./AllProductHeader"
import { Box } from "@mui/material"
import CardView from "./CardView"
import TableView from "./TableView"



const AllProduct: FC = () => {
    const [view, setView] = useState<boolean>(true)
    return (
        <Box sx={{p:"24px"}}>
            <AllProductHeader setView={setView}/>
            {view ? <CardView /> : <TableView />}
        </Box>


    )
}

export default AllProduct
// , {text: 'All Products', link : '/all_products'}
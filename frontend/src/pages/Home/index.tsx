import { FC } from 'react'
import {Box} from '@mui/material'
import HomeMain from './HomeMain'


const Home: FC = () => {
    return (
        <Box sx={{p:"24px"}}>
            <HomeMain/>
        </Box>
    )
}

export default Home;
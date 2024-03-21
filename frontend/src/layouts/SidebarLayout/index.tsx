import { Box } from '@mui/material';
import { FC, ReactNode } from 'react'
import { Outlet } from 'react-router-dom';

import Sidebar from './Sidebar';
import Header from './Header';

interface SidebarLayoutProps {
    children?: ReactNode;
}

const SidebarLayout: FC<SidebarLayoutProps> = () => {
    return (
        <>
            <Box sx={{display: 'flex', backgroundColor:"#F6F8FF"}}>
                <Sidebar/>
                <Box >
                    <Header/>
                    <Outlet />
                </Box>
            </Box>
        </>
    )
}

export default SidebarLayout;
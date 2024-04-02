import { Box, Typography} from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import './Sidebar.module.css'
import logo from '../../../assets/svg/logo.svg'
import LogoutIcon from '@mui/icons-material/Logout';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const activeState = ({ isActive }: { isActive: boolean }) => {
  return {
    borderRadius: '0.4rem',
    width:"calc(100% - 17.28%)",
    color: isActive ? "white" : "black",
    backgroundColor: isActive ? "#4F80E1" : "white",
    fontWeight: "400",
    fontSize:"11px",
    lineHeight:"16px"
  };
};
const drawerWidth = "22.50vw";

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

function Sidebar() {
  const theme = useTheme();
  const navigate = useNavigate();
  const role = useSelector((state: RootState)=> state.user.user.role);
  const [open, setOpen] = React.useState(true);
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
    return (
      <>
        <Box className='inside-box' sx={{minWidth:"40px",  borderRight:"1px solid #E6E6E6", minHeight: '100vh', backgroundColor:'white', zIndex:"1", display:"flex", flexDirection:"column", alignItems:"center"}}>
        {/* <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: 'none' }) }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar> */}

          {/* <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        > */}
          {/* <DrawerHeader> */}
          <Box sx={{width:"100%", height:"46.12px", m:"28px", display:"flex"}}>
              <Box sx={{display:"flex", height:"100%", alignItems:"center", ml:'17.28%', justifyContent:"center"}}>
                <img src={logo} alt=""/>
                  <Box sx={{fontSize:"22px", fontWeight:'600', lineHeight:"33px", fontStyle:"normal", fontFamily:"Inter", mr:"5px"}} >
                      Flight Ease
                  </Box>
              </Box>
          </Box>
          {/* <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
          </DrawerHeader> */}

          {role==='USER'  && <Box sx={{width:"100%", height:"46.12px", mt:"28px", display:"flex", justifyContent:"center"}}>
            <NavLink to="/" style={activeState}>
              <Box sx={{display:'flex', height:"100%", alignItems:"center", ml:'28px'}}>
                <SellOutlinedIcon sx={{mr:"5px"}}/>
                <Typography >
                    Home
                </Typography>
              </Box>
            </NavLink>
          </Box>}

          {role==='VENDOR' && <Box sx={{width:"100%", height:"46.12px", mt:"12px", display:"flex", justifyContent:"center"}}>
            <NavLink to="/dashboard" style={activeState}>
              <Box sx={{display:"flex", height:"100%", alignItems:"center", ml:'28px'}}>
                <DashboardOutlinedIcon sx={{mr:"5px"}}/>
                  <Typography  >
                      Dashboard
                  </Typography>
              </Box>
            </NavLink>
          </Box>}

          

          

          {role==='USER' && <Box sx={{width:"100%", height:"46.12px", mt:"10px", display:'flex', justifyContent:"center"}}>
            <NavLink to="/my_order" style={activeState}>
              <Box sx={{display:'flex', height:"100%", alignItems:"center", ml:'28px'}}>
                <SellOutlinedIcon sx={{mr:"5px"}}/>
                <Typography >
                    My Orders
                </Typography>
              </Box>
            </NavLink>
          </Box>}

          {role==='USER' && <Box sx={{width:"100%", height:"46.12px", mt:"10px", display:'flex', justifyContent:"center"}}>
            <NavLink to="/setting" style={activeState}>
              <Box sx={{display:'flex', height:"100%", alignItems:"center", ml:'28px'}}>
                <EventAvailableIcon sx={{mr:"5px"}}/>
                <Typography >
                    Settings
                </Typography>
              </Box>
            </NavLink>
          </Box>}

          {role==="VENDOR" && <Box sx={{width:"100%", height:"46.12px", mt:"10px", display:'flex', justifyContent:"center"}}>
            <NavLink to="/all_products" style={activeState}>
              <Box sx={{display:'flex', height:"100%", alignItems:"center", ml:'28px'}}>
                <EventAvailableIcon sx={{mr:"5px"}}/>
                <Typography >
                    All Products
                </Typography>
              </Box>
            </NavLink>
          </Box>}
          {role==='VENDOR' && <Box sx={{width:"100%", height:"46.12px", mt:"10px", display:'flex', justifyContent:"center"}}>
            <NavLink to="/order_list" style={activeState}>
              <Box sx={{display:'flex', height:"100%", alignItems:"center", ml:'28px'}}>
                <EventAvailableIcon sx={{mr:"5px"}}/>
                <Typography >
                    Order List
                </Typography>
              </Box>
            </NavLink>
          </Box>}
          <Box sx={{width:"100%", height:"46.12px", mt:"10px", display:'flex', justifyContent:"center"}}>
              <Box component='button' onClick={()=> {localStorage.clear(); navigate('/signup')}} sx={{ borderRadius:'0.4rem', width:"calc(100% - 17.28%)",color: "black" ,backgroundColor:"white", display:'flex', height:"100%", alignItems:"center", ml:'42px',cursor:"pointer", border:"none"}}>
                <LogoutIcon/>
                <Typography sx={{ml:"5px"}}>
                    Logout
                </Typography>
              </Box>
          </Box>
          {/* </Drawer> */}
        </Box>

      </>
    );
  }
  
  export default Sidebar;
  











  
  // const drawerWidth = 240;
  
  // const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  //   open?: boolean;
  // }>(({ theme, open }) => ({
  //   flexGrow: 1,
  //   padding: theme.spacing(3),
  //   transition: theme.transitions.create('margin', {
  //     easing: theme.transitions.easing.sharp,
  //     duration: theme.transitions.duration.leavingScreen,
  //   }),
  //   marginLeft: `-${drawerWidth}px`,
  //   ...(open && {
  //     transition: theme.transitions.create('margin', {
  //       easing: theme.transitions.easing.easeOut,
  //       duration: theme.transitions.duration.enteringScreen,
  //     }),
  //     marginLeft: 0,
  //   }),
  // }));
  
  // interface AppBarProps extends MuiAppBarProps {
  //   open?: boolean;
  // }
  
  // const AppBar = styled(MuiAppBar, {
  //   shouldForwardProp: (prop) => prop !== 'open',
  // })<AppBarProps>(({ theme, open }) => ({
  //   transition: theme.transitions.create(['margin', 'width'], {
  //     easing: theme.transitions.easing.sharp,
  //     duration: theme.transitions.duration.leavingScreen,
  //   }),
  //   ...(open && {
  //     width: `calc(100% - ${drawerWidth}px)`,
  //     marginLeft: `${drawerWidth}px`,
  //     transition: theme.transitions.create(['margin', 'width'], {
  //       easing: theme.transitions.easing.easeOut,
  //       duration: theme.transitions.duration.enteringScreen,
  //     }),
  //   }),
  // }));
  
  // const DrawerHeader = styled('div')(({ theme }) => ({
  //   display: 'flex',
  //   alignItems: 'center',
  //   padding: theme.spacing(0, 1),
  //   // necessary for content to be below app bar
  //   ...theme.mixins.toolbar,
  //   justifyContent: 'flex-end',
  // }));
  
  // export default function PersistentDrawerLeft() {
  //   const theme = useTheme();
  //   const [open, setOpen] = React.useState(false);
  
  //   const handleDrawerOpen = () => {
  //     setOpen(true);
  //   };
  
  //   const handleDrawerClose = () => {
  //     setOpen(false);
  //   };
  
  //   return (
  //     <Box sx={{ display: 'flex' }}>
  //       <CssBaseline />
  //       <AppBar position="fixed" open={open}>
  //         <Toolbar>
  //           <IconButton
  //             color="inherit"
  //             aria-label="open drawer"
  //             onClick={handleDrawerOpen}
  //             edge="start"
  //             sx={{ mr: 2, ...(open && { display: 'none' }) }}
  //           >
  //             <MenuIcon />
  //           </IconButton>
  //           <Typography variant="h6" noWrap component="div">
  //             Persistent drawer
  //           </Typography>
  //         </Toolbar>
  //       </AppBar>
  //       <Drawer
  //         sx={{
  //           width: drawerWidth,
  //           flexShrink: 0,
  //           '& .MuiDrawer-paper': {
  //             width: drawerWidth,
  //             boxSizing: 'border-box',
  //           },
  //         }}
  //         variant="persistent"
  //         anchor="left"
  //         open={open}
  //       >
  //         <DrawerHeader>
  //           <IconButton onClick={handleDrawerClose}>
  //             {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
  //           </IconButton>
  //         </DrawerHeader>
  //         <Divider />
  //         <List>
  //           {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
  //             <ListItem key={text} disablePadding>
  //               <ListItemButton>
  //                 <ListItemIcon>
  //                   {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
  //                 </ListItemIcon>
  //                 <ListItemText primary={text} />
  //               </ListItemButton>
  //             </ListItem>
  //           ))}
  //         </List>
  //         <Divider />
  //         <List>
  //           {['All mail', 'Trash', 'Spam'].map((text, index) => (
  //             <ListItem key={text} disablePadding>
  //               <ListItemButton>
  //                 <ListItemIcon>
  //                   {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
  //                 </ListItemIcon>
  //                 <ListItemText primary={text} />
  //               </ListItemButton>
  //             </ListItem>
  //           ))}
  //         </List>
  //       </Drawer>
        
  //     </Box>
  //   );
  // }
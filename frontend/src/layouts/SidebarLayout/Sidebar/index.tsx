import { Box, Typography, Collapse, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { NavLink } from "react-router-dom";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import './Sidebar.module.css'
import logo from '../../../assets/svg/logo.svg'
import logout from '../../../assets/svg/logout.svg'
import LogoutIcon from '@mui/icons-material/Logout';
import ContentPasteOutlinedIcon from '@mui/icons-material/ContentPasteOutlined';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';
import React from "react";
import ExpandMore from '@mui/icons-material/ExpandMore';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ThreePOutlinedIcon from '@mui/icons-material/ThreePOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';

function Sidebar() {
  const activeState = ({ isActive }: { isActive: boolean }) => {
    return {
      borderRadius: '0.4rem',
      width:"100%",
      color: isActive ? "white" : "black",
      backgroundColor: isActive ? "#4F80E1" : "white",
      fontWeight: "400",
      fontSize:"11px",
      lineHeight:"16px"
    };
  };
  const [open, setOpen] = React.useState(true);
  const [open2, setOpen2] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };
    const handleClick2 = () => {
      setOpen2(!open2);
    };
  
    return (
      <>
        <Box sx={{ width:"22.55694vw", borderRight:"1px solid #E6E6E6", minHeight: '100vh', backgroundColor:'white', zIndex:"1", display:"flex", flexDirection:"column", alignItems:"center"}}>
          {/* <Box>
            <SidebarButton
              variant='outlined'
              content="Dashboard"
              icon={<DashboardOutlinedIcon/>}
              iconProp={{sx:{height:'32px' , width:'32px'}}}
              textProp={{sx:{fontsize:'22px'}}}
              buttonProps={{sx: {width:'268px', height:'46.12px'}}}
            />
          </Box> */}

          <Box sx={{width:"268px", height:"46.12px", mt:"28px", mb:"28px", display:"flex"}}>
              <Box sx={{display:"flex", height:"100%", alignItems:"center", ml:'28px'}}>
                <img src={logo} alt=""/>
                  <Box sx={{fontSize:"22px", fontWeight:'600', lineHeight:"33px", fontStyle:"normal", fontFamily:"Inter", mr:"5px"}} >
                      Flight Ease
                  </Box>
              </Box>
          </Box>

          <Box sx={{width:"268px", height:"46.12px", mt:"12px", display:"flex"}}>
            <NavLink to="/" style={activeState}>
              <Box sx={{display:"flex", height:"100%", alignItems:"center", ml:'28px'}}>
                <DashboardOutlinedIcon sx={{mr:"5px"}}/>
                  <Typography  >
                      Dashboard
                  </Typography>
              </Box>
            </NavLink>
          </Box>

          {/* <List
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                >
                  <ListItemButton onClick={handleClick} sx={{width:"268px", pl:"25px"}}>
                        <ListItemIcon>
                            <ContentPasteOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="All tickets" />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 5 }}>
                                <ListItemIcon>
                                    <OpenInNewOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Open Tickets" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 5 }}>
                                <ListItemIcon>
                                    <EventAvailableOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Tickets with Orders" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 5 }}>
                                <ListItemIcon>
                                    <HighlightOffOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Closed Tickets" />
                            </ListItemButton>
                        </List>
                    </Collapse>

                    <ListItemButton onClick={handleClick2} sx={{width:"268px", pl:"25px"}}>
                        <ListItemIcon>
                            <ThreePOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Chatbots" />
                        {open2 ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={open2} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 5 }}>
                                <ListItemIcon>
                                    <ThreePOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Create a Chatbot" />
                            </ListItemButton>
                            
                        </List>
                    </Collapse>
          </List> */}

          <Box sx={{width:"268px", height:"46.12px", mt:"10px", display:'flex'}}>
            <NavLink to="/orders" style={activeState}>
              <Box sx={{display:'flex', height:"100%", alignItems:"center", ml:'28px'}}>
                <AssessmentOutlinedIcon sx={{mr:"5px"}}/>
                <Typography >
                    Orders
                </Typography>
              </Box>
            </NavLink>
          </Box>

          <Box sx={{width:"268px", height:"46.12px", mt:"10px", display:'flex'}}>
            <NavLink to="/customers" style={activeState}>
              <Box sx={{display:'flex', height:"100%", alignItems:"center", ml:'28px'}}>
                <SellOutlinedIcon sx={{mr:"5px"}}/>
                <Typography >
                    Customers
                </Typography>
              </Box>
            </NavLink>
          </Box>

          <Box sx={{width:"268px", height:"46.12px", mt:"10px", display:'flex'}}>
            <NavLink to="/my_order" style={activeState}>
              <Box sx={{display:'flex', height:"100%", alignItems:"center", ml:'28px'}}>
                <SellOutlinedIcon sx={{mr:"5px"}}/>
                <Typography >
                    My Orders
                </Typography>
              </Box>
            </NavLink>
          </Box>

          <Box sx={{width:"268px", height:"46.12px", mt:"10px", display:'flex'}}>
            <NavLink to="/setting" style={activeState}>
              <Box sx={{display:'flex', height:"100%", alignItems:"center", ml:'28px'}}>
                <EventAvailableIcon sx={{mr:"5px"}}/>
                <Typography >
                    Settings
                </Typography>
              </Box>
            </NavLink>
          </Box>
          <Box sx={{width:"268px", height:"46.12px", mt:"10px", display:'flex'}}>
            <NavLink to="/all_products" style={activeState}>
              <Box sx={{display:'flex', height:"100%", alignItems:"center", ml:'28px'}}>
                <EventAvailableIcon sx={{mr:"5px"}}/>
                <Typography >
                    All Products
                </Typography>
              </Box>
            </NavLink>
          </Box>
          <Box sx={{width:"268px", height:"46.12px", mt:"10px", display:'flex'}}>
            <NavLink to="/order_list" style={activeState}>
              <Box sx={{display:'flex', height:"100%", alignItems:"center", ml:'28px'}}>
                <EventAvailableIcon sx={{mr:"5px"}}/>
                <Typography >
                    Order List
                </Typography>
              </Box>
            </NavLink>
          </Box>
          <Box sx={{width:"268px", height:"46.12px", mt:"10px", display:'flex'}}>
            <NavLink to="/logout" style={activeState}>
              <Box sx={{display:'flex', height:"100%", alignItems:"center", ml:'28px'}}>
                <LogoutIcon/>
                <Typography sx={{ml:"5px"}}>
                    Logout
                </Typography>
              </Box>
            </NavLink>
          </Box>
        </Box>
      </>
    );
  }
  
  export default Sidebar;
  
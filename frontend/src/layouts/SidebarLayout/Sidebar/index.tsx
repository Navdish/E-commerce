import { Box, Typography} from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import './Sidebar.module.css'
import logo from '../../../assets/svg/logo.svg'
import LogoutIcon from '@mui/icons-material/Logout';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';

function Sidebar() {
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
  
  const navigate = useNavigate();
    return (
      <>
        <Box sx={{ width:"22.50vw", borderRight:"1px solid #E6E6E6", minHeight: '100vh', backgroundColor:'white', zIndex:"1", display:"flex", flexDirection:"column", alignItems:"center"}}>
          

          <Box sx={{width:"100%", height:"46.12px", m:"28px", display:"flex"}}>
              <Box sx={{display:"flex", height:"100%", alignItems:"center", ml:'17.28%', justifyContent:"center"}}>
                <img src={logo} alt=""/>
                  <Box sx={{fontSize:"22px", fontWeight:'600', lineHeight:"33px", fontStyle:"normal", fontFamily:"Inter", mr:"5px"}} >
                      Flight Ease
                  </Box>
              </Box>
          </Box>
          <Box sx={{width:"100%", height:"46.12px", mt:"28px", display:"flex", justifyContent:"center"}}>
            <NavLink to="/" style={activeState}>
              <Box sx={{display:'flex', height:"100%", alignItems:"center", ml:'28px'}}>
                <SellOutlinedIcon sx={{mr:"5px"}}/>
                <Typography >
                    Home
                </Typography>
              </Box>
            </NavLink>
          </Box>

          <Box sx={{width:"100%", height:"46.12px", mt:"12px", display:"flex", justifyContent:"center"}}>
            <NavLink to="/dashboard" style={activeState}>
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

          {/* <Box sx={{width:"100%", height:"46.12px", mt:"10px", display:'flex', justifyContent:"center"}}>
            <NavLink to="/orders" style={activeState}>
              <Box sx={{display:'flex', height:"100%", alignItems:"center", ml:'28px'}}>
                <AssessmentOutlinedIcon sx={{mr:"5px"}}/>
                <Typography >
                    Orders
                </Typography>
              </Box>
            </NavLink>
          </Box>

          <Box sx={{width:"100%", height:"46.12px", mt:"10px", display:'flex', justifyContent:"center"}}>
            <NavLink to="/customers" style={activeState}>
              <Box sx={{display:'flex', height:"100%", alignItems:"center", ml:'28px'}}>
                <SellOutlinedIcon sx={{mr:"5px"}}/>
                <Typography >
                    Customers
                </Typography>
              </Box>
            </NavLink>
          </Box> */}

          <Box sx={{width:"100%", height:"46.12px", mt:"10px", display:'flex', justifyContent:"center"}}>
            <NavLink to="/my_order" style={activeState}>
              <Box sx={{display:'flex', height:"100%", alignItems:"center", ml:'28px'}}>
                <SellOutlinedIcon sx={{mr:"5px"}}/>
                <Typography >
                    My Orders
                </Typography>
              </Box>
            </NavLink>
          </Box>

          <Box sx={{width:"100%", height:"46.12px", mt:"10px", display:'flex', justifyContent:"center"}}>
            <NavLink to="/setting" style={activeState}>
              <Box sx={{display:'flex', height:"100%", alignItems:"center", ml:'28px'}}>
                <EventAvailableIcon sx={{mr:"5px"}}/>
                <Typography >
                    Settings
                </Typography>
              </Box>
            </NavLink>
          </Box>

          <Box sx={{width:"100%", height:"46.12px", mt:"10px", display:'flex', justifyContent:"center"}}>
            <NavLink to="/all_products" style={activeState}>
              <Box sx={{display:'flex', height:"100%", alignItems:"center", ml:'28px'}}>
                <EventAvailableIcon sx={{mr:"5px"}}/>
                <Typography >
                    All Products
                </Typography>
              </Box>
            </NavLink>
          </Box>
          <Box sx={{width:"100%", height:"46.12px", mt:"10px", display:'flex', justifyContent:"center"}}>
            <NavLink to="/order_list" style={activeState}>
              <Box sx={{display:'flex', height:"100%", alignItems:"center", ml:'28px'}}>
                <EventAvailableIcon sx={{mr:"5px"}}/>
                <Typography >
                    Order List
                </Typography>
              </Box>
            </NavLink>
          </Box>
          <Box sx={{width:"100%", height:"46.12px", mt:"10px", display:'flex', justifyContent:"center"}}>
              <Box component='button' onClick={()=> {localStorage.clear(); navigate('/signup')}} sx={{display:'flex', height:"100%", alignItems:"center", ml:'28px'}}>
                <LogoutIcon/>
                <Typography sx={{ml:"5px"}}>
                    Logout
                </Typography>
              </Box>
          </Box>
        </Box>
      </>
    );
  }
  
  export default Sidebar;
  
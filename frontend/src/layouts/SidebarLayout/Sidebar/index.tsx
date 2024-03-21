import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import './Sidebar.module.css'

function Sidebar() {
  const activeState = ({ isActive }: { isActive: boolean }) => {
    return {

      width:"100%",
      color: isActive ? "white" : "black",
      backgroundColor: isActive ? "blue" : "white",
      fontWeight: isActive ? "bold" : ""
    };
  };
  
    return (
      <>
        <Box sx={{ width:"22.55694vw", outline:"1px solid #E6E6E6", height: '100vh', backgroundColor:'white', zIndex:"1"}}>
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

          <Box sx={{width:"100%", height:"46.12px", display:"flex"}}>
            <NavLink to="/" style={activeState}>
              <Box sx={{display:"flex", width:"10"}}>
                <DashboardOutlinedIcon/>
                  <Typography sx={{fontSize:'22px'}} >
                      Dashboard
                  </Typography>
              </Box>
            </NavLink>
          </Box>
          <Box sx={{width:"100%", height:"46.12px", display:'flex'}}>
            <NavLink to="/setting" style={activeState}>
              <Box sx={{display:'flex'}}>
                <DashboardOutlinedIcon/>
                <Typography sx={{fontSize:'22px'}} >
                    Settings
                </Typography>
              </Box>
            </NavLink>
          </Box>
        </Box>
      </>
    );
  }
  
  export default Sidebar;
  
import { Box , Avatar, Stack, Typography } from '@mui/material'
import Search from '../../../components/Search';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
  return (
    <>
      <Box sx={{ width:"77.50vw",  height: '90px', backgroundColor:'white'}}>
        <Stack height={"90px"} sx={{bgcolor:"white"}} justifyContent={"center"}  >
            <Stack justifyContent="space-between" direction={"row"}>
                <Stack justifyContent={"flex-start"}>

            <Search/> 
                </Stack>
            <Stack width="600px"  justifyContent={"center"} direction={"row"} alignItems={"center"}>
                
                    <CalendarTodayIcon />
                    <Typography fontWeight={600}sx={{ml:1, width:"197px"}}>
                        Monday,4th  September
                    </Typography>
                    <NotificationsIcon sx={{ml:1}}/>
            <Stack width={"300px"} direction={"row"}  justifyContent={"flex-end"}  mr={"62px"}>
                <Stack sx={{mr:1}}>
                    
                <Typography fontSize={"15px"} fontWeight={"600"}>Navdish</Typography>
                <Typography fontSize={"10px"} color={"gray"}>Intern</Typography>
                </Stack>
                <Avatar/>
            
            </Stack>
            </Stack>
        


            </Stack>
            

            

        </Stack>
      </Box>
    </>
  );
}

export default Header;

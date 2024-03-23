import { Box, Grid, TextField } from "@mui/material";
import { FC } from "react";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import TypographyText from "../../../components/TypographyText";

const AddProductMain: FC = () => {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
  return (
    <Box  sx={{ backgroundColor:"white", borderRadius:"0.8rem"}}>
      <Grid container spacing={2}>
        <Grid item xs={6.5}>
          <Box sx={{p:'24px',  boxSizing:"border-box"}}>
            <Box my={1}>
                <TypographyText text={'Product Name'} fontSize={'16px'} fontWeight={'600'} />
                <TextField sx={{ width: '100%' }} id="outlined-basic" variant="outlined" />
            </Box>
            <Box my={1}>
                <TypographyText text={'Description'} fontSize={'16px'} fontWeight={'600'}  />
                <TextField sx={{ width: '100%' }} multiline rows={4} id="outlined-basic" variant="outlined" />
            </Box>
            <Box my={1}>
                <TypographyText text={'Category'} fontSize={'16px'} fontWeight={'600'} />
                <TextField sx={{ width: '100%' }} id="outlined-basic" variant="outlined" />
            </Box>
            <Box my={1}>
                <TypographyText text={'Brand Name'} fontSize={'16px'} fontWeight={'600'} />
                <TextField sx={{ width: '100%' }} id="outlined-basic" variant="outlined" />
            </Box>

            <Grid container spacing={2}>
                <Grid  item xs={6}>
                    <TypographyText text={'SKU'} fontSize={'16px'} fontWeight={'600'} />
                    <TextField sx={{ width: '100%' }} id="outlined-basic" variant="outlined" />
                </Grid>
                <Grid item xs={6}>
                    <TypographyText text={'Stock Quantity'} fontSize={'16px'} fontWeight={'600'} />
                    <TextField sx={{ width: '100%' }} id="outlined-basic" variant="outlined" />
                </Grid>
            </Grid>

            <Grid container spacing={2}>
                <Grid  item xs={6}>
                    <TypographyText text={'Regular Price'} fontSize={'16px'} fontWeight={'600'} />
                    <TextField sx={{ width: '100%' }} id="outlined-basic" variant="outlined" />
                </Grid>
                <Grid item xs={6}>
                    <TypographyText text={'Sale Price'} fontSize={'16px'} fontWeight={'600'} />
                    <TextField sx={{ width: '100%' }} id="outlined-basic" variant="outlined" />
                </Grid>
            </Grid>

            <Box my={1}>
                <TypographyText text={'Tags'} fontSize={'16px'} fontWeight={'600'}  />
                <TextField sx={{ width: '100%' }} multiline rows={2} id="outlined-basic" variant="outlined" />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={5.5}>
          <Box sx={{backgroundColor:"#c8c8c8", height:"428px", m:'24px', boxSizing:"border-box"}}>
            
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddProductMain;

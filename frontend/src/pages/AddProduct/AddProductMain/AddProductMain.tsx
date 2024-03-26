import { Autocomplete, Box, Checkbox, Grid, IconButton, Stack, TextField, Typography } from "@mui/material";
import { FC, useState } from "react";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import TypographyText from "../../../components/TypographyText";
import { FileUploader } from 'react-drag-drop-files'
import DragDrop from '../../../components/DragDrop'
import CloseIcon from '@mui/icons-material/Close';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CustomButton from '../../../components/CustomButton'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import LinearDeterminate from "../../../components/Loader";
const fileTypes = ["JPG", "PNG"];

const categories = [
    { tagName: 'Title 1' },
    { tagName: 'Title 2' }
];

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const AddProductMain: FC = () => {
    const Item = styled(Paper)(({ theme }) => ({
        padding: '0px',
        textAlign: 'center',
      }));

      const [file, setFile] = useState<File[]>([]);
      const [imageUrls, setImageUrls] = useState<string[]>([]);
  
      const handleChange = (file: File[]) => {
          const arrayfile = Array.from(file);
  
          const urls = arrayfile.map(a => {
              return URL.createObjectURL(a)
          });
          setImageUrls((prev) => [...prev, ...urls]);
  
      };
      const deleteImg = (index: number) => {
          console.log("first", index)
          setImageUrls((prev) =>
              prev.filter((_, i) => i !== index)
          )
      }
  return (
    <Box  sx={{ backgroundColor:"white", borderRadius:"0.8rem", boxSizing:"border-box"}}>
      <Grid container spacing={'24px'} sx={{boxSizing:"border-box" , width:"100%", m:"0px", pr:"24px"}}>
        <Grid item xs={6.5} sx={{padding:'0px'}}>
          <Box sx={{  boxSizing:"border-box"}}>
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
                <Autocomplete fullWidth
                    multiple
                    id="checkboxes-tags-demo"
                    options={categories}
                    disableCloseOnSelect
                    getOptionLabel={(option) => option.tagName}
                    renderOption={(props, option, { selected }) => (
                        <li {...props}>
                            <Checkbox
                                icon={icon}
                                checkedIcon={checkedIcon}
                                style={{ marginRight: 8 }}
                                checked={selected}
                            />
                            {option.tagName}
                        </li>
                    )}
                    style={{ width: "100%" }}
                    renderInput={(params) => (
                        <TextField {...params} placeholder="Add tags..." />
                    )}
                />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={5.5} >
          <Box sx={{backgroundColor:"#c8c8c8", height:"428px",  boxSizing:"border-box", borderRadius:"0.8rem"}}>
            {imageUrls && imageUrls.length > 0 && <img src={imageUrls[0]} style={{height:"100%", width:"100%",  borderRadius:"0.8rem"}}/>}
          </Box>
          <Stack>
            <Stack py={2} gap={1} >
                <TypographyText text={'Product Gallery'} fontSize={'14'} fontWeight={'600'} />
                <FileUploader children={<DragDrop file={file} />} handleChange={handleChange} multiple name="file" types={fileTypes} />
                <Stack flexWrap={'wrap'} direction={'row'} gap={2}>
                    {imageUrls?.map((a, index) => (
                        <Box key={index} sx={{ width:'100%', height: '96px', position: 'relative' ,display:"flex"}}>
                            <img src={a} alt=""  style={{width:"64px", height:"64px", margin:"16px", borderRadius:"0.4rem"}}/>
                            <IconButton onClick={() => {
                                deleteImg(index)
                            }} sx={{ position: 'absolute', top: '8px', right: '8px', height: '15px', width: '15px', color: 'black' }}><CloseIcon sx={{ height: '15px', width: '15px' }} /></IconButton>
                            <Box sx={{ position:"absolute", left:"96px", top:"16px", width:"calc(100% - 168px)"}}>
                              <Typography  >Product image name </Typography>
                              <Box sx={{mt:"16px"}}><LinearDeterminate /></Box>
                            </Box>
                            <IconButton sx={{ position:"absolute", right:"16px", top:"23px", color:"#003F62"}}><CheckCircleRoundedIcon/></IconButton>
                        </Box>
                    ))}
                </Stack>

            </Stack>
            
            <Stack direction={'row'} py={2} gap={5}>
                <CustomButton sxprops={{ sx: { width: '50%', height: '48px' } }} variant="contained" text="Save" />
                <CustomButton sxprops={{ sx: { width: '50%', height: '48px' } }} variant="outlined" text="Cancel" />
            </Stack>
        </Stack>

        </Grid>
      </Grid>
    </Box>
  );
};

export default AddProductMain;

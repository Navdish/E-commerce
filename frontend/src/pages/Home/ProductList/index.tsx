import { Avatar, Box, Button, IconButton, Stack } from '@mui/material'
import React from 'react'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import AddIcon from '@mui/icons-material/Add';
import AddButton from '../../../assets/images/AddButton.png'
import Carousel from 'react-material-ui-carousel';
import './ProductList.css'
import pingHigh from '../../../assets/images/pingHigh.jpg'

function ProductList() {
    return (
        <Stack gap={2}>
            <Stack direction={'row'} gap={4} alignItems={'center'}>
                <Stack direction={'row'} gap={1} alignItems={'center'}>
                    <Avatar sx={{ width: '50px', height: '50px' }} alt="Travis Howard" src="" />
                    <Box fontWeight={'600'} fontSize={'25px'}>Mobile</Box>
                </Stack>
                <IconButton ><NavigateNextIcon sx={{ fontSize: '30px' }} /></IconButton>
            </Stack>

            <Carousel  indicators={false}  autoPlay={false} 
                next={(next, active) => console.log(`we left ${active}, and are now at ${next}`)}
                prev={(prev, active) => console.log(`we left ${active}, and are now at ${prev}`)}
            >
                <Stack gap={0.3} width={'180px'} >
                    <Box className='image' sx={{ height: '150px', width: '150px', position: 'relative' }}>
                        <img src={pingHigh} alt="" />
                        <Box component={'button'} sx={{ padding: '0px', border: 'none', background: 'none', position: 'absolute', right: '-15px', top: '-20px', '&:hover': { cursor: 'pointer' } }}><img src={AddButton}></img></Box>
                    </Box>
                    <Box sx={{ fontSize: '15px', fontWeight: '700' }}>Rs 120</Box>
                    <Box>Simple Earphones</Box>
                    <Box sx={{ color: 'green', fontWeight: '600', fontSize: '14px' }}>70% off</Box>
                </Stack>

                <Stack gap={0.3} width={'180px'} >
                    <Box className='image' sx={{ height: '150px', width: '150px', position: 'relative' }}>
                        <img src={pingHigh} alt="" />
                        <Box component={'button'} sx={{ padding: '0px', border: 'none', background: 'none', position: 'absolute', right: '-15px', top: '-20px', '&:hover': { cursor: 'pointer' } }}><img src={AddButton}></img></Box>
                    </Box>
                    <Box sx={{ fontSize: '15px', fontWeight: '700' }}>Rs 120tr00</Box>
                    <Box>Simple Nokia 122 This is name id product</Box>
                    <Box sx={{ color: 'green', fontWeight: '600', fontSize: '14px' }}>70% off</Box>
                </Stack>


                <Stack gap={0.3} width={'180px'} >
                    <Box className='image' sx={{ height: '150px', width: '150px', position: 'relative' }}>
                        <img src={pingHigh} alt="" />
                        <Box component={'button'} sx={{ padding: '0px', border: 'none', background: 'none', position: 'absolute', right: '-15px', top: '-20px', '&:hover': { cursor: 'pointer' } }}><img src={AddButton}></img></Box>
                    </Box>
                    <Box sx={{ fontSize: '15px', fontWeight: '700' }}>Rs 120rett00</Box>
                    <Box>Simple Nokia 122 This is name id product</Box>
                    <Box sx={{ color: 'green', fontWeight: '600', fontSize: '14px' }}>70% off</Box>
                </Stack>


                <Stack gap={0.3} width={'180px'} >
                    <Box className='image' sx={{ height: '150px', width: '150px', position: 'relative' }}>
                        <img src={pingHigh} alt="" />
                        <Box component={'button'} sx={{ padding: '0px', border: 'none', background: 'none', position: 'absolute', right: '-15px', top: '-20px', '&:hover': { cursor: 'pointer' } }}><img src={AddButton}></img></Box>
                    </Box>
                    <Box sx={{ fontSize: '15px', fontWeight: '700' }}>Rs 120tttt00</Box>
                    <Box>Simple Nokia 122 This is name id product</Box>
                    <Box sx={{ color: 'green', fontWeight: '600', fontSize: '14px' }}>70% off</Box>
                </Stack>


                <Stack gap={0.3} width={'180px'} >
                    <Box className='image' sx={{ height: '150px', width: '150px', position: 'relative' }}>
                        <img src={pingHigh} alt="" />
                        <Box component={'button'} sx={{ padding: '0px', border: 'none', background: 'none', position: 'absolute', right: '-15px', top: '-20px', '&:hover': { cursor: 'pointer' } }}><img src={AddButton}></img></Box>
                    </Box>
                    <Box sx={{ fontSize: '15px', fontWeight: '700' }}>Rs 1200tttt0</Box>
                    <Box>Simple Nokia 122 This is name id product</Box>
                    <Box sx={{ color: 'green', fontWeight: '600', fontSize: '14px' }}>70% off</Box>
                </Stack>
            </Carousel >
        </Stack>
    )
}

export default ProductList
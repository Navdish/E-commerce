import { Avatar, Box, Button, IconButton, Stack } from '@mui/material'
import React, { useRef } from 'react'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import AddButton from '../../../assets/images/AddButton.png'
import './ProductList.css'
import pingHigh from '../../../assets/images/pingHigh.jpg'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

function ProductList() {
    const scroll = useRef<HTMLDivElement>(null)
    const handleScroll = (offset: number) => {
        if (scroll.current?.scrollLeft !== (null || undefined))
            scroll.current.scrollLeft += offset
    }
    return (
        <Stack gap={2}>
            <Stack direction={'row'} gap={4} alignItems={'center'}>
                <Stack direction={'row'} gap={1} alignItems={'center'}>
                    <Avatar sx={{ width: '50px', height: '50px' }} alt="Travis Howard" src="" />
                    <Box fontWeight={'600'} fontSize={'25px'}>Mobile</Box>
                </Stack>
                <IconButton ><NavigateNextIcon sx={{ fontSize: '30px' }} /></IconButton>
            </Stack>

            {/* <Stack gap={1} direction={'row'} width={'100%'} sx={{ overflow: 'hidden' }} alignItems={'center'} >
                <IconButton sx={{ height: '40px' }} onClick={() => handleScroll(-100)} ><ArrowBackIosIcon /></IconButton>
                <Stack gap={3} ref={scroll} direction={'row'} className='slider'></Stack>

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
                    <Box sx={{ fontSize: '15px', fontWeight: '700' }}>Rs 120</Box>
                    <Box>Simple Earphones</Box>
                    <Box sx={{ color: 'green', fontWeight: '600', fontSize: '14px' }}>70% off</Box>
                </Stack>
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
                    <Box sx={{ fontSize: '15px', fontWeight: '700' }}>Rs 120</Box>
                    <Box>Simple Earphones</Box>
                    <Box sx={{ color: 'green', fontWeight: '600', fontSize: '14px' }}>70% off</Box>
                </Stack>
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
                    <Box sx={{ fontSize: '15px', fontWeight: '700' }}>Rs 120</Box>
                    <Box>Simple Earphones</Box>
                    <Box sx={{ color: 'green', fontWeight: '600', fontSize: '14px' }}>70% off</Box>
                </Stack>
                <Stack gap={0.3} width={'180px'} >
                    <Box className='image' sx={{ height: '150px', width: '150px', position: 'relative' }}>
                        <img src={pingHigh} alt="" />
                        <Box component={'button'} sx={{ padding: '0px', border: 'none', background: 'none', position: 'absolute', right: '-15px', top: '-20px', '&:hover': { cursor: 'pointer' } }}><img src={AddButton}></img></Box>
                    </Box>
                    <Box sx={{ fontSize: '15px', fontWeight: '700' }}>Rs 120</Box>
                    <Box>Simple Earphones</Box>
                    <Box sx={{ color: 'green', fontWeight: '600', fontSize: '14px' }}>70% off</Box>
                </Stack>


            
            <IconButton sx={{ height: '40px' }} onClick={() => handleScroll(100)}><ArrowForwardIosIcon /></IconButton>
        </Stack> */}
        </Stack>
    )
}

export default ProductList
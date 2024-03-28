import { Stack } from '@mui/material'
import React from 'react'
import CategoryComponent from '../../../components/CategoryComponent'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import StayCurrentPortraitIcon from '@mui/icons-material/StayCurrentPortrait';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import LaptopIcon from '@mui/icons-material/Laptop';
function Categories() {
    return (
        <Stack direction={'row'} gap={2} flexWrap={'wrap'} >
            <CategoryComponent icon={<EmojiEventsIcon />} tag={'Popular'} />
            <CategoryComponent icon={<StayCurrentPortraitIcon />} tag={'Mobile'} />
            <CategoryComponent icon={<EmojiEventsIcon />} tag={'Accessories'} />
            <CategoryComponent icon={<CheckroomIcon />} tag={'Clothes'} />
            <CategoryComponent icon={<LaptopIcon />} tag={'Laptop'} />
            <CategoryComponent icon={<EmojiEventsIcon />} tag={'Hardware'} />
            <CategoryComponent icon={<LaptopIcon />} tag={'Kitchen'} />
            <CategoryComponent icon={<EmojiEventsIcon />} tag={'I dont know'} />

        </Stack>
    )
}

export default Categories
import { Box, Stack } from '@mui/material'
import React from 'react'
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import TypographyText from '../TypographyText';
import styles from './DragDrop.module.css'

interface DragDropProps {
    file: any
}
function DragDrop(props: DragDropProps) {
    return (
        <Stack className={styles.dotted} p={2} gap={1}  justifyContent={'center'} alignItems={'center'} borderRadius={'10px'}  >
            <ImageOutlinedIcon sx={{ fontSize: '50px' }} />
            <Stack  alignItems={'center'}>
                <TypographyText text={'Drop your images here, or browse'} fontSize={''} fontWeight={''} />
                <TypographyText text={'Jpeg, png are allowed'} fontSize={''} fontWeight={''} />
            </Stack>

        </Stack>
    )
}

export default DragDrop
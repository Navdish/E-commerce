import { FC } from 'react'
import { Stack, Box, List, ListItemButton, ListItemIcon, ListItemText, Divider, Avatar, TextField } from '@mui/material'
import SettingsHeader from './SettingsHeader';
import SettingsLeft from './SettingsLeft';
import PersonalInfo from './PersonalInfo';

const Settings: FC = () => {
    return (
        <Stack p={4} sx={{ backgroundColor: 'rgb(246, 248, 255)' }} >
            <SettingsHeader />
            <Stack direction={'row'} sx={{ backgroundColor: 'white', borderRadius: '15px' }} marginTop={4}>
                <SettingsLeft />
                <Divider orientation='vertical' />
                <PersonalInfo />
            </Stack>
        </Stack>
    )
}

export default Settings;
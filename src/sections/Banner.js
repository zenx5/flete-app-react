import { Box, Button } from '@mui/material'
import { PersonOutline } from '@mui/icons-material'

import AppConfig from '../tools/config'


export default function Banner () {
    const { logo } = AppConfig;

    return <Box sx={styles.container}>
        <Box>
            <img src={logo} height={80} width={250} />
        </Box>
        <Box className='barnav-section'>
            <Button>Home</Button>
            <Button>Sobre Nosotros</Button>
            <Button>Fletes</Button>
        </Box>
        <Box className='user-section'>
            <Button startIcon={<PersonOutline />}>Iniciar Session</Button>
            <Button variant='contained'>Registro</Button>
        </Box>
    </Box>
}

const styles = {
    container: {
        display:'flex',
        alignItems:'center',
        justifyContent: 'space-evenly',
        py:5,
        '& .barnav-section':{
            '.MuiButton-root':{
                fontFamily:'"Montserrat", Sans-serif',
                fontSize:'12px',
                fontWeight:600,
                color:'#4B4B4B',
                fill:'#4B4B4B',
            },
            '.MuiButton-root:hover':{
                color:'#D36E2D'
            }
        },
        '& .user-section': {
            display:'flex',
            gap:4
        }

    }

}
import { useLogin } from 'react-facebook'
import { Box, Card, Button, TextField, Avatar } from '@mui/material'

export default function Login () {
    const { login, status, isLoading, error} = useLogin();

    async function handleLogin() {
      try {
        const response = await login({
          scope: 'email',
        });

        console.log(response.status);
      } catch (error) {
        console.log(error.message);
      }
    }

    return <Box sx={styles.container}>
        <Card sx={styles.card}>
            <Avatar />
            <TextField variant='outlined' />
            <TextField variant='outlined' />
            <Button variant='outlined'>Login</Button>
            <Button variant='contained' onClick={handleLogin} disabled={isLoading}>
                Login via Facebook
            </Button>
        </Card>
    </Box>
}

const styles = {
    container: {
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        height:'100vh',
    },
    card:{
        display:'flex',
        flexDirection:'column',
        boxShadow:'0 0 1.5rem #0005',
        p:5,
        gap:2,
        '& .MuiAvatar-root':{
            alignSelf:'center',
            height:'8rem',
            width:'8rem',
        }
    }
}
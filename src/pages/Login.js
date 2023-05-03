import { useLogin } from 'react-facebook'
import { Box, Card, Button } from '@mui/material'

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

    return <Box>
        <Card>
            <Button variant='contained' onClick={handleLogin} disabled={isLoading}>
                Login via Facebook
            </Button>
        </Card>
    </Box>
}
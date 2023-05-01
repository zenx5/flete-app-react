import { Box, Button, Typography } from '@mui/material'
import { Slider } from '../components'
import banner1 from '../assets/Banner-principal-1.jpg'

export default function SliderMain ( props ) {
    const { sx } = props
    const items = [
        {
            image: banner1,
            title: <Typography variant='h3' sx={{fontSize:'4rem'}}>Somos el puente para <b>Transportistas y Clientes</b></Typography>,
            description: <Typography>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</Typography>,
            actions:[
                <Button>Eres Transportista</Button>,
                <Button>Cotizar un viaje con Nosotros</Button>
            ]
        }
    ]

    const settings = {
        ...props.settings,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return <Box>
        <Slider {...settings}>
            { items.map( item => <Box sx={{
                backgroundImage:`url(${item.image})`,
                ...internalSx,
                ...sx
            }}>
                <Box className='content'>
                    {item.title}
                    {item.description}
                    <Box className='actions'>
                        {item.actions.map( item => (item) )}
                    </Box>
                </Box>
            </Box>) }
        </Slider>
    </Box>
}

const internalSx = {
    display:'flex',
    flexDirection:'column',
    p:5,
    height:'100vh',
    justifyContent:'center',
    alignItems:'center',
    backgroundSize:'cover',
    color:'#fff',
    '& .content':{
        display:'flex',
        textAlign:'center',
        flexDirection:'column',
        marginLeft:'auto',
        marginRight:'auto',
        width:'40%',
        gap:5,
        '& .actions': {
            display:'flex',
            flexDirection:'row',
            justifyContent:'center',
            gap:5,
        }
    }
}
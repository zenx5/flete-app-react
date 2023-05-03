import { Box, Button, Grid, List, ListItem, ListItemText, Typography } from '@mui/material'
import { useEffect } from 'react'
import { useDispatch, useSelector } from '../redux/store'
import { useNavigate } from 'react-router-dom'
import { getAuctions, restart } from '../redux/slices/auction'
import { Banner} from '../sections'

export default function Fletes () {
    const { auctions, loading } = useSelector(state => state.auction)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(()=>{
        console.log('use effect', auctions)
        // dispatch(restart())
        if( auctions.length === 0 ) {
            dispatch(getAuctions())
        }
    },[dispatch])

    return(<Box>
        <Banner />
        <Box>
            <Typography>Fletes</Typography>
            <List>
                { [...auctions, ...auctions].map( (auction, index) => <ListItem key={`${auction.name}-${index}`} sx={styles.ListItem}>
                    <Grid container>
                        <Grid item xs={2}>
                            <img src={auction?.image}/>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography variant='h5'>{auction.name}</Typography>
                            <Typography variant='body1'>{auction.description}</Typography>
                            <Typography variant='caption'>{auction.expire_date.split('T')[0]}</Typography>
                        </Grid>
                        <Grid item xs={2} sx={styles.prices}>
                            <Typography className='original_price'><b>Price:</b>{auction.original_price}</Typography>
                            <span>
                                <Typography className='last_price'>{auction.last_price}</Typography>
                                <Typography className='current_price'>{auction.current_price}</Typography>
                            </span>
                            <Typography>Bids: {auction.bids.length}</Typography>
                            <Button variant='contained' href={`/fletes/${auction.id}`}>Ofertar</Button>
                        </Grid>
                    </Grid>
                </ListItem> )}
            </List>
        </Box>
    </Box>)
}

const styles = {
    ListItem:{
        border:'1px solid red',
        width:'90%',
        mx:'auto',
        my:2,
        borderRadius:4,
        boxShadow:'0 0 10px #0005',
        p:2
    },
    prices:{
        '& .original_price':{
            fontWeight:'bold'
        },
        span: {
            display:'flex',
            alignItems:'center',
            flexDirection:'row',
            '& .last_price':{
                textDecoration:'line-through',
                opacity:0.5
            },
            '& .current_price':{
                position:'relative',
                left:-10,
                borderRadius:5,
                px:0.5,
                boxShadow:'-4px 0 5px #0005',
                backgroundColor:'#fff',
                borderRight:'1px solid #0005'
            }
        }
    }
}
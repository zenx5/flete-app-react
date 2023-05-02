import { Box, Typography } from '@mui/material'
import { useEffect } from 'react'
import { useDispatch, useSelector } from '../redux/store'
import { getAuctions } from '../redux/slices/auction'
import { Banner} from '../sections'

export default function List () {
    const { auctions, loading } = useSelector(state => state.auction)
    const dispatch = useDispatch()

    useEffect(()=>{
        if( auctions.length === 0 ) {
            dispatch(getAuctions())
        }
    },[dispatch])


    return(<Box>
        <Banner />
        <Box>
            <Typography>Fletes</Typography>
            { auctions.map( auction => <Typography key={auction.id}>{auction.name}</Typography> )}
        </Box>
    </Box>)
}
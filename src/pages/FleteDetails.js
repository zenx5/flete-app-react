import { Box, Grid, Typography, Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAuction } from "../redux/slices/auction";
import { setBid } from "../redux/slices/bid";
import { useDispatch, useSelector } from "../redux/store";
import { Banner } from "../sections";


export default function FleteDetails () {
    const [valueBid, setValueBid] = useState(100)
    const {id} = useParams()
    const dispatch = useDispatch()
    const { auction, loading:loadingAuction } = useSelector( state => state.auction )
    const { bids, loading:loadingBid } = useSelector( state => state.bid )

    useEffect(()=>{
        if( !auction ) {
            dispatch(getAuction(id))
        }
    },[dispatch, id])

    useEffect(()=>{
        dispatch(getAuction(id))
    },[bids, id])

    const handlerBid = () => {
        dispatch(setBid({
            value:valueBid,
            user_id:2,
            auction_id:parseInt(id),
            create_at: new Date()
        }))
    }

    const handlerChangeBid = ({ target:{ value } }) => {
        setValueBid(value)
    }

    return <Box>
        <Banner />
        <Grid container>
            <Grid item xs={6}>
                <img src={auction?.image} />
            </Grid>
            <Grid item xs={6}>
                <Typography variant='h4'>{auction?.name}</Typography>
                <Typography variant='body1'>{auction?.description}</Typography>
                <span style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                    <TextField
                        type='number'
                        min='100'
                        value={valueBid}
                        onChange={handlerChangeBid}></TextField>
                    <Button variant='contained' sx={{height:'100%'}} onClick={handlerBid}>Pujar</Button>
                </span>
            </Grid>
        </Grid>
    </Box>
}
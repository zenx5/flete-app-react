import { Box, Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAuction } from "../redux/slices/auction";
import { useDispatch, useSelector } from "../redux/store";
import { Banner } from "../sections";


export default function FleteDetails () {
    const {id} = useParams()
    const dispatch = useDispatch()
    const { auction, loading } = useSelector( state => state.auction )

    useEffect(()=>{
        if( !auction ) {
            dispatch(getAuction(id))
        }
    },[dispatch, id])


    return <Box>
        <Banner />
        <Grid container>
            <Grid item xs={6}>
                <img src={auction?.image} /> 
            </Grid>
            <Grid item xs={6}>
                <Typography variant='h4'>{auction?.name}</Typography>
                <Typography variant='body1'>{auction?.description}</Typography>

            </Grid>
        </Grid>
    </Box>
}
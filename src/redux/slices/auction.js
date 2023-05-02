import { createSlice } from "@reduxjs/toolkit";
import AuctionService from "../../services/AuctionService";

const initialState = {
    isLoading: false,
    error: null,
    auction: null,
    auctions: [],
    createAuction: null
}

const slice = createSlice({
    name:'auction',
    initialState,
    reducers:{
        // RESET ALL
        restartInitialState(state) {
            state.isLoading=false
            state.error=null
            state.auction=null
            state.auctions=[]
            state.createAuction=null
        },
        // START LOADING
        startLoading(state) {
            state.isLoading = true
        },

        // HAS ERROR
        hasError(state, action) {
            state.isLoading = false
            state.error = action.payload
        },

         // SET CREATE PRODUCT
        setCreateAuction(state, action) {
            state.createAuction = action.payload
        },

        // GET PRODUCTS
        getAuctionsSuccess(state, action) {
            state.isLoading = false
            state.auctions = action.payload
            state.auction = null
        },

        // GET PRODUCT
        getAuctionSuccess(state, action) {
            state.isLoading = false
            state.auction = action.payload
            state.auctions = []
        },
    }

})

export default slice.reducer

export function restart(){
    return async (dispatch) => {
        dispatch(slice.actions.restartInitialState())
    }
}

export function getAuctions(){
    return async (dispatch) => {
        dispatch(slice.actions.startLoading())
        try{
            console.log('getAuction')
            const response = await AuctionService.fetch()
            console.log(response)
            dispatch(slice.actions.getAuctionsSuccess(response))
        }catch( error ) {
            console.log(error)
            dispatch(slice.actions.hasError(error))
        }
    }
}

export function getAuction(id){
    return async (dispatch) => {
        dispatch(slice.actions.startLoading())
        try{
            const response = await AuctionService.get(id)
            console.log(response)
            dispatch(slice.actions.getAuctionSuccess(response))
        }catch( error ) {
            dispatch(slice.actions.hasError(error))
        }
    }
}

export function setAuction(data){
    return async (dispatch) => {
        dispatch(slice.actions.startLoading())
        try{
            if( data.id ) {
                await AuctionService.update(data.id, data)
            }else{
                await AuctionService.post(data)
            }
            dispatch(getAuctions())
            dispatch(slice.actions.setCreateAuction(data))
        }catch( error ) {
            dispatch(slice.actions.hasError(error))
        }
    }
}

export function deleteAuction(id){
    return async (dispatch) => {
        dispatch(slice.actions.startLoading())
        try{
            const response = await AuctionService.delete(id)
            dispatch(getAuctions())
            dispatch(slice.actions.setCreateAuction(response))
        }catch( error ) {
            dispatch(slice.actions.hasError(error))
        }
    }
}
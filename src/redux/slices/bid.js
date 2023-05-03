import { createSlice } from "@reduxjs/toolkit";
import BidService from "../../services/BidService";

const initialState = {
    isLoading: false,
    error: null,
    bid: null,
    bids: [],
    createBid: null
}

const slice = createSlice({
    name:'bid',
    initialState,
    reducers:{
        // RESET ALL
        restartInitialState(state) {
            state.isLoading=false
            state.error=null
            state.bid=null
            state.bids=[]
            state.createBid=null
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
        setCreateBid(state, action) {
            state.createBid = action.payload
        },

        // GET PRODUCTS
        getBidsSuccess(state, action) {
            state.isLoading = false
            state.bids = action.payload
            state.bid = null
        },

        // GET PRODUCT
        getBidSuccess(state, action) {
            state.isLoading = false
            state.bid = action.payload
            state.bids = []
        },
    }

})

export default slice.reducer

export function restart(){
    return async (dispatch) => {
        dispatch(slice.actions.restartInitialState())
    }
}

export function getBids(){
    return async (dispatch) => {
        dispatch(slice.actions.startLoading())
        try{
            const response = await BidService.fetch()
            console.log(response)
            dispatch(slice.actions.getBidsSuccess(response))
        }catch( error ) {
            console.log(error)
            dispatch(slice.actions.hasError(error))
        }
    }
}

export function getBid(id){
    return async (dispatch) => {
        dispatch(slice.actions.startLoading())
        try{
            const response = await BidService.get(id)
            console.log(response)
            dispatch(slice.actions.getBidSuccess(response))
        }catch( error ) {
            dispatch(slice.actions.hasError(error))
        }
    }
}

export function setBid(data){
    return async (dispatch) => {
        dispatch(slice.actions.startLoading())
        try{
            if( data.id ) {
                await BidService.update(data.id, data)
            }else{
                await BidService.post(data)
            }
            dispatch(getBids())
            dispatch(slice.actions.setCreateBid(data))
        }catch( error ) {
            dispatch(slice.actions.hasError(error))
        }
    }
}

export function deleteBid(id){
    return async (dispatch) => {
        dispatch(slice.actions.startLoading())
        try{
            const response = await BidService.delete(id)
            dispatch(getBids())
            dispatch(slice.actions.setCreateBid(response))
        }catch( error ) {
            dispatch(slice.actions.hasError(error))
        }
    }
}
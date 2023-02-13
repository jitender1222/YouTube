import { createSlice } from "@reduxjs/toolkit";

const appSlice=createSlice({

    name:"app",
    initialState:{
        isMenuOpen:true,
    },

    reducers:{

        // we have to make a actions

        toogleMenu:(state)=>{
            state.isMenuOpen=!state.isMenuOpen
        },

        closeMenu:(state)=>{
            state.isMenuOpen=false
        }
    },
})


export const {toogleMenu,closeMenu}=appSlice.actions;
export default appSlice.reducer;
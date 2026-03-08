import { createSlice } from "@reduxjs/toolkit";

const tableSlice = createSlice({
    name: "table",
    initialState: {
        tableData: [],
        showedData: [],
        currentPage: 1
    },
    reducers: {
        setTableData: (state, action)=>{
            state.tableData = action.payload;
        },
        setShowedData: (state, action)=>{
            state.showedData = action.payload;
        },
        setCurrentPage: (state, action)=>{
            state.currentPage = action.payload
        }
    }
});

export const {setTableData, setShowedData, setCurrentPage} = tableSlice.actions;
export default tableSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const tableSlice = createSlice({
    name: "table",
    initialState: {
        tableData: []
    },
    reducers: {
        setTableData: (state, action)=>{
            state.tableData = action.payload;
        }
    }
});

export const {setTableData} = tableSlice.actions;
export default tableSlice.reducer;
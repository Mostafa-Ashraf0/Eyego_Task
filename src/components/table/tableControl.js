"use client";
import { useState,useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setTableData, setShowedData } from '@/features/reducers/tableSlice';

const TableControl = ()=>{
    const tableData = useSelector((state)=> state.table.tableData);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(setShowedData(tableData.slice(0,10)));
    },[tableData])

    const handleSort = (e)=>{
        const value = e.target.value;
        if(!value) return;
        if(value){
            const sorted = [...tableData].sort((a,b)=> a[value] - b[value]);
            dispatch(setTableData(sorted));
        }
    }

    const handleFilter = (e)=>{
        const value = e.target.value;
        if(!value) return;
        if(value){
            const Filtered = [...tableData].filter(a=>a.gender === value);
            dispatch(setTableData(Filtered));
        }
    }
    return(
        <div className="w-full flex items-center justify-end gap-5 border-l-2 border-t-2 border-r-2 border-gray-200 px-4 py-2">
            <select onChange={handleFilter}>
                <option value="">Select Filter</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>
            <select onChange={handleSort}>
                <option value="">Sort by</option>
                <option value="id">Id</option>
                <option value="age">Age</option>
                <option value="salary">Salary</option>
            </select>
        </div>
    )
};

export default TableControl;
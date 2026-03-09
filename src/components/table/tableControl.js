"use client";
import { useState,useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setTableData, setShowedData } from '@/features/reducers/tableSlice';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import autoTable from "jspdf-autotable";

const TableControl = ()=>{
    const tableData = useSelector((state)=> state.table.tableData);
    const dispatch = useDispatch();

    const toPdfData = ()=>{
      const pdf = new jsPDF();
      autoTable(pdf,{
        head:[['Id','Name','Email','Age','Salary','Gender']],
        body: tableData.map(d=>[
          d.id,d.name,d.email,d.age,d.salary,d.gender
        ])
      })
      pdf.save('data.pdf');
    }

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
        <div className="w-full flex items-center justify-between border-l-2 border-t-2 border-r-2 border-gray-200 px-4 py-2">
            <div>
                <button 
                className="px-2 py-1 rounded-sm bg-red-500 text-white cursor-pointer hover:bg-red-400"
                onClick={toPdfData}>Print .pdf</button>
            </div>
            <div className="flex items-center gap-5">
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
        </div>
    )
};

export default TableControl;
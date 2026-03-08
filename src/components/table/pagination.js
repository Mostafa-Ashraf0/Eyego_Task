import {data} from '../../features/data/dummy';
import { useDispatch, useSelector } from 'react-redux';
import { setShowedData,setCurrentPage } from '@/features/reducers/tableSlice';
import rightIcon from '../../../public/right-circle-svgrepo-com.svg';
import leftIcon from '../../../public/left-circle-svgrepo-com.svg';
import Image from 'next/image';

const Pagination = ()=>{
    const dispatch = useDispatch();
    const tableData = useSelector((state)=> state.table.tableData);
    const currentPage = useSelector((state)=> state.table.currentPage);
    
    const TotalPages = Math.ceil(tableData.length / 10);
    let pages =[];
    for(let i=0; i<TotalPages; i++){
        pages.push(i+1)
    };

    //by page number
    const handleClick = (page)=>{
        const start = (page * 10) - 10;
        const end = (page * 10);
        dispatch(setShowedData(tableData.slice(start,end)));
        dispatch(setCurrentPage(page));
    }

    //prev
    const handlePrev = (currentPage) => {
        if(currentPage <= 1) return;

        const prevPage = currentPage - 1;
        const start = (prevPage - 1) * 10;
        const end = prevPage * 10;

        dispatch(setShowedData(tableData.slice(start, end)));
        dispatch(setCurrentPage(prevPage));
    }
    //next
    const handleNext = (currentPage) => {
        if(currentPage >= TotalPages) return;

        const nextPage = currentPage + 1;
        const start = (nextPage - 1) * 10;
        const end = nextPage * 10;

        dispatch(setShowedData(tableData.slice(start, end)));
        dispatch(setCurrentPage(nextPage));
    }

    return(
        <div 
        className="w-full flex items-center justify-end gap-12 border-l-2 border-b-2 border-r-2 border-gray-200 px-4 py-2">
        <span className='text-sm'>Showing {((currentPage - 1) * 10)+1}-{currentPage*10} of {data.length}</span>
            <div className='flex items-center gap-1'>
                <span 
                className='cursor-pointer'
                onClick={()=>handlePrev(currentPage)} 
                >
                    <Image src={leftIcon} alt='' width={25} height={25}/>
                </span>
                {pages?.map((page) => (
                 page<5 && 
                 <span 
                 onClick={()=>handleClick(page)}
                 key={page} 
                 className="px-2 cursor-pointer border rounded">{page}</span>
                ))}...
                <span 
                className='cursor-pointer'
                onClick={()=>handleNext(currentPage)}>
                   <Image src={rightIcon} alt='' width={25} height={25}/>
                </span>
            </div>
        </div>
    )
};

export default Pagination;
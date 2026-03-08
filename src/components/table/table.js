import {data} from '../../features/data/dummy';
import Pagination from './pagination';

const Table = () => {
    const style = "text-left px-4 py-2 border-b-2 border-gray-200"
  return (
    <>
    <table border="1" cellPadding="5" cellSpacing="0" className="w-full border-2 border-gray-200">
      <thead>
        <tr className="text-gray-400 font-light">
          <th className={style}>Id</th>
          <th className={style}>Name</th>
          <th className={style}>Email</th>
          <th className={style}>Age</th>
          <th className={style}>Salary</th>
          <th className={style}>Gender</th>
        </tr>
      </thead>
      <tbody>
            {data.map(d=>(
                <tr key={d.id}>
                    <td className={style}>{d.id}</td>
                    <td className={style}>{d.name}</td>
                    <td className={style}>{d.email}</td>
                    <td className={style}>{d.age}</td>
                    <td className={style}>{d.salary}</td>
                    <td className={style}>{d.gender}</td>
                </tr>
            ))}
      </tbody>
    </table>
    <Pagination/>
    </>
  );
};

export default Table;
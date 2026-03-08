


const Table = () => {
    const style = "text-left px-4 py-2 border-b-2 border-gray-200"
  return (
    <table border="1" cellPadding="5" cellSpacing="0" className="w-full border-2 border-gray-200">
      <thead>
        <tr className="text-gray-400 font-light">
          <th className={style}>Name</th>
          <th className={style}>Email</th>
          <th className={style}>Age</th>
          <th className={style}>Salary</th>
          <th className={style}>Gender</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className={style}>Mostafa</td>
          <td className={style}>mostafa@gmail.com</td>
          <td className={style}>25</td>
          <td className={style}>10000</td>
          <td className={style}>Male</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
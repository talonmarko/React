import React, {useState, useEffect} from 'react';
import axios from 'axios';
import DataTable from "react-data-table-component"
import "./styles.css";

function App (){
  const [count, setCount] = useState();

  useEffect(() => {
    axios.get('http://localhost:3000/api/count')
    .then((response) => {
         setCount(response.data.count);
       })
       .catch((error) => {
         console.log(error);
       });
   }, []);

   const columns = [
    {
      name: "Päivämäärä",
      selector: row => row.pvm,
      sortable: true
    },
    {
      name: "Puuro",
      selector: row => row.puuro,
      sortable: true
    },
    {
      name: "Lounas",
      selector: row => row.lounas,
      sortable: true
    }];
  
    const data = [
      {
        pvm: '08.01.2024',
        puuro: JSON.stringify(count),
        lounas: '174',
      },
      {
        pvm: '09.01.2024',
        puuro: '54',
        lounas: JSON.stringify(count)
      },
      {
        pvm: '10.01.2024',
        puuro: '78',
        lounas: '134'
      },
      {
        pvm: '11.01.2024',
        puuro: JSON.stringify(count),
        lounas: '162'
      },
      {
        pvm: '12.01.2024',
        puuro: '99',
        lounas: '142'
      }
  ];

  return (
    <div>
      <h1>MongoDB Testing with React</h1>

      <div class="count">
        Count: {count}
      </div>

      <div className='table' style={{ width: '70%'}}>
      <DataTable
        columns={columns}
        data={data}
      ></DataTable>
    </div>
    </div>
  );
};

export default App;

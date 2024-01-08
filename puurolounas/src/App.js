import React, {useEffect, useState} from "react";
import DataTable from "react-data-table-component";
import Dropdown from "react-bootstrap/Dropdown";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./styles.css";
import axios from "axios";

function App() {

  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([
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
    }
  ]);
 
  useEffect(() => {
    axios.get("http://localhost:3000/api/data")
    .then(response => setCount(response.data.count))
    .catch(error => console.error('There has been a problem with your fetch operation:', error));
  }, []);

//   const data =[
//     {
//       pvm: '11.12.2023',
//       puuro: 'SELECT COUNT(*) FROM lounas',
//       lounas: '182'
//     },

//     {
//       pvm: '12.12.2023',
//       puuro: '54',
//       lounas: '123'
//     },

//     {
//       pvm: '13.12.2023',
//       puuro: '78',
//       lounas: '151'
//     },

//     {
//       pvm: '14.12.2023',
//       puuro: '89',
//       lounas: '162'
//     },

//     {
//       pvm: '15.12.2023',
//       puuro: '99',
//       lounas: '142'
//   }
// ]

return (
  <>
    <Navbar bg="dark" data-bs-theme="dark">
      <Container className="navbar">
        <Navbar.Brand href="#home" className="ravintola">Ravintola Kasarmi</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home" className="muu">Etusivu</Nav.Link>
          <Nav.Link href="#placeholder1" className="muu">Lorem</Nav.Link>
          <Nav.Link href="#placeholder2" className="muu">Ipsum</Nav.Link>
          <Nav.Link href="#admin" className="muu">Admin</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
 
    <h1>Ruokailumäärät, Ravintola Kasarmi</h1>
    <>
      <p>Kirjatut puurot tänään: {count}</p>
      <p>Kirjatut lounaat tänään: {count}</p>
    </>
    <Dropdown>
      <Dropdown.Toggle variant="dark" id="dropdown-basic">
        Valitse Viikko
      </Dropdown.Toggle>
 
      <Dropdown.Menu>
        <Dropdown.Item href="1">Viikko 1</Dropdown.Item>
        <Dropdown.Item href="2">Viikko 2</Dropdown.Item>
        <Dropdown.Item href="3">Viikko 3</Dropdown.Item>
        <Dropdown.Item href="4">Viikko 4</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
 
    <div className='container mt-5'>
      <DataTable
        columns={columns}
        data={data}
      ></DataTable>
    </div>
  </>
 );
}
<input type="color"></input>


export default App;

import React, {useEffect, useState} from "react";
import DataTable from "react-data-table-component";
import Dropdown from "react-bootstrap/Dropdown";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./styles.css";
import logo from './logo.png';
import { push as Menu } from "react-burger-menu";
import axios from "axios";
import * as moment from "moment";
import "moment-business-days";

function App() {

  const startDate = moment('2024-01-01');
  const endDate = moment('2024-12-31');

  const countOfBusinessDays = startDate.businessDiff(endDate);
    console.log(`Number of business days: ${countOfBusinessDays}`);

function getLastFiveBusinessDays() {
  let days = [];
    let currentDay = moment().subtract(1, 'days');
     
  for(let i = 0; i < 5; i++) {
    while (currentDay.isoWeekday() === 6 || currentDay.isoWeekday() === 7) {
      currentDay.subtract(1, 'days');
      }
      days.push(currentDay.format('DD.MM.YYYY'));
        currentDay.subtract(1, 'days');
      }
      return days;
     }

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

    const data = getLastFiveBusinessDays().map((date, index) => {
      if (index === 0) {
         return {
           pvm: date,
           puuro: JSON.stringify(count),
           lounas: ''
         };
      } else {
         return {
           pvm: date,
           puuro: '',
           lounas: ''
         };
      }
     });

return (
  <>
  <Menu right>
    <a id="home" className="menu-item" href="/">Etusivu</a>
    <a id="about" className="menu-item" href="/about">About</a>
    <a id="contact" className="menu-item" href="/contact">Contact</a>
    <a id="admin" className="menu-item" href="/admin">Admin</a>
      </Menu>
    <Navbar bg="dark" data-bs-theme="dark">
      <Container className="navbar">
        <img src={logo} alt="logo" className="logo" style={{width: '200px', height: '150px' }} />
        <h1>Ruokailumäärät, Ravintola Kasarmi</h1>
        <Nav className="me-auto">
        </Nav>
      </Container>
    </Navbar>
     <>
      <p>Kirjatut puurot tänään: </p>
      <p>Kirjatut lounaat tänään: </p>
    </>

    {/* <div>
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
    </div> */}
 
    <div className='container mt-5' style={{ width: '70%'}}>
      <h2>Viimeisen 5 työpäivän tilastot:</h2>
      <DataTable
        columns={columns}
        data={data}
      ></DataTable>
    </div>
  </>
 );
}

export default App;

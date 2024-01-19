import {PrismaClient} from '@prisma/client';
import React, {useEffect, useState} from "react";
import DataTable from "react-data-table-component";
import Dropdown from "react-bootstrap/Dropdown";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./styles.css";
import logo from './logo.png';
import { slide as Menu } from "react-burger-menu";

function App() {

  const prisma = new PrismaClient();

  const [result, setResult] = useState();

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
        puuro: '53',
        lounas: JSON.stringify(result),
      },
      {
        pvm: '09.01.2024',
        puuro: '54',
        lounas: '123'
      },
      {
        pvm: '10.01.2024',
        puuro: '78',
        lounas: '151'
      },
      {
        pvm: '11.01.2024',
        puuro: '89',
        lounas: '162'
      },
      {
        pvm: '12.01.2024',
        puuro: '99',
        lounas: '142'
      }
  ];

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
      <p>Kirjatut puurot tänään: 83</p>
      <p>Kirjatut lounaat tänään: 137</p>
    </>

    <div>
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
    </div>
 
    <div className='container mt-5' style={{ width: '70%'}}>
      <DataTable
        columns={columns}
        data={data}
      ></DataTable>
    </div>
  </>
 );
}

export default App;

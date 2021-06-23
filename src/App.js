import './App.css';
import React, { useState, useEffect } from "react"; 
import { StyledHeader, StyledTable } from "./styles/core.js";

function App() {
  const [infoList, setInfoList] = useState([]);

  const loadData = async () =>{
    fetch('https://adelinalr.000webhostapp.com/valoresAdmin.php')
    .then(response => response.json())
    .then(response => setInfoList(response))

    console.log(infoList);
}


  useEffect(() => {
    loadData();
  }, [])

  return (
    <>
      <StyledHeader>
            <header>
                <h1> 
                    Validador de competencia
                </h1>
            </header>
        </StyledHeader>

        <StyledTable>
          <thead>
            <tr>
              <td>Codigo</td>
              <td>Nombre</td>
              <td>Distancia</td>
              <td>Tiempo</td>
              <td>Imagen</td>
            </tr>
          </thead>
          <tbody>
              {infoList.map((o, i) =>{
                return (
                  <tr>
                    <td>{o.Codigo}</td>
                    <td>{o.Nombre}</td>
                    <td>{o.Distancia} metros</td>
                    <td>{o.Tiempo} min</td>
                    <td> <img src={o.Imagen} style = {{width: 100}}/></td>
                    <td><button>Validar</button>  <button>Eliminar</button></td>
                  </tr>
                ); 
              })}             
          </tbody>
        </StyledTable>


    </>
  );
}

export default App;

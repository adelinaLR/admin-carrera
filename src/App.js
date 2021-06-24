import './App.css';
import React, { useState, useEffect, useReducer} from "react"; 
import { StyledHeader, StyledTable } from "./styles/core.js";

function App(){
  const [infoList, setInfoList] = useState([]);
  let  [value,setValue]=useState(0);
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);


  function loadData(){
    fetch('https://adelinalr.000webhostapp.com/valoresAdmin.php')
    .then(response => response.json())
    .then(response => setInfoList(response))
    console.log(infoList.length);
    console.log(infoList);
  }
  function validate(aux){

    Promise.all([
      fetch('https://adelinalr.000webhostapp.com/actualizaDistanciaTiempo.php?codigo='+aux.Codigo+'&tiempo='+aux.Tiempo+'&distancia='+aux.Distancia),
      fetch('https://adelinalr.000webhostapp.com/actStatusRow.php?id='+aux.id)
    ]).then(response => loadData())
    console.log(aux.Codigo);
    
  };

  function del(aux){
    fetch('https://adelinalr.000webhostapp.com/actStatusRow.php?id='+aux.id) 
    .then(response => {loadData()})
    
  };

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
                    <tr key={o.id}>
                      <td>{o.Codigo}</td>
                      <td>{o.Nombre}</td>
                      <td>{o.Distancia} metros</td>
                      <td>{o.Tiempo} min</td>
                      <td> <img src={o.Imagen} style = {{width: 100}}/></td>
                      <td><button onClick={()=>validate(o)}>Validar</button>  <button onClick={()=>del(o)}>Eliminar</button></td>
                    </tr>
                  ); 
                })}             
            </tbody>
          </StyledTable>


      </>
    );
  
}

export default App;

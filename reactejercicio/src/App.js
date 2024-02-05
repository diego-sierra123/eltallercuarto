import React, { useState, useEffect } from 'react';
import './App.css';
import './componentescss/estilo.css'

function App() {
  const [numero, setNumero] = useState('');
  const [resultado, setResultado] = useState('');

  useEffect(() => {
    console.log('La página se ha cargado');
  }, []);

  const determinar = () => {
    const num = parseInt(numero);
    if (!isNaN(num)) {
      if (num % 2 === 0) {
        setResultado('El número ingresado es PAR.');
      } else {
        setResultado('El número ingresado es IMPAR.');
      }
    } else {
      setResultado('Por favor, ingresar el número para determinar si es par o impar. No se permiten iconos ni letras.');
    }
  };

  const borrar = () => {
    setNumero('');
    setResultado('');
  }

  return (
    <div className="centrar">
      <form className="formulario" style={{ borderRadius: '20px', border: '4px solid gray' }}>
        <div className="text-center">
          <h2 className="text-white"><b>DETERMINAR SI EL NÚMEROS ES PAR O IMPAR</b></h2>
        </div>
        <br />
        <div className="mb-3">
          <label className="form-label text-white"><b>INGRESE UN NÚMERO:</b></label>
          <input type="number" placeholder="Ingrese un número" className="form-control" value={numero} onChange={(e) => setNumero(e.target.value)} />
          <div id="emailHelp" class="form-text text-white"><b>En este campo deberá ingresar el número.</b></div>
        </div>
        <div className="text-center">
          <button type="button" className="btn btn-secondary" style={{ border: '2px solid black', marginTop: '5px', marginRight: '5px'}} onClick={borrar}>Borrar</button>
          <button type="button" className="btn btn-primary" style={{ border: '2px solid black', marginTop: '5px', marginRight: '5px'}} onClick={determinar}>Determinar </button>
        </div>
        <br />
        {resultado && (
          <div className="text-center" id="res" style={{ marginLeft: '10px', marginRight: '10px'}}>
            <h5 className='text-white'>{resultado}</h5>
          </div>
        )}
      </form>
    </div>
  );
}

export default App;

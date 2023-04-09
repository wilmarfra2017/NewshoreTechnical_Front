import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJourneyData } from '../slice/journeyThunk';
import "../assets/css/RequestJourney.css";
import NavbarPage from "../layout/NavbarPage";
import Alert from 'react-bootstrap/Alert';


const RequestJourney = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const dispatch = useDispatch();
  const { journeyData, isLoading } = useSelector(state => state.journey);
  const [error, setError] = useState([]);

  const handleSubmit = e => {
    let listErrors = [];
    e.preventDefault();
    if(origin.trim()===""){
      listErrors.push("El origen es un campo requerido");
    }
    if(destination.trim()===""){
      listErrors.push("El destino es un campo requerido");
    }
    if(listErrors.length > 0){
      setError(listErrors);
      return;
    }
    setError([]);

    dispatch(fetchJourneyData(origin, destination));
  };

  return (
    <> 
     
    <div className="container">
    {isLoading ? (
        <h3>Cargando...</h3>
      ) : ( 
       <div className="col-12">
      <NavbarPage/>
      
      <hr />
      <hr />
      <input
        id="origin"
        type="text"
        value={origin}
        onChange={e => setOrigin(e.target.value)}
        placeholder="Origen"
      />
      <input
        id="destination"
        type="text"
        value={destination}
        onChange={e => setDestination(e.target.value)}
        placeholder="Destino"
      />
      <button onClick={handleSubmit}>Enviar</button>
      <textarea readOnly value={JSON.stringify(journeyData, null, 2)} />
      </div>
      )}

      <div className="row mt-3">
         {error.length > 0 ? (
          <>
            {error.map((er, index) => (
              <div className="col-12" key={index}>
                <Alert variant='danger'>{er}</Alert>
              </div>
            ))}
          </>
        ) : null}
      </div>      
    </div> 
       
    </> 
  );
};

export default RequestJourney;

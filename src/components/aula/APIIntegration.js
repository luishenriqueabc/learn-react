import { useEffect, useState } from "react";
import FormsTuristic from '../aula/FormsTuristic';
import {BsTrash} from "react-icons/bs";
import { useNavigate } from 'react-router-dom'
import {BsTrash as IconTrash} from "react-icons/bs"
import {TiEdit as IconEdit} from 'react-icons/ti'

    const APIIntegration = () => {
        const [pontos, setPontos] = useState(null);
        const navigate = useNavigate();

        
        useEffect(() => {
            fetch("http://localhost/lp2/api/pontos/select-all")
                .then((response) => response.json())
                .then((data) => setPontos(data));
               
        }, []);
        
        const handleTrashClick = (pontosId) => {
          const formData = new FormData();
          formData.append('id', pontosId);
          const urlDelete = "http://localhost/lp2/api/pontos/delete";
          fetch(urlDelete, {
            method: 'POST',
            body: formData
          })
            .then((response) => response.json())
            .then((data) => {
              alert(data.message)
              let pontosFiltered = pontos.filter(function(pontos){ 
                return pontos.id !== pontosId;
              });
              setPontos(pontosFiltered)
            });
        }
        
        return (
            <>
            <FormsTuristic setPontos={setPontos} pontos={pontos}/>
            {pontos &&
              pontos.map((pontos) => {
                return (
                  <div key={pontos.id}>
                    <h1>{pontos.name}</h1>
                    <p>{pontos.sobre}</p>
                    <p>{pontos.fotos}</p>
                    <IconTrash 
              onClick={() => handleTrashClick(pontos.id)}
              style={{cursor: 'pointer'}}
            />
            <IconEdit 
              onClick={() => navigate('edit/'+pontos.id)} 
              style={{cursor: 'pointer'}}>
              </IconEdit>
               
                  </div>
                )
              })
            }
            </>
          )
        }

export default APIIntegration;
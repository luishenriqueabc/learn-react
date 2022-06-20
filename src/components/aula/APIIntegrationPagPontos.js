import { useEffect, useState } from "react";
import FormsPaginaTuristic from '../FormsPaginaTuristic';
import {BsTrash} from "react-icons/bs";
import { useNavigate } from 'react-router-dom'
import {BsTrash as IconTrash} from "react-icons/bs"
import {TiEdit as IconEdit} from 'react-icons/ti'
import "./APIIntegration.css";

    const APIIntegrationPagpontos = () => {
        const [paginapontos, setPaginaPontos] = useState(null);
        const navigate = useNavigate();

        
        useEffect(() => {
            fetch("http://localhost/lp2/api/paginapontos/select-all")
                .then((response) => response.json())
                .then((data) => setPaginaPontos(data));
               
        }, []);
        
        const handleTrashClick = (pontosId) => {
          const formData = new FormData();
          formData.append('id', pontosId);
          const urlDelete = "http://localhost/lp2/api/paginapontos/delete";
          fetch(urlDelete, {
            method: 'POST',
            body: formData
          })
            .then((response) => response.json())
            .then((data) => {
              alert(data.message)
              let pontosFiltered = paginapontos.filter(function(pontos){ 
                return paginapontos.id !== pontosId;
              });
              setPaginaPontos(pontosFiltered)
            });
        }
        
        return (
            <>
            <div className="form">
            <FormsPaginaTuristic setPaginaPontos={setPaginaPontos} paginapontos={paginapontos}/>
            </div>
            <div className='cs'>
            {paginapontos &&
              paginapontos.map((paginapontos) => {
                return (
                  <div key={paginapontos.id}>
                    <h1>{paginapontos.name}</h1>
                    <p>{paginapontos.sobre}</p>
                    <p>{paginapontos.pertence}</p>
                    <p>{paginapontos.quantaspessoas}</p>
                    <IconTrash onClick={() => handleTrashClick(paginapontos.id)}
              style={{cursor: 'pointer'}}
              />
            <IconEdit onClick={() => navigate('../edittt/'+paginapontos.id)}
              style={{cursor: 'pointer'}}>
              </IconEdit>
                </div>
                )
              })
            }
            </div>
            </>
          )
        }

export default APIIntegrationPagpontos;
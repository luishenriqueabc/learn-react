import { useEffect, useState } from "react";
import {BsTrash} from "react-icons/bs";
import { useNavigate } from 'react-router-dom'
import {BsTrash as IconTrash} from "react-icons/bs"
import {TiEdit as IconEdit} from 'react-icons/ti'
import FormFigure from "./FormFigure";


    const APIintegrationFigure = () => {
        const [figure, setFigure] = useState(null);
        const navigate = useNavigate();

        
        useEffect(() => {
            fetch("http://localhost/lp2/api/figure/select-all")
                .then((response) => response.json())
                .then((data) => setFigure(data));
               
        }, []);
        
        const handleTrashClick = (figureId) => {
          const formData = new FormData();
          formData.append('id', figureId);
          const urlDelete = "http://localhost/lp2/api/figure/delete";
          fetch(urlDelete, {
            method: 'POST',
            body: formData
          })
            .then((response) => response.json())
            .then((data) => {
              alert(data.message)
              let figureFiltered = figure.filter(function(figure){ 
                return figure.id !== figureId;
              });
              setFigure(figureFiltered)
            });
        }
        
        return (
            <>
            <div className="form">
            <FormFigure setfigure={setFigure} figure={figure}/>
            </div>
            <div className='cs'>
            {figure &&
              figure.map((figure) => {
                return (
                  <div key={figure.id}>
                    <h1>{figure.foto}</h1>
                    <p>{figure.nome}</p>
                    <IconTrash onClick={() => handleTrashClick(figure.id)}
              style={{cursor: 'pointer'}}
              />
            <IconEdit onClick={() => navigate('../edit/'+figure.id)}
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

export default APIintegrationFigure;
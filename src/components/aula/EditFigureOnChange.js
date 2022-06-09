import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const EditFigureOnChange = () => {

    const { figureId } = useParams()
    const [figure, setFigure] = useState()
    const navigate = useNavigate()

   

    useEffect(() => {
        fetch("http://localhost/lp2/api/figure/select-by-id/?id="+figureId)
            .then((response) => {
                if (response.ok) {
                return response.json();
                }
                throw new Error(response.statusText);
            })
            .then((data) => setFigure(data))
            .catch((error) => {
                console.log(error);
            })
    }, [figureId]);
  
    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData()
        formData.append('id', figureId)
        formData.append('foto', event.target[0].value);
        formData.append('nome', event.target[1].value);
        fetch(
            "http://localhost/lp2/api/figure/update",
            {method: 'POST', body: formData}
            )
            .then((response) => response.json())
            .then((data) => {
                if(data?.pontos?.id){
                    navigate('/figureadm');
                    //setpontos(clearUserValue)
                } else if(data?.message){
                    alert(data.message)
                } else {
                    console.log(data)
                }
            })
    }
    
    const handleChange = (event) => {
        const {name, value} = event.target
        setFigure({...figure, [name]: value})
    } 
  
    return (
        <>
        {figure? (
            <form onSubmit={(event) => handleSubmit(event)}>
                <label>Foto:</label><input type="text" name="foto" value={figure.foto} onChange={handleChange} />
                <label>Nome:</label><input type="text" name="foto2"  value={figure.nome} onChange={handleChange} />
              
              
                <input type="submit" value="Editar" />
            </form>
            )
        : 
            (<p>Usuário não encontrado!</p>)
        }
        </>
    )
}

export default EditFigureOnChange;
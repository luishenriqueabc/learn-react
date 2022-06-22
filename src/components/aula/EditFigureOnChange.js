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
        formData.append('name', event.target[1].value);;
        formData.append('name2', event.target[2].value);
        formData.append('name3', event.target[3].value);
        formData.append('name4', event.target[4].value);
        fetch(
            "http://localhost/lp2/api/figure/update",
            {method: 'POST', body: formData}
            )
            .then((response) => response.json())
            .then((data) => {
                if(data?.figure?.id){
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
        const {nome, value} = event.target
        setFigure({...figure, [nome]: value})
    } 
  
    return (
        <>
        {figure ? (
            <form onSubmit={(event) => handleSubmit(event)}>
                <label>Foto:</label><input type="text" name="foto" value={figure.foto} onChange={handleChange} />
                <label>Nome:</label><input type="text" name="nome" value={figure.name} onChange={handleChange} />
                <label>Nome2:</label><input type="text" name="nome2" value={figure.name2} onChange={handleChange} />
                <label>Nome3:</label><input type="text" name="nome3" value={figure.name3} onChange={handleChange} />
                <label>Nome4:</label><input type="text" name="nome4" value={figure.name4} onChange={handleChange} />
              
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
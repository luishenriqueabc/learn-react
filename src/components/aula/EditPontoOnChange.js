import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const EditPontoOnChange = () => {

    const { pontosId } = useParams()
    const [pontos, setPontos] = useState()
    const navigate = useNavigate()

   

    useEffect(() => {
        fetch("http://localhost/lp2/api/pontos/select-by-id/?id="+pontosId)
            .then((response) => {
                if (response.ok) {
                return response.json();
                }
                throw new Error(response.statusText);
            })
            .then((data) => setPontos(data))
            .catch((error) => {
                console.log(error);
            })
    }, [pontosId]);
  
    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData()
        formData.append('id', pontosId)
        formData.append('name', event.target[0].value)
        formData.append('sobre', event.target[1].value)
        formData.append('foto', event.target[2].value)
        fetch(
            "http://localhost/lp2/api/pontos/update",
            {method: 'POST', body: formData}
            )
            .then((response) => response.json())
            .then((data) => {
                if(data?.pontos?.id){
                    navigate('/create');
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
        setPontos({...pontos, [name]: value})
    } 
  
    return (
        <>
        {pontos? (
            <form onSubmit={(event) => handleSubmit(event)}>
                <label>Nome:</label><input type="text" name="name" value={pontos.name} onChange={handleChange} />
                <label>Sobre:</label><input type="sobre" name="sobre"  value={pontos.sobre} onChange={handleChange} />
                <label>Foto:</label><input type="text" name="foto"  value={pontos.foto} onChange={handleChange} />
                <input type="submit" value="Editar" />
            </form>
            )
        : 
            (<p>Usuário não encontrado!</p>)
        }
        </>
    )
}

export default EditPontoOnChange;
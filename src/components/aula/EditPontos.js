import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const EditPontos = () => {

    const { PontosId } = useParams();
    const [pontos, setPontos] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost/lp2/api/pontos/select-by-id/?id="+PontosId)
            .then((response) => response.json())
            .then((data) => setPontos(data));
    }, [PontosId]);
  
    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData()
        formData.append('id', PontosId)
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
                    navigate('../');
                } else if(data?.message){
                    alert(data.message)
                } else {
                    console.log(data)
                }
            })
    } 
  
    return (
        <>
        {pontos ? (
            <form onSubmit={(event) => handleSubmit(event)}>
                <label>Nome:</label><input type="text" name="name" defaultValue={pontos.name} />
                <label>Sobre:</label><input type="text" name="sobre"  defaultValue={pontos.email} />
                <label>Foto:</label><input type="text" name="foto"  defaultValue={pontos.pass} />
                <input type="submit" value="Editar" />
            </form>
            )
        : 
            (<p>Usuário não encontrado!</p>)
        }
        </>
    )
}

export default EditPontos;
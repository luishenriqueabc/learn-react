import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './FormsTuristic';

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
    formData.append('foto', event.target[0].value);
    formData.append('foto2', event.target[1].value);
    formData.append('foto3', event.target[2].value)
    formData.append('name', event.target[3].value);
    formData.append('sobre', event.target[4].value);
    formData.append('pertence', event.target[5].value);
    formData.append('quantaspessoas', event.target[6].value);
    fetch(
    "http://localhost/lp2/api/pontos/update",
    {method: 'POST', body: formData}
    )
    .then((response) => response.json())
    .then((data) => {
    if(data?.pontos?.id){
    navigate('/pontosadm');
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
    <form className='aba' onSubmit={(event) => handleSubmit(event)}>
    <input type="text" name="foto" value={pontos.foto} onChange={handleChange} />
    <input type="text" name="foto2"  value={pontos.foto2} onChange={handleChange} />
    <input type="text" name="foto3" value={pontos.foto3} onChange={handleChange} />
    <input type="text" name="name" value={pontos.name} onChange={handleChange} />
    <input type="text" name="sobre"  value={pontos.sobre} onChange={handleChange} />
    <input type="text" name="pertence" value={pontos.pertence} onChange={handleChange} />
    <input type="text" name="quantaspessoas"  value={pontos.quantaspessoas} onChange={handleChange} />
    <input type="submit" value="Editar"  style={{cursor: 'pointer',  color:'white',backgroundColor:'black'}}/>
    </form>
    )
    : 
    (<p>Usuário não encontrado!</p>)
    }
    </>
)   
}

export default EditPontoOnChange;
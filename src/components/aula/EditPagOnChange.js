import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const EditPaginaPontoOnChange = () => {
    const { PaginaPontosId } = useParams()
    const [paginapontos, setPaginaPontos] = useState()
    const navigate = useNavigate()
    useEffect(() => {
    fetch("http://localhost/lp2/api/paginapontos/select-by-id/?id=" + PaginaPontosId)
    .then((response) => {
    if (response.ok) {
    return response.json();
    }
    throw new Error(response.statusText);
    })
    .then((data) => setPaginaPontos(data))
    .catch((error) => {
    console.log(error);
    })
    }, [PaginaPontosId]);
    const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData()
    formData.append('id', PaginaPontosId)
    formData.append('foto', event.target[0].value);
    formData.append('foto2', event.target[1].value);
    formData.append('foto3', event.target[2].value)
    formData.append('name', event.target[3].value);
    formData.append('sobre', event.target[4].value);
    formData.append('pertence', event.target[5].value);
    formData.append('quantaspessoas', event.target[6].value);
    fetch(
    "http://localhost/lp2/api/paginapontos/update",
    {method: 'POST', body: formData}
    )
    .then((response) => response.json())
    .then((data) => {
    if(data?.paginapontos?.id){
    navigate('/paginaadm');
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
    setPaginaPontos({...paginapontos, [name]: value})
    } 
    return (
    <>
    {paginapontos? (
    <form className='aba' onSubmit={(event) => handleSubmit(event)}>
   <input type="text" name="foto" value={paginapontos.foto} onChange={handleChange} />
   <input type="text" name="foto2"  value={paginapontos.foto2} onChange={handleChange} />
   <input type="text" name="foto3" value={paginapontos.foto3} onChange={handleChange} />
   <input type="text" name="name" value={paginapontos.name} onChange={handleChange} />
    <input type="text" name="sobre"  value={paginapontos.sobre} onChange={handleChange} />
    <input type="text" name="pertence" value={paginapontos.pertence} onChange={handleChange} />
    <input type="text" name="quantaspessoas"  value={paginapontos.quantaspessoas} onChange={handleChange} />
    <input type="submit" value="Editar"  style={{cursor: 'pointer',  color:'white',backgroundColor:'black'}}/>
    </form>
    )
    : 
    (<p>Usuário não encontrado!</p>)
    }
    </>
    )
    }
export default EditPaginaPontoOnChange;
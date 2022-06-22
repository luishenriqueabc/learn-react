import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const EditPaginaPontoOnChange = () => {

    const { paginapontosId } = useParams()
    const [paginapontos, setPaginaPontos] = useState()
    const navigate = useNavigate()



    useEffect(() => {
        fetch("http://localhost/lp2/api/paginapontos/select-by-id/?id="+ paginapontosId)
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
    }, [paginapontosId]);

    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData()
        formData.append('id', paginapontosId)
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
                    navigate('//paginaadm');
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
    <form onSubmit={(event) => handleSubmit(event)}>
    <label>Foto:</label><input type="text" name="foto" value={paginapontos.foto} onChange={handleChange} />
    <label>Foto2:</label><input type="text" name="foto2"  value={paginapontos.foto2} onChange={handleChange} />
    <label>Foto3:</label><input type="text" name="foto3" value={paginapontos.foto3} onChange={handleChange} />
    <label>Nome:</label><input type="text" name="name" value={paginapontos.name} onChange={handleChange} />
    <label>Sobre:</label><input type="text" name="sobre"  value={paginapontos.sobre} onChange={handleChange} />
    <label>Pertence a qual cidade?:</label><input type="text" name="pertence" value={paginapontos.pertence} onChange={handleChange} />
    <label>Quantas pessoas vão lá?:</label><input type="text" name="quantaspessoas"  value={paginapontos.quantaspessoas} onChange={handleChange} />
    <input type="submit" value="Editar" />
    </form>
    )
    : 
        (<p>Usuário não encontrado!</p>)
    }
    </>
    )
    }

export default EditPaginaPontoOnChange;
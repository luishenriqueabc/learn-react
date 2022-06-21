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
    formData.append('foto2', event.target[1].value);
    formData.append('foto3', event.target[1].value)
    formData.append('fotodofigure', event.target[1].value)
    formData.append('nome', event.target[1].value);
    formData.append('sobre', event.target[1].value);
    formData.append('pertence', event.target[1].value);
    formData.append('quantaspessoas', event.target[1].value);
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
            <>
           <form className='aba' onSubmit={(event) => handleSubmit(event)}>
           <label>Fotoo: </label> <input  ref={fotoRef} type="text" name="foto"/>
           <label>Foto 2: </label> <input ref={foto2Ref} type="text" name="foto2"/>
           <label>Foto 3: </label> <input  ref={foto3Ref} type="text" name="foto3"/>
            <label>Foto do Figure: </label> <input  ref={fotodofigureRef} type="text" name="fotodofigure"/>
           <label>Nome : </label> <input ref={nomeRef} type="text" name="nome"/>
           <label>Sobre : </label> <input  ref={sobreRef} type="text" name="sobre"/>
           <label>Pertence : </label> <input ref={pertenceRef} type="text" name="pertence"/>
           <label>Quantas Pessoas ? : </label> <input ref={quantaspessoasRef} type="text" name="quantaspessoas"/>
              <input type="submit" value="Enviar" />
            </form>
            </>

            )
        : 
            (<p>Usuário não encontrado!</p>)
        }
        </>
    )
}

export default EditFigureOnChange;
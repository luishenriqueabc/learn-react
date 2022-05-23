import APIIntegration from "../aula/APIIntegration";
import EditPontos from "../aula/EditPontos";
import EditPontosOnChange from "../aula/EditPontosOnChange";

const PaginaADM = () =>{
    return(
        <>
        <APIIntegration/>
        <EditPontos/>
        <EditPontosOnChange/>
        </>
    )
}
export default PaginaADM;
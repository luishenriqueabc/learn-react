import { useEffect } from "react";
import { useState} from "react";

const PontosFigure = () =>{
const [figure, setFigure] = useState(null);

useEffect(() => {
fetch("http://localhost/LP2/api/figure/select-by-id/?id=28")
.then((response) => response.json())
.then((data) => setFigure(data))
}, [])
return(
<h1>iziiiii</h1>
)
}
export default PontosFigure;
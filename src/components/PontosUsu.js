import { useEffect, useState } from "react";

    const APIIntegration = () => {
        const [pontos, setPontos] = useState(null);
        
        useEffect(() => {
            fetch("http://localhost/lp2/api/pontos/select-all")
                .then((response) => response.json())
                .then((data) => setPontos(data));
        }, [])



        return(
            <>
            <div className="request">
            {pontos && 
                pontos.map((pontos) => {
                    return (
                      <div key={pontos.id} className="api">
                        <div>
                          <p className="name">{pontos.name}</p>
                        </div>
                        <div className="sobre">
                          <h1>{pontos.sobre}</h1>
                          <p className="foto">R$ {pontos.foto}</p>               
                        <h1>wdwe</h1>
                        </div>
                      </div> 
                    )
                })
            }
            </div>
            </>
        )
    };
   

export default APIIntegration;
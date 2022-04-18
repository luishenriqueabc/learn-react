import "./Rodape.css";
import logo from "../assets/img/logo22.jpg"

const Rodape = () => {
    return(

        <>
        <div className="imgg">
        <img src={logo} />
        </div>

        <div className="copy">
            <p>Copyright</p>
        </div>
        </>
    );
};

export default Rodape;
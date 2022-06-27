
import './FormContatos.css';

function FormC() {
  return (
    <div className='formu'>
    <form>
    <div className="ema">
    <input type="email" placeholder='Email..' name="email"/>
    </div>
    <div className='come'>
    <input type="text" placeholder='Comentario..' row='4' name="comentario"/>
    </div>
    <div className='botao'>
    <input type="submit" value="    Enviar    " />
    </div>
  </form>
  </div>
  )
};

export default FormC;
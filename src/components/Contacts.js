import './Contacts.css';
import face from '../assets/face.png';

const Contact = () =>{
    return(
        <div className='bc'>
            <div className='tudo'>
                <img src={face} width='80' height='80'/>
                <div className='bcg'>
                <h3>Face</h3>
                </div>
            </div>

            <div className='tudo'>
                <img src={face} width='80' height='80'/>
                <div className='bcg'>
                <h3>Face</h3>
                </div>
            </div>

            <div className='tudo'>
                <img src={face} width='80' height='80'/>
                <div className='bcg'>
                <h3>Face</h3>
                </div>
            </div>

        </div>


    )
}
export default Contact;
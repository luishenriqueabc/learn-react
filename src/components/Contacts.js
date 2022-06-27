import './Contacts.css';
import Facebook from '../assets/Face.png';


const Contact = () =>{
    return(
        <div className='bc'>
            <div className='tudo'>
                <img src={Facebook} width='80' height='80'/>
                <div className='bcg'>
                <h3>Face</h3>
                </div>
            </div>

            <div className='tudo'>
                <img src={Facebook} width='80' height='80'/>
                <div className='bcg'>
                <h3>Gmail</h3>
                </div>
            </div>

            <div className='tudo'>
                <img src={Facebook} width='80' height='80'/>
                <div className='bcg'>
                <h3></h3>
                </div>
            </div>

        </div>


    )
}
export default Contact;
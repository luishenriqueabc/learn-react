import './Contacts.css';
import Facebook from '../assets/face.png';
import Gmail from '../assets/gmail.png';
import Linkedin from '../assets/linkedin.png';


const Contact = () =>{
    return(
        <div className='bc'>
            <div className='tudo'>
                <img src={Facebook} width='80' height='80'/>
                <div className='bcg'>
                <h3>Facebook.com/Turistic</h3>
                </div>
            </div>

            <div className='tudo'>
                <img src={Gmail} width='80' height='80' style={{borderRadius:'30px'}}/>
                <div className='bcg'>
                <h3>Gmail.com/Tursitic</h3>
                </div>
            </div>

            <div className='tudo'>
                <img src={Linkedin} width='80' height='80'/>
                <div className='bcg'>
                <h3>Linkedin.com/Turistic</h3>
                </div>
            </div>

        </div>


    )
}
export default Contact;
import { useEffect, useState } from "react";
import './APIIntegrationCommentURL.css';
import { useNavigate } from 'react-router-dom'
import CommentArea from "../Commentarea";
import {BsTrash} from "react-icons/bs";
import {BsTrash as IconTrash} from "react-icons/bs"
import LogoADM from '../LogoADM';
import Footer from '../Footer';

    const APIIntegrationCommentURL = () => {
        const [comment, setcomment] = useState(null);
        const navigate = useNavigate();
        useEffect(() => {
        fetch("http://localhost/lp2/api/comment/select-all")
        .then((response) => response.json())
        .then((data) => setcomment(data));  
        }, []);
        const handleTrashClick = (commentId) => {
        const formData = new FormData();
        formData.append('id', commentId);
        const urlDelete = "http://localhost/lp2/api/comment/delete";
        fetch(urlDelete, {
        method: 'POST',
        body: formData
        })
        .then((response) => response.json())
        .then((data) => {
        alert(data.message)
        let commentFiltered = comment.filter(function(comment){ 
        return comment.id !== commentId;
        });
        setcomment(commentFiltered)
        });
        }
        return (
            <>
            <LogoADM />

            <h1>ADMIN COMENTÁRIO</h1>
        {comment &&
        comment.map((comment) => {
        return (
        <div className='comment' style={{backgroundColor:'rgb(46, 130, 255)', marginTop:'30px'}}>
        <div key={comment.id}>
        <div className="eme">
        <h1>{comment.email}</h1>
        </div>
        <div className="comentariow">
        <p>{comment.comentario}</p>
        </div>
        <IconTrash onClick={() => handleTrashClick(comment.id)}
        style={{cursor: 'pointer', color: 'white', height:'100px'}}/>
        </div>
        </div>
        )
        })
        }
        <Footer />
        </>
        )
        }

export default APIIntegrationCommentURL;
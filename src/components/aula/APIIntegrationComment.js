import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import CommentArea from "../Commentarea";
import './APIIntegrationComment.css';


    const APIIntegrationComment = () => {
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
            {comment &&
              comment.map((comment) => {
                return (
                  <div className="comment">
                  <div key={comment.id}>
                    <div className="eme">
                    <h1>{comment.email}</h1>
                    </div>
                    <p>{comment.comentario}</p>
                </div>
                </div>
                )
              })
            }
            </>
          )
        }

export default APIIntegrationComment;
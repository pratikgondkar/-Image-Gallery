import React from "react";
import { useNavigate } from "react-router-dom"

const ImageCard = ({imageUrl, id}) => {
    const navigate = useNavigate()

    const redirectTopage = () => {
        navigate(`/${id}`)
    }

    return (
        <div>
             <img src={imageUrl} onClick={redirectTopage}  />
        </div>
    )
}

export default ImageCard;
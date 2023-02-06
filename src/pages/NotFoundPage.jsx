import React from 'react'
import PageNotFoundImage from '../images/monkey_not_found.png';

const NotFoundPage = () => {
  return (
    <div>

    <h2 style={{marginBottom: "50px"}}>Данная страница не найдена... 😴</h2>
    <div style={{display: "flex", justifyContent: "center", marginRight: "100px"}}><img src={PageNotFoundImage} alt={'monkey'}></img></div>


    </div>
  )
}
export default NotFoundPage;

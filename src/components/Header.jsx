import React from 'react'
import Nav from './Nav'

import piscine from '../images/transacPro.gif'

const Header = () => {

    const imageStyle = {
        display :'block',
        height : '350px',
        width : '100%',
        marginRight : '10px' ,
        margin : 'auto'  ,
        objectFit : 'cover'
         }

    return (


        <header> 
            <div className="banner-container">
                <Nav />
                <h1 className="text-header">SEJOURS DE LUXE</h1>
                <img  style = { imageStyle }  src={ piscine } alt="piscine" />
                
            </div>
        </header>    
           
    )
}

export default Header

import React from 'react'
import '../header/header.css'
import {Input} from '@material-ui/core'

const Header = () => {
  return (
    <div className='header'>
        <div className="header-content">
            <div className="left-header">
                <i class="fa-sharp fa-solid fa-bars" ></i>
                <img src='https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg' alt = " " />
                <span>TV</span>
                <span>Movies</span>
                <span>Sports</span>
                <span>Disney+</span>
                <p className='kids'>KiDS</p>
            </div>
            <div className="right-header">
                <Input className='search' placeholder='Search'/>
                <i class="fa-solid fa-magnifying-glass"></i>
                <button>SUBSCRIBE</button>
                <span>LOGIN</span>
            </div>
        </div> 
    </div>
  )
}

export default Header;
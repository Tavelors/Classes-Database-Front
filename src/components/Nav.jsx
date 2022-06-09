import React from 'react'
import {NavLink, useNavigate} from 'react-router-dom'
import styled from 'styled-components'
import {MdMenu, MdClose} from 'react-icons/md'
import {useState} from 'react'
import Logout from './Logout'
const NavStyles = styled.nav/*css*/`

//   position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 0;
//   background: #c2d3f2;
  ul {
    
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
    text-align: center;
    li {
      display: inline-block;
      border-radius: 8px;
      transition: 0.3s ease background-color;
      // &:hover {
      //   background-color: #90b4e8;
      
      // }
    }
    a {
      // display: inline-block;
      // font-family: 'RobotoMono Regular';
      // padding: 1rem 2rem;
      // font-size: 1.3rem;
      // color: #90b4e8;
      // outline: none;
      // &:hover {
      //   color: #398CDA ;
      }
    }
    .active {
      color: #398CDA;
    }
    .navItems {
      padding-left: 0px;
    }
  }
  .mobile-menu-icon {
    position: absolute;
    right: 1rem;
    top: 1rem;
    width: 4rem;
    cursor: pointer;
    display: none;
    outline: none;
    color: #398CDA;
    * {
      pointer-events: none;
    }
  }
  .navItems .closeNavIcon {
    display: none;
    color: #398CDA;
  }
  button {
    // display: inline-block;
    // font-family: 'RobotoMono Regular';
    // padding: 1rem 2rem;
    // font-size: 1.3rem;
    // color: #90b4e8;
    // outline: none;
    color: black;
  font-weight: bold;
  margin: 5px;
  margin-bottom:20px;
  width: 120px;
  height: 50px;
  font-size: 15px;
  background-color: #72b3d0;
  transition:0.2s 0.2s;
  &:hover {
    transform: scale(1.1);
    transition:0.2s 0s;
    
}
:active {
  background-color: #72b340;
  // box-shadow: 5px 5px #666;
  // transform: translateY(4px);
  transform: scale(1);
  transition:0s 0s;
  
}

  }
  // @media only screen and (max-width: 600px) {
  //   padding: 0;
  //   .hide-item {
  //     transform: translateY(calc(-100% - var(--top)));
  //   }
  //   .mobile-menu-icon {
  //     display: block;
  //   }
  //   .navItems {
  //     --top: 1rem;
  //     transition: 0.3s ease transform;
  //     background-color: #c2d3f2 ;
  //     padding: 2rem;
  //     width: 90%;
  //     max-width: 300px;
  //     border-radius: 12px;
  //     position: absolute;
  //     right: 1rem;
  //     top: var(--top);
  //     .closeNavIcon {
  //       display: block;
  //       width: 3rem;
  //       margin: 0 0 0 auto;
  //       cursor: pointer;
  //       * {
  //         pointer-events: none;
  //       }
  //     }
  //     li {
  //       display: block;
  //       margin-bottom: 1rem;
  //     }
  //   }
  // }
`;

const Nav = () => {
  const navigate = useNavigate()
    const [showNav, setShowNav] = useState(false)
    const currentURL = window.location.pathname
   
    const token = localStorage.getItem("alphstains-secret-user-token");
    if(!token) {
        return ''
    }
    if (currentURL.includes('/students') || currentURL.includes('/logs') || currentURL.includes('/today') || currentURL.includes('/notes') || currentURL.includes('/payments')) {
  
      return (
        <NavStyles>
        <div className="mobile-menu-icon" 
        
        onClick={() => setShowNav(!showNav)}
        role='button'
        onKeyDown={() => setShowNav(!showNav)}
        tabIndex={0}
        >
    <MdMenu />
        </div>
        <ul className={!showNav ? 'navItems hide-item' : 'navItems'}>
            <div 
            className="closeNavIcon"
            onClick={() => setShowNav(!showNav)}
            role='button'
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
            >
                <MdClose />
            </div>
            <li>
                
                 <Logout />
            </li>
            <li>
                <NavLink 
                to='/today'
               
                onClick={() => setShowNav(!showNav)}
                role='button'
                onKeyDown={() => setShowNav(!showNav)}
                tabIndex={0}
                ><button>Today</button></NavLink>
            </li>
            <li>
                <NavLink 
                to='/students'
                
                onClick={() => setShowNav(!showNav)}
                role='button'
                onKeyDown={() => setShowNav(!showNav)}
                tabIndex={0}
                ><button>Students</button></NavLink>
            </li>
            <li>
                <NavLink 
            to='/logs' 
            exact='true' 
            
            onClick={() => setShowNav(!showNav)}
            role='button'
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0} >
                <button>Logs</button>
                </NavLink>
            </li>
            {/* <li>
                <NavLink 
                to='/home/tickets'
               
                onClick={() => setShowNav(!showNav)}
                role='button'
                onKeyDown={() => setShowNav(!showNav)}
                tabIndex={0}
                 >Tickets</NavLink>
            </li> */}
            
        </ul>
    </NavStyles>
  )
            } else {
              return ''
            }
}

export default Nav
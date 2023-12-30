import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";

import "./style.scss";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import logo from "../../assets/Flixiy3.png";


const Header = () => {
    const [show, setShow] = useState("top");
    const [lastScrollY, setLastScrollY] = useState(0);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [query, setQuery] = useState("");
    const [showSearch, setShowSearch] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() =>{
      window.scrollTo(0,0)  //when we move from one page to another or loaction changes then scroll should be on top or in other word scrolling starts from top
    },[location])


    const openSearch=()=>{
      setMobileMenu(false);
      setShowSearch(true);
    }

    const openMobileMenu=()=>{
        setMobileMenu(true);
        setShowSearch(false);
    }

    function navigationHandler(type)
    {
        if(type=='movie')
        navigate('/explore/movie')
        else
        navigate('/explore/tv')
        setMobileMenu(false)
    }

    const searchQueryHandler=(event)=>{
        if(event.key=="Enter" && query.length>0)
        {
          navigate(`/search/${query}`);
        
        setTimeout(()=>{
          setShowSearch(false)
        },(1000))
      }
      }

    function controlNav()
    {
        if(window.scrollY > 199)      //window.scrollY give value of scroll in y direction check using console.log
        {
          if(window.scrollY > lastScrollY && !mobileMenu)
          {
            setShow('hide')
          }
          else{
            setShow('show')
          }
        }
        else
        {
            setShow('top');
        }
        setLastScrollY(window.scrollY);
    }
    
      useEffect(()=>{
           
        window.addEventListener("scroll",controlNav)  //scroll is event name here 
        return ()=>{
             window.removeEventListener("scroll",controlNav)
        }
      },[lastScrollY]);

    return (
        <div>
            <header className={`header ${mobileMenu ? "mobileView " : ""} ${show}` }>  
               <ContentWrapper>
                    <div className="logo" onClick={() => {
                      navigate('/');
                    }}>
                        <img src={logo} alt='Logo'></img>
                       
                    </div>

    
                        <ul className="menuItems">
                            <li className="menuItem" onClick={()=>navigationHandler('movie')}>Movies</li>
                            <li className="menuItem" onClick={()=>navigationHandler('tv')}>TV Shows</li>
                            <li className="menuItem">
                                <HiOutlineSearch onClick={openSearch}/>
                            </li>
                        </ul>

                        <div className="mobileMenuItems">
                            <HiOutlineSearch onClick={openSearch}/>
                            {mobileMenu ? (<VscChromeClose onClick={()=>
                                setMobileMenu(false)
                            }/>):(<SlMenu onClick={openMobileMenu}/>)}

                        </div>
                </ContentWrapper>
              
                 {showSearch && (<div className="searchBar">
                    <ContentWrapper>
                    <div className='searchInput'>
                    <input type='text' placeholder='Search for movie or T.V..' 
                     onKeyUp={searchQueryHandler}
                     onChange={(event)=>setQuery(event.target.value)}>

                     </input>

                    <VscChromeClose onClick={()=>
                        setShowSearch(false)
                    }/>
                   </div>
                    </ContentWrapper>

                </div>
                )}    
            </header>
        </div>
    );
};

export default Header;
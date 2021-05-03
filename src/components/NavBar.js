import { useState } from "react"
import "../App.css"
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { SideBarData } from "./SidebarData"
import { IconContext } from "react-icons"


function NavBar() {

    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)



    return (
        <>


            <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                <ul className="nav-menu-items" onClick={showSidebar}>
                    {SideBarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName} id="iconHover">
                                <Link to={item.path}>
                                    {item.icon}
                                </Link>
                            </li>
                        )

                    })}

                </ul>

            </nav>
            <div className="navbar">

                <div className="burger menu-bars"><i className="fas fa-bars  " id={sidebar ? "rotate" : "rotateBack"} onClick={showSidebar}></i></div>


                <div className="logo" style={{ color: "white" }}><h1 >Ayman Fakri</h1></div>
            </div>

        </>
    )
}

export default NavBar

import React from 'react'

function NavBar() {
  return (
    <section className="menu menu--circle">
    <input type="checkbox" id="menu__active"/>
    <label htmlFor="menu__active" className="menu__active">
      <div className="menu__toggle">
        <div className="icon">
          <div className="hamburger"></div>
        </div>
      </div>
      <input type="radio" name="arrow--up" id="degree--up-0"/>
      <input type="radio" name="arrow--up" id="degree--up-1" />
     
      <div className="menu__listings">
        <ul className="circle">
          <li>
            <div className="placeholder">
              <div className="upside">
                <a href="#myprojects" className="button"><i className="fas fa-project-diagram"></i></a>
              </div>
            </div>
          </li>
          <li>
            <div className="placeholder">
              <div className="upside">
                <a href="#myid" className="button"><i className="fas fa-info"></i></a>
              </div>
            </div>
          </li>
          <li>
            <div className="placeholder">
              <div className="upside">
                <a href="#">&nbsp</a>
              </div>
            </div>
          </li>
          <li>
            <div className="placeholder">
              <div className="upside">
                <a href="#" className="button"><i className="fa fa-commenting"></i></a>
              </div>
            </div>
          </li>
          <li>
            <div className="placeholder">
              <div className="upside">
                <a href="#" className="button"><i className="fa fa-trash"></i></a>
              </div>
            </div>
          </li>
          <li>
            <div className="placeholder">
              <div className="upside">
                <a href="#" className="button"><i className="fa fa-battery-4"></i></a>
              </div>
            </div>
          </li>
          <li>
            <div className="placeholder">
              <div className="upside">
                <a href="https://www.linkedin.com/in/ayman-fakri-bb80371a1/" target="blank" rel="noopener noreferrer" className="button"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </li>
          <li>
            <div className="placeholder">
              <div className="upside">
                <a href="mailto:theonlyayman@outlook.fr" className="button"><i className="far fa-envelope"></i></a>
              </div>
            </div>
          </li>
          <li>
            <div className="placeholder">
              <div className="upside">
                <a href="https://github.com/afakri" target="blank" rel="noopener noreferrer" className="button"><i className="fab fa-github"></i></a>
              </div>
            </div>
          </li>
          <li>
            <div className="placeholder">
              <div className="upside">
                <a href="#mycode" className="button"><i className="far fa-file-code"></i></a>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="menu__arrow menu__arrow--top">
        <ul>
          <li>
            <label htmlFor="degree--up-0"><div className="arrow"></div></label>
            <label htmlFor="degree--up-1"><div className="arrow"></div></label>
          
          </li>
        </ul>
      </div>
    </label>
  </section>
  
  )
}

export default NavBar

import React from 'react';
import "./sideBar.css"

export const SideBar = () => {
  return (
    <div className='sideBar'>
      <div className="sideBarItem">
        <span className="sideBarTitle">ABOUT ME</span>
        <img className="sideBarImg" src="https://images.pexels.com/photos/10255629/pexels-photo-10255629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="img not available" />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Ex officiis laudantium illum accusantium vel commodi,
          doloribus praesentium molestiae, iusto repellat ducimus,
          voluptatum id corporis eveniet perferendis?
          Assumenda sit nisi eaque.</p>
      </div>
      <div className="sideBarItem">
        <span className="sideBarTitle">CATEGORIES</span>
        <ul className="sideBarList">
          <li className="sideBarListItem">LIFE</li>
          <li className="sideBarListItem">MUSIC</li>
          <li className="sideBarListItem">STYLE</li>
          <li className="sideBarListItem">SPORTS</li>
          <li className="sideBarListItem">TECH</li>
          <li className="sideBarListItem">CINEMA</li>
        </ul>
      </div>
      <div className="sideBarItem">
        <span className="sideBarTitle">FOLLOW US</span>
        <div className="sideBarSocial">
          <i className="sideBarIcon fa-brands fa-facebook"></i>
          <i className="sideBarIcon fa-brands fa-twitter"></i>
          <i className="sideBarIcon fa-brands fa-instagram"></i>
          <i className="sideBarIcon fa-brands fa-linkedin"></i>
        </div>
      </div>
    </div>
  )
}

import React, { useState ,useEffect} from 'react';
import "./sideBar.css";
import axios from "axios";
import { Link } from 'react-router-dom';

export const SideBar = () => {
  const [cat, setCat] = useState([]);
  useEffect(() => {
    const getCat = async () => {
      const res = await axios.get(`/categories`);
      setCat(res.data);
    }
    getCat();
  }, []);
  return (
    <div className='sideBar'>
      <div className="sideBarItem">
        <span className="sideBarTitle">ABOUT ME</span>
        <img className="sideBarImg" src="https://images.pexels.com/photos/10255629/pexels-photo-10255629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="img not available" />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Ex officiis laudantium illum accusantium vel commodi.</p>
      </div>
      <div className="sideBarItem" style={{ width: "100%",border:"1px solid" }}>
        <span className="sideBarTitle">CATEGORIES</span>
        <ul className="sideBarList" >{cat.map((c,i) => (
          <Link to={`/?cat=${c.name}`} key={i} className="link">
          <li className="sideBarListItem" >{c.name}</li>
          </Link>
        ))}
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

import React from 'react';

import { BackTop } from 'antd';
import image1 from '../../assets/images/logo_size.jpg';

function AppFooter() {
  return (
    <div className="container-fluid">
      <div className="footer">
        <div className="logo">
        <img alt="ITCATER" class="logoimg" src={image1} />
          <a href="http://google.com">ITCATER</a>
        </div>
        <div className="titleHolder">
          <p id="dec" style={{color: "black"}}>ITCATER is a fast-growing, end-to-end consulting,digital transformation and technology workshop.Our new vision “Reimagining a better-shared world” and mission “Bringing human expertise to tech for delivering purposeful solutions that amplify value” is at the heart of our transformation approach, powered by cloud, platform mindset, and engagement. Our motto “Let’s make digital change happen” is our commitment to empower our clients to succeed in this digital world. While our values – integrity, teamwork, the pursuit of excellence, committed, customer-centric, and thought-leadership, defines our character and behavior.</p>
        </div>
        <div className="sub">
          <i style={{color: "black" ,fontSize:"18px"}} className="fas fa-map-marker-alt"></i>
          <a style={{color: "black"}}  href="https://goo.gl/maps/dhQctrww5SKkeKH68" target="_blank">8144 Pitkin Road, Frisco, Texas 75036, USA </a><a style={{color: "#1890ff"}}> | </a><a style={{color: "black"}}  href="https://goo.gl/maps/8YjWapJ9nhKxB4K8A" target="_blank"> 210 15th Avenue SE, Calgary AB T2G 0B5, Canada</a>
        </div>
        <div className="sub">
          <i style={{color: "black", fontSize:"18px" }} className="fas fa-phone-alt"></i>
          <a style={{color: "black"}}  href="#">+1 248 247 8457</a><a style={{color: "#1890ff"}}> | </a><a style={{color: "black"}}  href="#" target="_blank">+1 214 469 9589</a>
        </div>
        <div className="sub">
          <i style={{color: "black", fontSize:"18px" }} className="fas fa-envelope"></i>
          <a style={{color: "black"}}  href="#">hr@itcater.com</a>
        </div>
        <ul className="socials">
          <li><a href="https://www.facebook.com/ItCater-Inc-101920675725794" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
          <li><a href="https://www.linkedin.com/company/itcater" target="_blank"><i className="fab fa-linkedin-in"></i></a></li>
        </ul>
        <div style={{color: "black"}} className="copyright">Copyright &copy; 2022 ITCATER</div>
        <BackTop>
          <div className="goTop"><i className="fas fa-arrow-circle-up"></i></div>
        </BackTop>
      </div>
    </div>

  );
}

export default AppFooter;
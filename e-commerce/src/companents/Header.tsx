
import './pageCss/MainCss.css';
import vectorImage from '../img/Vector.png'; 
import Group1 from '../img/Group (1).png';
import Group2 from '../img/Group 40.png';
import Group3 from '../img/Group.png'

function Header() {
  return (
    <>
     
      <div className="headBar">
      <p className="head">Az Mebel Studio</p>
        <img src={vectorImage} alt="" /> 
        <img src={Group1} alt="" />
        <img src={Group2} alt="" />
        <img src={Group3} alt="" />
      </div>
    </>
  );
}

export default Header;


import './pageCss/Header.css';
import vectorImage from '../img/Vector.png'; 
import Group1 from '../img/Group (1).png';
import Group2 from '../img/Group 40.png';
import Group3 from '../img/Group.png'

function Header() {
  return (
    <>
     <div className='Imp'>
   
     <div className="headBar">
     <p className="head">Az Mebel Studio</p>
<ul className='list'>
    <li><img src={vectorImage} alt="" /></li>
    <li><img src={Group1} alt="" /></li>
    <li><img src={Group2} alt="" /></li>
    <li><img src={Group3} alt="" /></li>
</ul>
      </div>
      

     </div>

    </>
  );
}

export default Header;

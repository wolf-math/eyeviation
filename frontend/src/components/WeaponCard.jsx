/* eslint-disable react/prop-types */

import m4Image from '../assets/m4.jpg';
import glockImage from '../assets/glock17.jpg';
import fnminiImage from '../assets/FN Mini.jpg'
import {  useNavigate } from 'react-router-dom';

export default function WeaponCard ({weapon}) {
  let image
  switch (weapon.base) {
    case 'm4':
      image = m4Image
      break
    case 'glock17':
      image = glockImage
      break
    case 'FN Mini':
      image = fnminiImage
      break
  }

  const navigate = useNavigate();

  const handleClick = () => {
    // not great, doing prop drilling
    navigate('/customize', { state: { weapon } });
  }

  return (
    <div 
      className="card" 
      style={{width: 18 + 'em', 
      padding: 5 + 'px', 
      margin: 5 +'px'}}
    >
      <div onClick={handleClick}>
        <img src={image} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{weapon.name || weapon.base}</h5>
          <p>{weapon.sight}</p>
          <p>{weapon.laser}</p>
          <p>{weapon.grip}</p>
          <p>{weapon.barrel}</p>
          {weapon.status ? <p><em>Status Pending</em></p> : <></>}
        </div>
      </div>
    </div>
  )
}
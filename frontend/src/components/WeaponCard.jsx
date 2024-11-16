/* eslint-disable react/prop-types */

import m4Image from '../assets/m4.jpg';
import glockImage from '../assets/glock17.jpg';
import fnminiImage from '../assets/FN Mini.jpg'


export default function WeaponCard ({weapon, onDelete}) {
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

  return (
    <>
    <div className="card" style={{width: 18 + 'em', padding: 5 + 'px', margin: 5 +'px'}}>
      <img src={image} className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title">{weapon.base}</h5>
        <p>{weapon.sight}</p>
        <p>{weapon.laser}</p>
        <p>{weapon.grip}</p>
        <p>{weapon.barrel}</p>
        <a onClick={()=>onDelete(weapon.id)} className="btn btn-primary">Delete</a>
      </div>
    </div>
    </>
  )
}
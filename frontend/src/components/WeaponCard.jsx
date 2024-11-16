/* eslint-disable react/prop-types */
export default function WeaponCard ({weapon, onDelete}) {
  return (
    <div className="weaponCard">
      <h3>{weapon.base}</h3>
      <p>{weapon.sight}</p>
      <p>{weapon.laser}</p>
      <p>{weapon.grip}</p>
      <p>{weapon.barrel}</p>
      <button className="delete" onClick={()=>onDelete(weapon.id)}>Delete</button>
    </div>
  )
}
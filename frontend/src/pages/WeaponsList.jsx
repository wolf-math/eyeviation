import { useState } from 'react';

export default function WeaponsList() {
  const [weapon, setWeapon] = useState({
    base: "",
    sight: "",
    laser: "",
    grip: "",
    barrel: ""
  })

  // It would probably be best to have an admin panel where the available parts were managed and served from the DB.
  const baseOptions = ["glock17", "m4", "FN Mini"]
  const sightOptions = ["Mepro - MPO PRO-F (Glock)", "Mepro - Hunter 4x (M4)", "Mepro - MMX 3 (M4, Minimi)"]
  const laserOptions =  ["Nightstick - TSM11G (Glock)", "Wilcox - RAAM GSS (M4)", "Wilcox - Raid Xe (Minimi)"]
  const gripOptions = ["MCK - Micro Conversion Kit Gen 2 (Glock)", "Law - Grip-Pod Forgerip (M4)", "BravoCo - Vertical Grip Mod 3 (Minimi)"]
  const barrelOptions = ["Banish - Banish 45 (Glock)", "Midwest - Muzzle Break (M4)", "Midwest - Blast Diverter (Minimi)"]

  const changeWeapon = key => (e) => {
    setWeapon(prevState => ({
      ...prevState,
      [key]: e.target.value
    }))
    console.log(weapon)
  };

  return (
    <div className="customize">
      <h1>Customize Your Weapon</h1>

      <h2>Current Configuration</h2>
      <h4>Base: {weapon.base} </h4>
      <h4>sight: {weapon.sight}</h4>
      <h4>laser: {weapon.laser}</h4>
      <h4>grip: {weapon.grip}</h4>
      <h4>barrel: {weapon.barrel}</h4>

      <div className="selector">
        <div className="base">
          {baseOptions.map((baseItem) => (
            <label key={baseItem}>
              <input
                type="radio"
                value={baseItem}
                name="base"
                checked={weapon.base === baseItem}
                onChange={changeWeapon("base")}
              />
              {baseItem}
            </label>
          ))}
        </div>
        <div className="sight">
          {sightOptions.map((sightItem) => (
            <label key={sightItem}>
              <input
                type="radio"
                value={sightItem}
                name="sight"
                checked={weapon.sight === sightItem}
                onChange={changeWeapon("sight")}
              />
              {sightItem} 
            </label>
          ))}
        </div>
        <div className="laser">
          {laserOptions.map((laserItem) => (
            <label key={laserItem}>
              <input
                type="radio"
                value={laserItem}
                name="laser"
                checked={weapon.laser === laserItem}
                onChange={changeWeapon("laser")}
              />
              {laserItem} 
            </label>
          ))}
        </div>
        <div className="grip">
          {gripOptions.map((gripItem) => (
            <label key={gripItem}>
              <input
                type="radio"
                value={gripItem}
                name="grip"
                checked={weapon.grip === gripItem}
                onChange={changeWeapon("grip")}
              />
              {gripItem} 
            </label>
          ))}
        </div>
        <div className="barrel">
          {barrelOptions.map((barrelItem) => (
            <label key={barrelItem}>
              <input
                type="radio"
                value={barrelItem}
                name="barrel"
                checked={weapon.barrel === barrelItem}
                onChange={changeWeapon("barrel")}
              />
              {barrelItem} 
            </label>
          ))}
        </div>

      </div>
    </div>
  );
}

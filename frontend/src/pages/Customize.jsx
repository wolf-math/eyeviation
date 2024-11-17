import { useState } from 'react';
import api from '../api';
import { useNavigate, useLocation } from 'react-router-dom';

export default function CustomizeWeapon() {
  const location = useLocation()
  const navigate = useNavigate();

  const [weapon, setWeapon] = useState((location.state && location.state.weapon) || {
    name: "",
    base: "",
    sight: "",
    laser: "",
    grip: "",
    barrel: "",
  })

  // It would probably be best to have an admin panel where the available parts were managed and served from the DB.
  const baseOptions = ["glock17", "m4", "FN Mini", "none"]
  const sightOptions = ["Mepro - MPO PRO-F (Glock)", "Mepro - Hunter 4x (M4)", "Mepro - MMX 3 (M4, Minimi)", "none"]
  const laserOptions =  ["Nightstick - TSM11G (Glock)", "Wilcox - RAAM GSS (M4)", "Wilcox - Raid Xe (Minimi)", "none"]
  const gripOptions = ["MCK - Micro Conversion Kit Gen 2 (Glock)", "Law - Grip-Pod Forgerip (M4)", "BravoCo - Vertical Grip Mod 3 (Minimi)", "none"]
  const barrelOptions = ["Banish - Banish 45 (Glock)", "Midwest - Muzzle Break (M4)", "Midwest - Blast Diverter (Minimi)", "none"]

  const changeWeapon = key => (e) => {
    setWeapon(prevState => ({
      ...prevState,
      [key]: e.target.value
    }))
  };

  const fromState = location.state

  const cancel = () => {
    navigate('/');
  }

  // I should combine saveWeapon, deleteWeapn, and printWeapon.
  const saveWeapon = async (e) => {
    e.preventDefault()
    for (const key of Object.keys(weapon)) {
      if (weapon[key] === ""){
        alert("please select an option for each part")
        return
      } 
    }
    try {
      const res = fromState 
        ? await api.put(`/api/customize/${weapon.id}/`, weapon) 
        : await api.post("/api/customize/", weapon)


      if (200 < res.status <299){
        alert("Weapon Saved")
        navigate('/');
      } else {
        alert("That didn't work")
      }
    } catch (err) {
      alert(`Error: ${err}`);
    }
  }

  const deleteWeapon = async () => {
    try {
      const res = await api.delete(`/api/customize/${weapon.id}/`);
      if (res.status === 204) {
        alert("Weapon deleted successfully");
        navigate('/');
      } else {
        alert("Failed to delete weapon");
      }
    } catch (err) {
      alert(`Error: ${err}`);
    }
  };

  const printWeapon = async (e) => {
    e.preventDefault()
    const updatedWeapon = {
      ...weapon,
      status: "pending",
    };
    setWeapon(updatedWeapon);
    try {
      const res = fromState 
        ? await api.put(`/api/customize/${updatedWeapon.id}/`, updatedWeapon) 
        : await api.post("/api/customize/", updatedWeapon)

      if (200 < res.status <299){
        alert("Weapon Sent to Printer")
        navigate('/');
      } else {
        alert("That didn't work")
      }
    } catch (err) {
      alert(`Error: ${err}`);
    }
  }


  return (
    <div className="customize">
        <div className="container">
        <h1>Customize Your Weapon</h1>

        <h2>Current Configuration for {weapon.name}</h2>
        <h4>Base: {weapon.base} </h4>
        <h4>sight: {weapon.sight}</h4>
        <h4>laser: {weapon.laser}</h4>
        <h4>grip: {weapon.grip}</h4>
        <h4>barrel: {weapon.barrel}</h4>
        <br/>
        <br/>
        <br/>
      </div>

      <div className="selector container">
        <h4>Name:</h4>
        <div className="name">
          <input
          className="form-control"
          type="text"
          onChange={changeWeapon("name")}
          placeholder="weapon name"
          value={weapon.name}
        />
        </div>
        <br/>
        <br/>
        <div className="base">
          <h4>Choose Base:</h4>
          {baseOptions.map((baseItem) => (
            <label key={baseItem}>
              <input
                style={{margin: 10 + "px"}}
                type="radio"
                className="form-check-input" 
                value={baseItem}
                name="base"
                checked={weapon.base === baseItem}
                onChange={changeWeapon("base")}
              />
              {baseItem}
            </label>
          ))}
          <br/>
          <br/>
        </div>
        <div className="sight">
          <h4>Choose Sight:</h4>
          {sightOptions.map((sightItem) => (
            <label key={sightItem}>
              <input
                style={{margin: 10 + "px"}}
                type="radio"
                className="form-check-input" 
                value={sightItem}
                name="sight"
                checked={weapon.sight === sightItem}
                onChange={changeWeapon("sight")}
              />
              {sightItem} 
            </label>
          ))}
          <br/>
          <br/>
        </div>
        <div className="laser">
          <h4>Choose Laser:</h4>
          {laserOptions.map((laserItem) => (
            <label key={laserItem}>
              <input
                type="radio"
                style={{margin: 10 + "px"}}
                className="form-check-input" 
                value={laserItem}
                name="laser"
                checked={weapon.laser === laserItem}
                onChange={changeWeapon("laser")}
              />
              {laserItem} 
            </label>
          ))}
          <br/>
          <br/>
        </div>
        <div className="grip">
          <h4>Choose Grip:</h4>
          {gripOptions.map((gripItem) => (
            <label key={gripItem}>
              <input
                type="radio"
                style={{margin: 10 + "px"}}
                className="form-check-input" 
                value={gripItem}
                name="grip"
                checked={weapon.grip === gripItem}
                onChange={changeWeapon("grip")}
              />
              {gripItem} 
            </label>
          ))}
          <br/>
          <br/>
        </div>
        <div className="barrel">
          <h4>Choose Barrel:</h4>
          {barrelOptions.map((barrelItem) => (
            <label key={barrelItem}>
              <input
                type="radio"
                style={{margin: 10 + "px"}}
                className="form-check-input" 
                value={barrelItem}
                name="barrel"
                checked={weapon.barrel === barrelItem}
                onChange={changeWeapon("barrel")}
              />
              {barrelItem} 
            </label>
          ))}
          <br/>
          <br/>
        </div>
      </div>
      
      <button className='btn btn-secondary' onClick={saveWeapon}>Save</button>
      <button className='btn btn-secondary' onClick={cancel}>Cancel</button>
      <button className='btn btn-warning' onClick={printWeapon}>Print</button>
      {fromState ? 
        <>
          <button className='btn btn-warning' onClick={deleteWeapon}>Delete</button>
        </>
      : <></>
    }
    </div>
  );
}

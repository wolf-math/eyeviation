import { useState, useEffect, useCallback } from 'react';
import api from '../api';
import WeaponCard from '../components/WeaponCard';
import addImage from '../assets/add.png'
import { Link } from 'react-router-dom';


export default function WeaponsList() {
  const [weapons, setWeapons] = useState([]);

  const fetchWeapons = useCallback(async () => {
    try {
      const { data } = await api.get("/api/customize/");
      setWeapons(data);
    } catch (err) {
      alert(`Error: Couldn't retrieve data. ${err}`);
    }
  }, []);

  useEffect(() => {
    fetchWeapons();
  }, [fetchWeapons]);

  return (
    <div className="customize">
      <h1>Your Custom Weapons</h1>
      <div className="weapons-container" style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
        {weapons.length > 0 ? (
          weapons.map((weapon) => (
            <WeaponCard key={weapon.id} weapon={weapon} />
          ))
        ) : (
          <h2>No weapons found</h2>
        )}
        <Link to="/customize">
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: 5 + 'px' }}>
          <img src={addImage} className="card-img-top" alt="" style={{width: 150 + 'px', height: 150 + 'px'}} />
          <h5 style={{margin: 0 + " auto"}}>add</h5>
        </div>
        </Link>
      </div>
      <Link to="/logout" ><button className="btn btn-primary" style={{position: "fixed", bottom: 20}}>Logout</button></Link>
    </div>
  );
}
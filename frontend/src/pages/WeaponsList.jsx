import { useState, useEffect, useCallback } from 'react';
import api from '../api';
import WeaponCard from '../components/WeaponCard';

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

  const deleteWeapon = async (id) => {
    try {
      const res = await api.delete(`/api/customize/delete/${id}`);
      if (res.status === 204) {
        alert("Weapon deleted successfully");
        fetchWeapons();
      } else {
        alert("Failed to delete weapon");
      }
    } catch (err) {
      alert(`Error: ${err}`);
    }
  };

  useEffect(() => {
    fetchWeapons();
  }, [fetchWeapons]);

  return (
    <div className="customize">
      <h1>Your Custom Weapons</h1>
      {weapons.length > 0 ? (
        weapons.map((weapon) => (
          <WeaponCard key={weapon.id} weapon={weapon} onDelete={deleteWeapon} />
        ))
      ) : (
        <p>No weapons found</p>
      )}
    </div>
  );
}
import { useEffect, useState } from 'react'
import './App.css'
import PropertyCard from './components/property-card';
import Header from './components/header';

function App() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/property-listing-data.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setProperties(data);
      })
      .catch((error) => {
        alert("Error fetching data");
      });
  },[])

  return (
    <>
      <Header />
      <div className='properties'>
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </>
  )
}

export default App

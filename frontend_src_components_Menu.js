import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Menu() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('/api/menu')
      .then(res => setItems(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>FoodEase Menu</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {items.map(item => (
          <div key={item._id} style={{ border: '1px solid #eee', margin: 10, padding: 10 }}>
            <img src={item.image} alt={item.name} width={120} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <b>₹{item.price}</b>
            {/* Add button to add to cart */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
import React, { useEffect, useState } from 'react';
import { getJewelery } from '../../service/store';

function Jewelery() {

  const [jewelery, setJewelery] = useState([]);

  useEffect(() => {
    getJewelery().then(data => setJewelery(data));
  }, [])

  return (
    <div className='prodContainer'>
      {jewelery.map((product, index) =>
        <div key={index} className='prod'>
          <h3>{product.title}</h3>
          <p>Price: ${product.price}</p>
          <img src={product.image} alt={product.title} />
        </div>
      )
      }
    </div>
  )

}

export default Jewelery;
import React, { useEffect, useState } from 'react';
import { getElectronics } from '../../service/store';

function Electronics() {

    const [electronics, setElectronics] = useState([]);

    useEffect(() => {
        getElectronics().then(data => setElectronics(data));
    }, [])


    return (
        <div className='prodContainer'>
            {electronics.map((product, index) =>
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

export default Electronics
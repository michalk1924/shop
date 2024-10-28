import React, { useEffect, useState } from 'react';
import { getItems } from '../../service/store';
import styles from './styles.module.css'

function Items({catgory}) {

    const [itemsArray, setItemsArray] = useState([]);

    useEffect(() => {
        debugger
        getItems(catgory).then(data => setItemsArray(data));
    }, [catgory])


    return (
        <div className={styles.prodContainer}>
            {itemsArray.map((product, index) =>
                <div key={index} className={styles.prod}>
                    <h4>{product.title}</h4>
                    <p>Price: ${product.price}</p>
                    <img src={product.image} alt={product.title} />
                </div>
            )
            }
        </div>
    )
}

export default Items
import React, { useEffect, useState } from 'react';
import { getItems } from '../../service/store';
import styles from './styles.module.css'
import { getFromStorage, saveToStorage } from '../../service/lib/storage';

const oneMinute = 60 * 1000;

function Page({ catgory }) {

    const [itemsArray, setItemsArray] = useState([]);

    useEffect(() => {
        const savedTimefromStorage = getFromStorage(`savedTime${catgory}`)
        if (savedTimefromStorage) {
            const storedTime = parseInt(savedTimefromStorage, 10);
            const currentTime = Date.now();
            if (currentTime - storedTime > oneMinute) {
               getItemSWithFetch();
            } else {
                console.log('storage');
                setItemsArray(getFromStorage(catgory));
            }
        }
        else {
            getItemSWithFetch();
        }

        function getItemSWithFetch() {
            console.log('fetch');
            getItems(catgory).then(data => {
                setItemsArray(data);
                saveToStorage(catgory, data);
            }
            );
            const savedTime = Date.now();
            saveToStorage(`savedTime${catgory}`, savedTime);
        }

    }, [catgory])

    return (
        <div>
            <h2>{catgory.toUpperCase()}</h2>
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
        </div>
    )
}

export default Page
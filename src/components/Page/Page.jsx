import React, { useEffect, useState } from 'react';
import { getItems } from '../../service/store';
import styles from './styles.module.css'
import { getFromStorage, saveToStorage } from '../../service/lib/storage';
import { ClipLoader } from 'react-spinners';

const oneMinute = 60 * 1000;

function Page({ catgory }) {

    const [itemsArray, setItemsArray] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function fetchData() {
            setLoading(true);
            const savedTimefromStorage = getFromStorage(`savedTime${catgory}`)
            if (savedTimefromStorage) {
                const storedTime = parseInt(savedTimefromStorage, 10);
                const currentTime = Date.now();
                if (currentTime - storedTime > oneMinute) {
                    await getItemsWithFetch();
                } else {
                    setItemsArray(getFromStorage(catgory));
                }
            }
            else {
                await getItemsWithFetch();
            }
            setLoading(false);
        }

        fetchData();

        async function getItemsWithFetch() {
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
            {!loading && <div>
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
            </div>}
            {loading &&
                <div>
                    <ClipLoader color="orange" loading={loading} size={50} />
                </div>}
        </div>
    )
}

export default Page
import React from 'react';

import styles from './Description.scss';

const Description = () => {
    return (
        <div className={styles.description}>
            <div className={styles.description__title}>
                Simple Omelette Recipe
            </div>

            <div className={styles.description__text}>
                An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.
            </div>
        </div>
    );
};

export default Description;
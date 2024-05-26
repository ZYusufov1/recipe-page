import React from 'react';

import styles from './PreparationTime.scss';

const PreparationTime = () => {
    return (
        <div className={styles.preparationTime}>
            <div className={styles.preparationTime__title}>
                Preparation time
            </div>

            <ul>
                <li><strong>Total</strong>: Approximately 10 minutes</li>
                <li><strong>Preparation</strong>: 5 minutes</li>
                <li><strong>Cooking</strong>: 5 minutes</li>
            </ul>
        </div>
    );
};

export default PreparationTime;
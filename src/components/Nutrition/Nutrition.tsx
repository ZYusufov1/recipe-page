import React from 'react';

import styles from './Nutrition.scss';
import Table from "components/Nutrition/components/Table";

const Nutrition = () => {
    return (
        <div className={styles.nutrition}>
            <div className={styles.nutrition__title}>
                Nutrition
            </div>

            <div className={styles.nutrition__description}>
                The table below shows nutritional values per serving without the additional fillings.
            </div>

            <Table />
        </div>
    );
};

export default Nutrition;
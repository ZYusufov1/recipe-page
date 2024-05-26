import React from 'react';

import styles from './Table.scss';

const Table = () => {
    return (
        <>
            <table className={styles.table}>
                <tr>
                    <th>Calories</th>
                    <th>277kcal</th>
                </tr>
                <tr>
                    <th>Carbs</th>
                    <th>0g</th>
                </tr>
                <tr>
                    <th>Protein</th>
                    <th>20g</th>
                </tr>
                <tr>
                    <th>Fat</th>
                    <th>22g</th>
                </tr>
            </table>
        </>
    );
};

export default Table;
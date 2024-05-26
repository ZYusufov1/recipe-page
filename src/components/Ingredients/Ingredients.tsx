import React from 'react';

import styles from './Ingredients.scss';

const Ingredients = () => {
    return (
        <div className={styles.ingredients}>
            <div className={styles.ingredients__title}>
                Ingredients
            </div>

            <ul>
                <li>2-3 large eggs</li>
                <li>Salt, to taste</li>
                <li>Pepper, to taste</li>
                <li>1 tablespoon of butter or oil</li>
                <li>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
            </ul>
        </div>
    );
};

export default Ingredients;
import React from 'react';

import omelette from 'images/image-omelette.jpeg';

import styles from './RecipePage.scss';
import Description from "components/Description";
import PreparationTime from "components/PreparationTime";
import Ingredients from "components/Ingredients";
import Instructions from "components/Instructions";
import Nutrition from "components/Nutrition";

const RecipePage: React.FC = () => {
  return (
    <div className={styles.recipePage}>
        <div className={styles.recipePage__whiteBoard}>
            <img
                src={omelette}
                alt="omlette"
                className={styles.recipePage__image}
            />

            <div className={styles.recipePage__block}>
                <Description/>
                <PreparationTime/>
                <Ingredients/>

                <div className={styles.recipePage__line}/>

                <Instructions/>

                <div className={styles.recipePage__line}/>

                <Nutrition />
            </div>
        </div>
    </div>
  );
}

export default RecipePage;

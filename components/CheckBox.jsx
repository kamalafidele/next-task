import React, {useState} from 'react';

import styles from '../app/page.module.css';

const CheckBox = ({checked}) => {
    const [isChecked, setIsChecked] = useState(checked);

    const handleClick = () => {
        console.log(isChecked);
        setIsChecked(!isChecked);
    };

    return (

        <div className={styles.right}>
            <span>100+</span>
            <div
                className={isChecked ? styles.checkedBox : styles.checkbox}
                onClick={handleClick}
            >
                <i className='bx bx-check' style={{
                    display: isChecked ? 'block' : 'none',
                }} />
            </div>
        </div>
    );
};

export default CheckBox;

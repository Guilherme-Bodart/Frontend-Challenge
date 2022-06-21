import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
    decrement,
    increment,
    selectStep
} from './stepSlice';
import styles from './Step.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';

export function Step(props: any) {
    const dispatch = useAppDispatch();
    const [incrementAmount, setIncrementAmount] = useState('1');
    const [decrementAmount, setDecrementAmount] = useState('1');

    const incrementValue = Number(incrementAmount) || 0;
    const decrementValue = Number(decrementAmount) || 0;

    const step = useSelector((state: RootState) => state.step.value);

    const stepsArray: { [key: string]: string } = {
        user: 'Usuario',
        validation: 'Validação',
        company: 'Empresa',
        documents: 'Documentos',
        confirmation: 'Confirmação'
    }

    const progress: string = ((step + 1) * 18) + '%'

    return (
        <div className={styles.row}>
            <div className={styles.progress} style={{ width: progress }}>
            </div>
            {Object.keys(stepsArray).map((key, index) =>
                <div className={step == index ? styles.buttonStepActive : styles.buttonStep}>
                    <span className={step >= index ? styles.indexActive : styles.index}>{(index + 1)}&nbsp;&nbsp;&nbsp;</span>
                    <span className={step >= index ? styles.textButtonActive : styles.textButton}>{stepsArray[key]}</span>
                    
                </div>
            )}
        </div>
    );
}

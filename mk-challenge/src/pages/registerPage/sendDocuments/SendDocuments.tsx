import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../app/hooks';
import { decrement, increment } from '../../../components/step/stepSlice';

import styles from '../RegisterPage.module.css';

export function SendDocuments() {
    const dispatch = useAppDispatch();

    return (
        <>
            <div className={styles.boxTitle}>
                <p className={styles.title}>
                    Envie os documentos
                </p>
                <div className={styles.titleBord}>
                </div>
            </div>
            <div className={styles.boxText}>
                <span className={styles.paragraph}>Para concluir o processo de cadastro, você deve enviar os documentos da empresa <br />
                    e de identificação sua como responsável pela empresa
                </span>
            </div>
            <p className={styles.paragraph} style={{ fontWeight: 700, marginBottom: '32px' }}>
                Envie os documentos abaixo
            </p>

            <span className={styles.backButton} style={{marginBottom: '60px', marginLeft: 0}}> Não sou o responsável ou sócio da empresa</span>
            <div className={styles.flexButtons}>
                <Button variant='success' style={{ width: "168px" }} onClick={() => { dispatch(increment()); }}>
                    Continuar
                </Button>
                <span className={styles.backButtonGreen} onClick={() => { dispatch(decrement()); }}> Salvar e continuar depois</span>
            </div>
        </>
    );
}

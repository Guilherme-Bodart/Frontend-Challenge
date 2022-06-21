import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../app/hooks';
import { RiErrorWarningFill } from "react-icons/ri";

import styles from '../RegisterPage.module.css';

export function ConfirmationPage() {
    const dispatch = useAppDispatch();

    return (
        <>
            <div className={styles.boxTitle}>
                <p className={styles.title}>
                    Sucesso
                </p>
                <div className={styles.titleBord}>
                </div>
            </div>
            <div className={styles.dFlexCenter} style={{width: '100%', flexDirection: 'column'}}>
                <div className={styles.boxText}>
                    <span className={styles.bigTextGreen} >Sua conta foi cadastrada com sucesso!</span>
                    <span className={styles.paragraph} style={{ fontWeight: 700 }}>
                        Aguarde que nossa equipe está validando os dados informados.
                    </span>
                    <span className={styles.paragraph}>Enviaremos a confirmação o mais breve possível em seu email.
                    </span>
                </div>
                <span className={styles.textWarning}><RiErrorWarningFill style={{marginRight: '8px'}} />Foi enviado um email com os próximos passos
                </span>
            </div>
        </>
    );
}

import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../app/hooks';
import { RootState } from '../../../app/store';
import { decrement, increment } from '../../../components/step/stepSlice';

import styles from '../RegisterPage.module.css';

export function ValidationAccount() {
    const dispatch = useAppDispatch();
    const phone: string = useSelector((state: RootState) => state.register.phone);
    const codeArray: Array<number> = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
    return (
        <>
            <div className={styles.boxTitle}>
                <p className={styles.title}>
                    Validação da conta
                </p>
                <div className={styles.titleBord}>
                </div>
            </div>
            <div className={styles.boxText}>
                <span className={styles.textGreen}>Validação enviada para seu celular</span>
                <span className={styles.paragraph}>Enviamos uma mensagem SMS com o código de confirmação, <br />
                    para o celular abaixo.
                </span>
            </div>
            <div className={styles.boxPhone}>
                <span className={styles.textPhone}>{phone}</span>
            </div>
            <div style={{ marginBottom: '32px' }}>
                <p className={styles.paragraph} style={{ fontWeight: 700 }}>
                    Informe o código de verificação
                </p>
                <div className={styles.dFlexCenter}>
                    <Form className={styles.codeVerification}>
                        {codeArray.map((code, index) =>
                            <Form.Group className={styles.groupCode}>
                                <Form.Control className={styles.inputCode} type="text" maxLength={1} value={code} />
                            </Form.Group>
                        )}
                    </Form>
                    <span style={{ textDecoration: 'underline', marginLeft: '16px' }}> Não recebeu o código? Clique para reenviar</span>
                </div>
            </div>
            <div className={styles.dFlexCenter}>
                <Button variant='success' style={{ width: "168px" }} onClick={() => { dispatch(increment()); }}>
                    Confirmar
                </Button>
                <span className={styles.backButton} onClick={() => { dispatch(decrement()); }}> Voltar</span>
            </div>
        </>
    );
}

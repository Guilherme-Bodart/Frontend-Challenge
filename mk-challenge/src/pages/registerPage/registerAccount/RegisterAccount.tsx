import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../app/hooks';
import { RootState } from '../../../app/store';
import { increment } from '../../../components/step/stepSlice';

import styles from '../RegisterPage.module.css';
import { registerAsync } from './registerAccountSlice';


export function RegisterAccount() {
    const dispatch = useAppDispatch();
    const [email, setEmail] = useState(useSelector((state: RootState) => state.register.email));
    const [name, setName] = useState(useSelector((state: RootState) => state.register.name));
    const [phone, setPhone] = useState(useSelector((state: RootState) => state.register.phone));
    const [checkContract, setCheckContract] = useState(false);

    const createUser = () => {
        dispatch(registerAsync({ email, name, phone })).then(
            () => { dispatch(increment()); }
        );
    }

    return (
        <>
            <div className={styles.boxTitle}>
                <p className={styles.title}>
                    Cadastre sua conta
                </p>
                <div className={styles.titleBord}>
                </div>
            </div>

            <div className={styles.boxText}>
                <span className={styles.textGreen}>Vamos começar pela conta de usuário</span>
                <span className={styles.paragraph}>Preencha seu email que utiliza profissionalmente, <br />
                    nome completo de pessoa física e seu número do celular.
                </span>
            </div>

            <Form className={styles.form}>
                <Form.Group className={styles.formGroup} style={{ width: '80%' }}>
                    <Form.Label className={styles.label}>Email</Form.Label>
                    <Form.Control type="email" value={email}
                        onChange={e => setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group className={styles.formGroupRow}>
                    <Form.Group className={styles.formGroupInRow} style={{ width: '55%' }}>
                        <Form.Label className={styles.label}>Nome Completo</Form.Label>
                        <Form.Control type="text" value={name}
                            onChange={e => setName(e.target.value)} />
                    </Form.Group>

                    <Form.Group className={styles.formGroupInRow} style={{ width: '40%' }}>
                        <Form.Label className={styles.label}>Celular</Form.Label>
                        <Form.Control type="text" maxLength={11} minLength={11}
                            value={phone} onChange={e => setPhone(e.target.value)} />
                    </Form.Group>
                </Form.Group>
            </Form>

            <Form.Check type="checkbox" aria-label="radio 1" style={{ width: '240px' }} >
                <Form.Check.Input isValid checked={checkContract} onClick={() => setCheckContract(!checkContract)} />
                <Form.Check.Label className={styles.checkLabel}>Eu li e concordo com o <span style={{ textDecoration: 'underline' }}>Contrato de Uso</span> </Form.Check.Label>
            </Form.Check>

            <hr style={{ color: '#ccc' }} />

            <Button variant='success' style={{ width: "168px" }} onClick={() => { createUser() }}
                disabled={!email || !name || !phone || !checkContract}>
                Cadastrar
            </Button>
        </>
    );
}

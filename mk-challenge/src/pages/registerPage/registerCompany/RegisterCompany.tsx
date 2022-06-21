import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../app/hooks';
import { RootState } from '../../../app/store';
import { decrement, increment } from '../../../components/step/stepSlice';
import { MdOutlineRouter } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";

import styles from '../RegisterPage.module.css';
import { registerCompanyAsync } from './registerCompanySlice';

export function RegisterCompany() {
    const dispatch = useAppDispatch();

    const [segment, setSegment] = useState(useSelector((state: RootState) => state.registerCompany.segment));
    const [type, setType] = useState(useSelector((state: RootState) => state.registerCompany.type));
    const [cnpj, setCnpj] = useState(useSelector((state: RootState) => state.registerCompany.cnpj));
    const [corporateName, setCorporateName] = useState(useSelector((state: RootState) => state.registerCompany.corporateName));
    const [phone, setPhone] = useState(useSelector((state: RootState) => state.registerCompany.phone));
    const [cep, setCep] = useState(useSelector((state: RootState) => state.registerCompany.cep));
    const [address, setAddress] = useState(useSelector((state: RootState) => state.registerCompany.address));
    const [number, setNumber] = useState(useSelector((state: RootState) => state.registerCompany.number));
    const [complement, setComplement] = useState(useSelector((state: RootState) => state.registerCompany.complement));
    const [district, setDistrict] = useState(useSelector((state: RootState) => state.registerCompany.district));


    const createCompany = () => {
        dispatch(registerCompanyAsync({ segment, type, cnpj, corporateName, phone, cep, address, number, complement, district })).then(
            () => { dispatch(increment()); }
        );
    }

    return (
        <>
            <>
                <div className={styles.boxTitle}>
                    <p className={styles.title}>
                        Cadaste sua empresa
                    </p>
                    <div className={styles.titleBord}>
                    </div>
                </div>

                <div className={styles.boxText}>
                    <span className={styles.paragraph}>Agora cadastre as informações de sua empresa para criar sua conta empresarial <br />
                        customizada para seu negócio.
                    </span>
                </div>

                <div>
                    <p className={styles.paragraph} style={{ fontWeight: 700, marginTop: '16px' }}>
                        Escolha o segmento de sua empresa:
                    </p>
                    <div style={{ display: 'flex' }}>
                        <div className={segment ? styles.boxSegmentActive : styles.boxSegment} onClick={() => { setSegment(true) }} >
                            <Form.Check type="checkbox" aria-label="radio 1" style={{ alignSelf: 'flex-start' }} >
                                <Form.Check.Input isValid checked={segment} onClick={() => { setSegment(true) }} />
                            </Form.Check>
                            <MdOutlineRouter className={styles.segmentIcon} />
                            <span className={styles.segmentText}>Provedores de Internet</span>
                        </div>
                        <div className={!segment ? styles.boxSegmentActive : styles.boxSegment} onClick={() => { setSegment(false) }} >
                            <Form.Check type="checkbox" aria-label="radio 1" style={{ alignSelf: 'flex-start' }} >
                                <Form.Check.Input isValid checked={!segment} onClick={() => { setSegment(false) }} />
                            </Form.Check>
                            <BsThreeDots className={styles.segmentIcon} />
                            <span className={styles.segmentText}>Outros Segmentos</span>
                        </div>
                    </div>

                </div>

                <Form className={styles.form}>
                    <Form.Group className={styles.formGroup} style={{ width: '35%' }}>
                        <Form.Label className={styles.label}>Tipo de empresa</Form.Label>
                        <Form.Select aria-label="Default select example" value={type}
                            onChange={e => setType(e.target.value)}>
                            <option hidden>Selecione o tipo de empresa</option>
                            <option value="Veículos">Veículos</option>
                            <option value="Streamer">Streamer</option>
                            <option value="Jogos">Jogos</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className={styles.formGroup} style={{ width: '35%', marginTop: '16px' }}>
                        <Form.Label className={styles.label}>CNPJ</Form.Label>
                        <Form.Control type="text" value={cnpj}
                            onChange={e => setCnpj(e.target.value)} />
                    </Form.Group>

                    <Form.Group className={styles.formGroupRow}>
                        <Form.Group className={styles.formGroupInRow} style={{ width: '45%' }}>
                            <Form.Label className={styles.label}>Razão Social</Form.Label>
                            <Form.Control type="text" value={corporateName}
                                onChange={e => setCorporateName(e.target.value)} />
                        </Form.Group>

                        <Form.Group className={styles.formGroupInRow} style={{ width: '20%' }}>
                            <Form.Label className={styles.label}>Telefone</Form.Label>
                            <Form.Control type="text" maxLength={11} minLength={11}
                                value={phone} onChange={e => setPhone(e.target.value)} />
                        </Form.Group>
                    </Form.Group>

                    <Form.Group className={styles.formGroup} style={{ width: '15%', marginTop: '16px' }}>
                        <Form.Label className={styles.label}>CEP</Form.Label>
                        <Form.Control type="text" value={cep}
                            onChange={e => setCep(e.target.value)} />
                    </Form.Group>

                    <Form.Group className={styles.formGroup} style={{ width: '70%', marginTop: '16px' }}>
                        <Form.Label className={styles.label}>Endereço</Form.Label>
                        <Form.Control type="text" value={address}
                            onChange={e => setAddress(e.target.value)} />
                    </Form.Group>

                    <Form.Group className={styles.formGroupRow}>
                        <Form.Group className={styles.formGroupInRow} style={{ width: '20%' }}>
                            <Form.Label className={styles.label}>Número</Form.Label>
                            <Form.Control type="text" value={number}
                                onChange={e => setNumber(e.target.value)} />
                        </Form.Group>

                        <Form.Group className={styles.formGroupInRow} style={{ width: '20%' }}>
                            <Form.Label className={styles.label}>Complemento</Form.Label>
                            <Form.Control type="text"
                                value={complement} onChange={e => setComplement(e.target.value)} />
                        </Form.Group>

                        <Form.Group className={styles.formGroupInRow} style={{ width: '35%' }}>
                            <Form.Label className={styles.label}>Bairro</Form.Label>
                            <Form.Control type="text"
                                value={district} onChange={e => setDistrict(e.target.value)} />
                        </Form.Group>
                    </Form.Group>
                </Form>
                <div className={styles.dFlexCenter}>
                    <Button variant='success' style={{ width: "168px" }} disabled={!type || !cnpj || !phone || !corporateName || !cep || !address}
                        onClick={() => { createCompany() }}>
                        Confirmar
                    </Button>
                    <span className={styles.backButton} onClick={() => { dispatch(decrement()); }}> Voltar</span>
                </div>
            </>
        </>
    );
}

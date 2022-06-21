import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';

import { Step } from '../../components/step/Step'
import { RegisterAccount } from './registerAccount/RegisterAccount';
import { ValidationAccount } from './validationAccount/ValidationAccount';
import { RegisterCompany } from './registerCompany/RegisterCompany';
import { SendDocuments } from './sendDocuments/SendDocuments';
import { ConfirmationPage } from './confirmationPage/ConfirmationPage';

import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';

import styles from './RegisterPage.module.css';

export function RegisterPage() {
    const dispatch = useAppDispatch();
    const step = useSelector((state: RootState) => state.step.value);

    return (
        <div className={styles.body}>
            <Step />
            <div className={styles.formRegister}>
                {step == 0 ? <RegisterAccount />
                    : step == 1 ? <ValidationAccount />
                        : step == 2 ? <RegisterCompany />
                            : step == 3 ? <SendDocuments />
                                : <ConfirmationPage />}
            </div>
        </div>
    );
}

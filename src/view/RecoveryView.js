import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authActions } from '../redux/auth';
import {
  StepOneEmailForm,
  StepTwoConfirmCodeForm,
  StepThreeChangePassForm,
} from '../components/RecoveryPassword';
import recoveryPassStep from '../utils/recoveryPassStep';

export default function RecoveryView() {
  const dispatch = useDispatch();
  const recoveryStatus = useSelector(authSelectors.getRecoveryStatus);

  useEffect(() => {
    dispatch(authActions.recoveryStatus(recoveryPassStep.FIRST_STEP));
  }, [dispatch]);

  return recoveryStatus ? (
    <>
      {recoveryStatus === recoveryPassStep.FIRST_STEP && <StepOneEmailForm />}
      {recoveryStatus === recoveryPassStep.SECOND_STEP && (
        <StepTwoConfirmCodeForm />
      )}
      {recoveryStatus === recoveryPassStep.THIRD_STEP && (
        <StepThreeChangePassForm />
      )}
    </>
  ) : (
    <Redirect to="/login" />
  );
}

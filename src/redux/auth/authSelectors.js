const getUserName = state => state.auth.user.name;
const getAuthErr = state => state.auth.error;
const getRecoveryStatus = state => state.auth.status;

export default {
  getUserName,
  getAuthErr,
  getRecoveryStatus,
};

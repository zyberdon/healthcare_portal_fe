import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRequest } from "./actions";
import Snackbar from '@mui/material/Snackbar';
import LocalRoutes from './routes.jsx'
// import { useNavigate } from "react-router";

export const App = (props) => {
  const [message, setMessage] = useState({ opened: false, message: '' });
  const { data, loading, error, loginStats, contactResp } = useSelector((state) => state.dataReducer);
  // const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      console.log('error', error)
      setMessage({ opened: true, message: error })
    }
  }, [data, loading, error])

  useEffect(() => {
    if (loginStats && !loginStats.error && loginStats.message === 'User logged in successfully') {
      setMessage({ opened: true, message: loginStats.message })
      document.cookie = `token=${loginStats.token}; path=/; Secure; SameSite=Strict`;
      //should be set from server side,not on client
    }
    else if (loginStats && !loginStats.error && (loginStats.message || loginStats.msg)) {
      let msg = loginStats.message || loginStats.msg
      setMessage({ opened: true, message: msg })
    }
  }, [loginStats]);

  useEffect(() => {
    if (contactResp && contactResp.contact && contactResp.message) {
      let msg = contactResp.message
      setMessage({ opened: true, message: msg })
    }
  }, [contactResp]);



  const handleClose = () => {
    setMessage({ opened: false, message: '' })
  }
  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={message.opened}
        autoHideDuration={5000}
        onClose={() => handleClose()}
        message={message.message}
      />

      <LocalRoutes {...props} loggedin={loginStats?.message === 'User logged in successfully'} />
    </div>
  );
};
export default App;
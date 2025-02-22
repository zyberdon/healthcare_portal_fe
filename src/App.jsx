import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRequest } from "./actions";
import Snackbar from '@mui/material/Snackbar';
import LocalRoutes from './routes.jsx'
// import { useNavigate } from "react-router";

export const App = (props) => {
  const [message, setMessage] = useState({ opened: false, message: '' });
  const { data, loading, error, loginStats } = useSelector((state) => state.dataReducer);
  // const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      console.log('error', error)
      setMessage({ opened: true, message: error })
    }
  }, [data, loading, error])

  useEffect(() => {
    if (loginStats.message === 'User logged in successfully')
      setMessage({ opened: true, message: loginStats.message })
    // // if (loginStats.message === 'User logged in successfully') {
    //   navigate("/profile")
    // }

  }, [loginStats]);


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
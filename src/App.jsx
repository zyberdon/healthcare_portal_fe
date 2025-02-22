import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRequest } from "./actions";
import Snackbar from '@mui/material/Snackbar';
import LocalRoutes from './routes.jsx'

export const App = (props) => {
  const [message, setMessage] = useState({ opened: false, message: '' });
  const { data, loading, error, loginStats } = useSelector((state) => state.dataReducer);

  useEffect(() => {
    if (error) {
      console.log('error', error)
      setMessage({ opened: true, message: error })
    }
  }, [data, loading, error])

  useEffect(() => {
    console.log(loginStats)
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

      <LocalRoutes {...props} />
    </div>
  );
};
export default App;
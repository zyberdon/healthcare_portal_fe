import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRequest } from "./actions";
import Snackbar from '@mui/material/Snackbar';
import LocalRoutes from './routes.jsx'
const App = (props) => {
  const [message, setMessage] = useState({ opened: false, message: '' });
  const { data, loading, error } = useSelector((state) => state.data);

  useEffect(() => {
    if (error) {
      console.log('error', error)
      setMessage({ opened: true, message: error })
    }
  }, [data, loading, error])

  function handleClose() {
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

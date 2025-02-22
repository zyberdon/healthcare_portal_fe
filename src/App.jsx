import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRequest } from "./actions";
import Snackbar from '@mui/material/Snackbar';

const App = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState({ opened: false, message: '' });
  const { data, loading, error } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchRequest()); // Trigger API call when component mounts
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      console.log('eror', error)
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
      <h1>Redux-Saga Example</h1>
      {loading && <p>Loading...</p>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
};

export default App;

import * as React from 'react';
import axios from 'axios';
import { Box, Typography, Modal } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

import Btn from './Button';

const modal = {
  position: 'absolute' as 'absolute',
  top: '30%',
  left: '50%',
  width: '80%',
  transform: 'translate(-50%, -50%)',
  borderRadius: '10px',
  bgcolor: '#fdccff',
  boxShadow: 24,
  p: 4,
  height: 350,
  overflow: 'auto',
};

const JokeModal: React.FC = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const handleOpen = () => {
    genJoke();
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setJoke('');
  };
  const [joke, setJoke] = React.useState<string>('');

  function genJoke() {
    const config = {
      headers: {
        Accept: 'application/json',
      },
    };

    axios
      .get('https://icanhazdadjoke.com', config)
      .then((response: { data: { joke: React.SetStateAction<string> } }) => {
        setJoke(response.data.joke);
      });
  }

  return (
    <React.Fragment>
      <Modal open={open} onClose={handleClose}>
        <Box sx={modal}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img style={{ width: '100px' }} src='laughing.svg' alt='joker' />
          </div>
          <Typography
            sx={{
              mt: 4,
              fontSize: '1rem',
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            {joke === '' ? (
              <CircularProgress color='secondary' />
            ) : (
              `" ${joke} "`
            )}
          </Typography>
        </Box>
      </Modal>
      <Btn open={handleOpen} text={'Get Joke'} />
    </React.Fragment>
  );
};

export default JokeModal;

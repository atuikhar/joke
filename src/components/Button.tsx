import { Button } from '@mui/material';
import React from 'react';

const button = {
  marginTop: 40,
  width: 150,
  borderRadius: '10px',
  bgcolor: '#1db6ff',
  color: '#000',
  p: 1.5,
  fontSize: '16px',
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: '#000',
    color: '#f4f4f4',
  },
};

interface Props {
  open: React.MouseEventHandler<HTMLButtonElement> | undefined;
  text: string;
}

const Btn: React.FC<Props> = ({ open, text }) => {
  return (
    <Button onClick={open} sx={button}>
      {text}
    </Button>
  );
};

export default Btn;

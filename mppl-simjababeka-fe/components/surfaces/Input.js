import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function InputText({ textLabel }) {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { mb: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label={`Cari ${textLabel}`} variant="outlined" size="small" />
    </Box>
  );
}

export default InputText;
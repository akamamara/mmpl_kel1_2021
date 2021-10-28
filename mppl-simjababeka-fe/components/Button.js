import * as React from 'react';
import Button from '@mui/material/Button';

export default function Buttons({ variant, text, color, size }) {
  return (
      <Button variant={variant} color={color} size={size}>{text}</Button>
  );
}
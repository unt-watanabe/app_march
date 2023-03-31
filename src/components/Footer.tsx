import Typography from '@mui/material/Typography';

export const Footer = () => {
  return <Typography sx={{ padding: '1rem', textAlign: 'right' }}>Copyright &copy; nipposan {new Date().getFullYear()}.</Typography>;
};

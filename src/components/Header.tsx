import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';

export const Header = () => {
  return (
    <AppBar position="static" sx={{ padding: '1rem', textAlign: 'center' }}>
      <Typography sx={{ fontSize: '2rem' }}>日報さん</Typography>
    </AppBar>
  );
};

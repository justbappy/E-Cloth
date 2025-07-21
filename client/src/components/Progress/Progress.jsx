import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function CircularIndeterminate() {
  return (
    <Box sx={{ display: 'flex' }}>
      <div className='absolute top-[50%] left-[50%]'>
        <CircularProgress />
      </div>
    </Box>
  );
}
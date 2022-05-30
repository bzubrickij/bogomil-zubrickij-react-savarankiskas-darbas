import { NavLink } from 'react-router-dom';
import { styled } from '@mui/material';

const StyledNavLink = styled(NavLink)(({ theme }) => ({
  fontSize: 18,
  padding: theme.spacing(0, 2),
  textDecoration: 'none',
  color: theme.palette.common.white,
  position: 'relative',
  '&:before': {
    content: '\'\'',
    position: 'absolute',
    width: '0',
    height: '7px',
    bottom: '-26px',
    left: '50%',
    transform: 'translate(-50%,0%)',
    backgroundColor: '#F2F2F2',
    transformOrigin: 'center',
    visibility: 'hidden',
    transition: 'all 0.3s ease-in-out',
  },
  '&:hover:before': {
    visibility: 'visible',
    width: '100%',
  },
  '&.active:before': {
    visibility: 'visible',
    width: '100%',
  },
  '&.active': {
    color: '#F2F2F2',
  },
}));

export default StyledNavLink;

import {useState} from 'react';
import Menu from '@mui/material/Menu';

export default function CustomMenu({options = [], Component, className}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Component click={handleClick} />

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        className={`${className}`}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {
          options.map(({ name: Item }, index) => {
            return (
              <Item key={index.toString()} close={handleClose} />
            )
          })
        }
      </Menu>
    </>
  );
}

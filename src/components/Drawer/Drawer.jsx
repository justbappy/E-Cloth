import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { IoMenu } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { IoClose } from "react-icons/io5";

export default function DrawerComponent(props) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 300 }} role="presentation"  className="relative">
        <IoClose className='absolute right-2 top-2 text-[30px]' onClick={toggleDrawer(false)}/>
        <ul className="py-10 px-5 text-lg">
            {/* dynamic nav links using props*/}
            {
                props.arr.map((curr,index) => <li key={index} className="navHover">
                    <Link to={
                        localStorage.getItem('username')?`/${curr.toLowerCase()}`:'/register'
                    }> {curr} </Link>
                </li>)
            }
                
        </ul>
    </Box>
  );

  return (
    <div className='sm:hidden xs:flex '>
      <Button onClick={toggleDrawer(true)}>
        <IoMenu  className="xs:text-[30px] text-black"/>
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}


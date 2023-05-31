import { NavLink as NavLinkBase } from 'react-router-dom'; 
import {forwardRef} from 'react'

const NavLink = forwardRef((props, ref) => (
  <NavLinkBase
    ref={ref}
    {...props}
    className={({ isActive }) => (isActive ? props.className + ' Mui-selected' : props.className)}
  />
));

export default NavLink
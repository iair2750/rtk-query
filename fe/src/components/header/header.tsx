import { FC } from "react";
import {NavLink} from 'react-router-dom';

interface HeaderLinks {
  to: string;
  text: string;
}

interface HeaderProps  {
  links: HeaderLinks[];
}

const Header: FC<HeaderProps> = ({links}) => {
  return (
    <div className="px-5 py-3 bg-blue-100 flex gap-5">
      {links.map((link, index) => (
        <NavLink key={`link-${index}`} to={link.to} className={
          ({isActive}) => 
            'border-b-2 hover:border-b-red-600 ' +
            (isActive ? 'border-b-red-900' : 'border-b-transparent')
        }>{link.text}</NavLink>
      ))}
    </div>
  )
}

export default Header;

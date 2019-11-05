import React from 'react';
import { StyledDownArrow } from './DownArrow.styled';
import { Link } from 'react-scroll';

const DownArrow = ({ toName, toId, ...props }) => {
  
  return (
    <StyledDownArrow>
      <div>
        <Link
          to={toId}
          spy={true}
          smooth={true}
          offset={0}
          duration= {500}
        >
          <span />
          <span />
          <p>{toName}</p>
        </Link>
      </div>
    </StyledDownArrow>
  )
}

export default DownArrow;
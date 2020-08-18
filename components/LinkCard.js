import React from 'react';
import Link from 'next/link';

export default function LinkCard({ id, title, description, href }) {
  return(
      <Link href={href}>
        <div className='card'>
          <h3>
            {title}
          </h3>  
          <small>
            {description}
          </small>
        </div>  
      </Link>
  ) 
}
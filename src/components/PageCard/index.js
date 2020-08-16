import React from 'react';
import {Link} from 'react-router-dom';

export default function PageCard({ id, title, description, href }) {
  return (
    <section class="card">
      <Link to={href}>
        <span><h3>{title}</h3></span>
        <span><small>{description}</small></span>
      </Link>
    </section>
  );
}
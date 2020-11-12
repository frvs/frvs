import React from 'react';
import Link from 'next/link';

export default function PostPreview({ id, url , title, date }) {
  const postPreviewStyle = {
    margin: `10px auto 10px auto`, 
    padding: `10px`, 
    width: `80%`, 
  };

  const linkStyle = {
    float: `right`, 
    width: `40px`,
    textAlign: `center` 
  }

  return(
    <div style={postPreviewStyle}>
      <h3>{title}</h3>
      <small>
        {date}
      </small>
      <a href={url} target="_blank" style={linkStyle} >
        Ler
      </a>
    </div>
  ) 
}
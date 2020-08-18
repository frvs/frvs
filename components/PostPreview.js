import Link from 'next/link';

export default function PostPreview({ id, date, title }) {
  return(
    <div key={id}>
      <h3>{title}</h3>
      <small>
        {date}
      </small>
      <Link href={'posts/' + id}>
        <a>
          Read more
        </a>
      </Link>
    </div>
  ) 
}
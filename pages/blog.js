import Layout from "../components/Layout";
import { getSortedPostsData } from '../lib/posts';
import PostPreview from "../components/PostPreview";

export default function Blog({ allPostsData }) {
  return (
    <Layout>
      <h2>blog posts</h2>
      {
      allPostsData.map((item, i) => {
        <li key={i}>
          <PostPreview {...item} />
        </li>
      })
    }
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
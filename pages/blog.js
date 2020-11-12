import Layout from "../components/Layout";
import { getSortedPostsData } from '../lib/posts';
import PostPreview from "../components/PostPreview";

export default function Blog({ allPostsData }) {
  return (
    <Layout>
      <h2>Posts</h2>
      <div id="posts">
        <ul>
        {
        allPostsData.map((item)=> {
          return (
            <li key={item.id}>
              <PostPreview {...item} />
            </li>
          )
        })
        }
        </ul> 
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData: allPostsData
    }
  }
}
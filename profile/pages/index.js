import Menu from '../components/Menu/Menu';
import Layout from '../components/Layout/Layout';
import Social from '../components/Social/Social';
import Intro from '../components/Intro/Intro';

const Home = () => (
  <Layout home>
    <Intro />
    <Social />
    <Menu />
  </Layout>
);

export default Home;

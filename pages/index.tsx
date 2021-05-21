import Contact from '../components/contact';
import Hero from '../components/Hero';
import Info from '../components/Info';
import Layout from '../components/Layout';
import Projects from '../components/projects';

const IndexPage = () => (
  <Layout title='Porfolio'>
    <Hero />
    <Info />
    <Projects />
    <Contact />
  </Layout>
);

export default IndexPage;

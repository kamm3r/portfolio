import { useState } from 'react';
import Contact from '../components/contact';
import Hero from '../components/Hero';
import Info from '../components/Info';
import Layout from '../components/Layout';
import MobileMenu from '../components/MobileMenu';
import Projects from '../components/projects';

const IndexPage = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);

  return (
    <Layout title='Porfolio' toggle={toggle}>
      <MobileMenu open={open} toggle={toggle} />
      <Hero />
      <Info />
      <Projects />
      <Contact />
    </Layout>
  );
};

export default IndexPage;

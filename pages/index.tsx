import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Roadmap from '../components/Roadmap';
import Ideology from '../components/Ideology';
import Community from '../components/Community';
import Faq from '../components/FAQ';

export default function Home() {
  return (
    <Layout>
      <Navbar />
      <Hero />
      <Roadmap />
      <Ideology />
      <Faq />
      <Community />
      <Footer />
    </Layout>
  );
}

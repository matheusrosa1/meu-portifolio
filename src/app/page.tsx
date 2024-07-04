import Header from '../components/Interface/header';
import Principal from '../components/Pages/principal';
import About from '../components/Pages/about';

export default function Home() {
  return (
    <div className='h-screen w-full'>
      <Header />
      <Principal />
      <About />
    </div>
  );
}

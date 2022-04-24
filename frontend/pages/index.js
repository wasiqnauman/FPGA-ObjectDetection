import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'
import MediumCard from '../components/MediumCard';

export default function Home( {cardsData }) {
  return (
    <div className="">
      <Head>
        <title>Object Deteciton FPGA</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      {/* <main className="max-w-7xl mx-auto px-8 sm:px-16">
        
        <section>
          <h2 className="text-4xl font-semibold py-8">Previous Runs</h2>
          <div className="flex space-x-4 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardsData?.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>
      </main> */}
    </div>
  );
}

export async function getStaticProps() {
  const cardsData = [
    {"img":"/images/run_1.png","title":"Dog"},
    {"img":"/images/run_2.png","title":"Cars"},
    {"img":"/images/run_4.jpeg","title":"People"},
    {"img":"/images/run_3.jpeg","title":"Traffic"}];

  return {
    props: {
      cardsData
    },
  };
}

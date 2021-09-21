import Layout from '../components/Layout';

export default function ErrorPage() {
  return (
    <Layout title='Broken'>
      <section className='relative min-h-screen flex items-center justify-center '>
        <div className='z-10 flex flex-col items-start justify-center mx-10 xl:mx-52'>
          <h1 className='text-5xl xl:text-7xl font-bold mb-9'>
            You Broke Everything!!
          </h1>
        </div>
      </section>
    </Layout>
  );
}

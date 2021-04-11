import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='mt-3'>
        <section className='flex flex-row justify-around'>
          <div className='max-w-lg'>
            <h1 className='text-5xl'>About us</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellendus sapiente fuga reprehenderit aut sed at laborum unde
              vero vel, animi suscipit quam sequi minima nobis iusto quasi
              ullam, nostrum, saepe eius! Aut.
            </p>
            <br></br>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellendus sapiente fuga reprehenderit aut sed at laborum unde
              vero vel, animi suscipit quam sequi minima nobis iusto quasi
              ullam, nostrum, saepe eius! Aut.
            </p>
          </div>
          <div className=' w-32 h-32 bg-cyan'>Image</div>
        </section>
        <br className='my-10' />
        <div className='flex justify-around'>
          <section className='grid grid-cols-3 gap-32'>
            <div className='w-32 h-32 bg-success'>Blog</div>
            <div className='w-32 h-32 bg-success'>Blog</div>
            <div className='w-32 h-32 bg-success'>Blog</div>
            <div className='w-32 h-32 bg-success'>Blog</div>
            <div className='w-32 h-32 bg-success'>Blog</div>
            <div className='w-32 h-32 bg-success'>Blog</div>
          </section>
        </div>
      </main>
    </div>
  )
}

import Navbar from '../components/Navbar'
import { useRouter } from 'next/router'
import Image from 'next/image'
import styled from '@emotion/styled'

const DefaultLayout = ({ children }) => {
  const router = useRouter()
  return (
    <div className='h-screen'>
      <Navbar />
      {/* Main Pages */}
      <section className='flex flex-col'>
        {/* {router.pathname === '/' && (
          <div className=''>
            <Image
              src='https://uptrust.eu/wp-content/uploads/2020/04/1997-2.jpg'
              layout='fill'
              objectFit='contain'
              sizes='true'
              unselectable='on'
            />
          </div>
        )} */}
        {router.pathname === '/' && (
          <div className='w-full h-96 bg-cyan flex justify-center items-center'>
            Image
          </div>
        )}
        <div className='w-10/12 m-auto bg-accent-1'>{children}</div>
      </section>
      <Footer>
        <p>Uptrust 2021</p>
      </Footer>
    </div>
  )
}

const Footer = styled.footer`
  margin-top: 20px;
  position: relative;
  background-color: cyan;
  clear: both;
  bottom: 0;
  width: 100%;
  height: 100px;
  justify-content: center;
  align-items: center;
  display: flex;
`

export default DefaultLayout

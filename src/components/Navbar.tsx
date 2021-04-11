import styled from '@emotion/styled'
import { FC } from 'react'

import { primary } from '../utils/constants'
import MenuButtons from './NavbarButtons'

const Navbar: FC = () => {
  const menuButtons = [
    { id: 1, title: 'Home', slug: '/' },
    { id: 2, title: 'Services', slug: '/services' },
    { id: 3, title: 'Partners', slug: '/partners' },
    { id: 4, title: 'Blog', slug: '/blog' },
    { id: 5, title: 'Contact', slug: '/contact' },
  ]

  return (
    <NavContainer>
      <Container>
        <div className='logo'>LOGO</div>
        <MenuButtonsContainer>
          {menuButtons.map((button) => (
            <MenuButtons
              key={button.id}
              id={button.id}
              title={button.title}
              slug={button.slug}
            />
          ))}
        </MenuButtonsContainer>
      </Container>
    </NavContainer>
  )
}
export default Navbar

const NavContainer = styled.nav`
  width: 100%;
  height: 150px;
  background-color: ${primary};
  color: white;
  align-items: center;
  justify-items: center;
`
const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 20px;
`
const MenuButtonsContainer = styled.div`
  display: flex;
  width: 30%;
  justify-content: space-evenly;
`

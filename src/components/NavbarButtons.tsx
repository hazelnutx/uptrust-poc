import { FC } from 'react'
import Link from 'next/link'

interface MenuProps {
  id: number
  title: string
  slug: string
}

const MenuButtons: FC<MenuProps> = ({ id, title, slug }) => {
  return (
    <Link href={slug} key={id}>
      <a className='mr-3'>{title}</a>
    </Link>
  )
}
export default MenuButtons

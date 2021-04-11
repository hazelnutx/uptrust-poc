import { FC } from 'react'
import styled from '@emotion/styled'
import { accent_2, success } from '../../utils/constants'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  title: string
  thumbnail?: string
  tags?: [string]
  slug?: string
}

const PostContainer: FC<Props> = ({ title, thumbnail, tags, slug }) => {
  return (
    <Container>
      <div className='thumbnail'>
        <Image src={`https:${thumbnail}`} width={270} height={180} />
      </div>
      <Content className='shadow-medium'>
        <div className='info'>
          <h4 className='text-xl font-medium'>{title}</h4>
          {tags.map((tag, i) => (
            <span
              className='mr-1 px-3 py-1 rounded-sm ml-1 bg-accent-2 text-xs'
              key={i}
            >
              {tag}
            </span>
          ))}
        </div>
        <ActionsContainer className=''>
          <Link href={`/blog/${slug}`}>
            <StyledAnchor>Click Here</StyledAnchor>
          </Link>
        </ActionsContainer>
      </Content>
    </Container>
  )
}

export default PostContainer

const Container = styled.div`
  max-width: 300px;
  height: 250px;
  margin-bottom: 40px;
`
const Content = styled.div`
  padding: 2px 5px;
  position: relative;
  top: -30px;
  left: -10px;
  background-color: white;
`
const ActionsContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
`
const StyledAnchor = styled.a`
  color: white;
  text-decoration: none;
  padding: 10px 20px;
  background-color: ${success};
  font-weight: 'semi-bold';
`

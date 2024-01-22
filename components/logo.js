import Link from 'next/link'
import Image from 'next/image'
import { Heading, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'


const ImageContainer = styled.div`
  border-radius: 12px;
  overflow: hidden;
  border: 2px solid #d3d3d3;
`;

const animation = `
@keyframes animation {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }
`;

const LogoBox = styled.span`
  ${animation}
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 50px;
  line-height: 20px;
  padding: 10px;


  &:hover img {
    animation: animation 0.5s ease-in-out 2;
  }
`;



const Logo = () => {
  const emblemImg = `/images/e85_icon.png`

  return (
    <Link href="/">
      <LogoBox>
        <ImageContainer>
          <Image
            src={emblemImg}
            width={60}
            height={60}
            alt="logo"
          />
        </ImageContainer>
        <Heading
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          textAlign={'center'}
          fontSize="xl"
          ml={5}
        >
          E85 Pumps
        </Heading>
      </LogoBox>
    </Link>
  )
}

export default Logo

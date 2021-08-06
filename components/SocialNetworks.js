import styled from 'styled-components'
import Link from 'next/link'
import { extraSmallScreen, largeScreen } from '../style/sizeVariables'

const SocialNetworks = () => {
  return (
    <Socials>
      <DisplayLine />
      <Image>
        <Link href="https://www.linkedin.com">
          <a target="_blank">
            <img src="/images/icons/LinkedIn.svg" alt="LinkedIn" />
          </a>
        </Link>
      </Image>
      <Image>
        <Link href="https://www.facebook.com/igor.trnko/">
          <a target="_blank">
            <img src="/images/icons/Facebook.svg" alt="Facebook" />
          </a>
        </Link>
      </Image>
      <Image>
        <Link href="https://github.com/trca1996">
          <a target="_blank">
            <img src="/images/icons/GitHub.svg" alt="GitHub" />
          </a>
        </Link>
      </Image>
      <Line />
    </Socials>
  )
}

const Socials = styled.div`
  position: fixed;
  bottom: 0;
  left: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1000;

  @media only screen and (min-width: ${largeScreen}) {
    left: 10rem;
  }

  @media only screen and (max-width: ${extraSmallScreen}) {
    background-color: ${({ theme }) => theme.colors.primary};
    flex-direction: row;
    left: 0;
    right: 0;
    justify-content: space-between;
    height: 11rem;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }
`

const Image = styled.div`
  margin: 1rem 0;

  img {
    transition: all 0.2s ease-in-out;
    filter: ${({ theme }) => theme.filter.shadowBig};

    &:hover {
      transform: scale(1.3);
      filter: ${({ theme }) => theme.filter.shadowStrong};
    }
  }
`

const Line = styled.div`
  background-color: ${({ theme }) => theme.colors.textColor};
  width: 2px;
  height: 12rem;
  filter: ${({ theme }) => theme.filter.shadowBig};

  @media only screen and (max-width: ${extraSmallScreen}) {
    width: 25%;
    height: 2px;
  }
`

const DisplayLine = styled(Line)`
  display: none;
  @media only screen and (max-width: ${extraSmallScreen}) {
    display: block;
  }
`

export default SocialNetworks

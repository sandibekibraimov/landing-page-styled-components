import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
  padding: 2rem 0;

  h1 {
    color: blue;
    &:hover {
      color: black;
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.5rem;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;

export const Logo = styled.img`
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-bottom: 2rem;
  }
`;

export const Image = styled.img`
  width: 378px;
  margin-left: 40px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-top: 2rem;
  }
`;

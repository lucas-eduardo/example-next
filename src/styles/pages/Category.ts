import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;

  ul {
    list-style: none;
    margin-top: 20px;

    li {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 40px;

      a {
        text-decoration: none;
        color: #fff;
        font-weight: bold;
        transition: color 0.2s;

        &:hover {
          color: #8257e5;
        }
      }
    }
  }
`;

export const Title = styled.h1`
  color: #8257e5;
  margin-top: 30px;
`;
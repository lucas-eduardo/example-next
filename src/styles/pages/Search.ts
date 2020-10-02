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

  input {
    width: 350px;
    height: 40px;
    border: 0;
    padding: 0 10px;
  }

  button {
    width: 90px;
    height: 40px;
    cursor: pointer;
    margin-left: 5px;
    border: 0;
  }

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
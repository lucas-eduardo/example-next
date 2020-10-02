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
`;

export const WrapperImage = styled.div`
  width: 100%;
  height: 100%;

  max-width: 350px;
  max-height: 350px;

  margin-top: 20px;

  img {
    width: 100%;
    height: 100%;

    border-radius: 8px;
  }
`;

export const Description = styled.div`
  width: 100%;
  margin-top: 30px;
`;

export const Title = styled.h1`
  color: #8257e5;
  margin-top: 30px;
`;

export const Price = styled.div`
  margin-top: 15px;

  font-size: 16px;
  font-weight: bold;
  color: #8257e5;

  span {
    font-size: 25px;
  }
`;
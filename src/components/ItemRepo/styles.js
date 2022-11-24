import styled from 'styled-components';

export const ItemContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  h3 {
    font-size: 32px;
    color: #fafafa;
  }

  p.repoFullName {
    font-size: 16px;
    color: #fafafa60;
    margin-bottom: 20px;
  }

  p.repoDescription {
    font-size: 16px;
    color: #fafafa;
    margin-bottom: 20px;
  }

  .clickButtons {
    display: flex;
    justify-content: space-between;
  }

  #verRepositorio {
    color: blue;
  }

  #verRepositorio:hover {
    color: #fafafa;
  }

  hr {
    color: #fafafa60;
    margin: 20px 0;
  }
`;

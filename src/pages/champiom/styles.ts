import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.2;
    svg {
      margin-right: 4px;
    }
    &:hover {
      color: #666;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;
  header {
    display: flex;
    align-items: center;
    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }
    div {
      margin-left: 24px;
      strong {
        font-size: 18px;
        color: white;
      }
      p {
        font-size: 18px;
        color: white;
        margin-top: 4px;
      }
    }
  }
  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;
    li {
      & + li {
        margin-left: 80px;
      }
      strong {
        display: block;
        font-size: 36px;
        color: white;
      }
      span {
        display: block;
        margin-top: 4px;
        color: white;
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 80px;
  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: transform 0.2s;
    &:hover {
      transform: translate(10px);
    }
    & + a {
      margin-top: 16px;
    }
    div {
      margin: 0 16px;
      flex: 1;
      strong {
        font-size: 20px;
        color: #3d3d4d;
      }
      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }
  }
  svg {
    margin-left: auto;
    color: #cbcbd6;
  }
`;

export const Habilities = styled.div`
  margin-top: 30px;
  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: transform 0.2s;
    &:hover {
      transform: translate(10px);
    }
    & + a {
      margin-top: 16px;
    }
    img {
      border-radius: 50%;
    }
    div {
      margin: 0 16px;
      flex: 1;
      strong {
        font-size: 20px;
        color: #3d3d4d;
      }
      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }
  }
  svg {
    margin-left: auto;
    color: #cbcbd6;
  }
`;

export const Title = styled.h3`
  color: white;
  margin: 20px 0;
  font-size: 20px;
`;

export const Skins = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transition: 0.2s;

    &:hover {
      transform: translateY(-10px);
    }

    & + div {
      margin-left: 20px;
    }

    img {
      width: 100px;
      height: 100px;

      border-radius: 50%;
    }

    p {
      text-align: center;
      font-size: 15px;
      color: #a8a8b3;
      padding-top: 4px;
    }
  }
`;

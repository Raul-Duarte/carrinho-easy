import styled from "styled-components";
import {darken} from "polished";

export const Container = styled.div`
  padding: 30px;
  background: #FFF;
  border-radius: 4px;

  button {
    background: #7159c1;
    color: #FFF;
    border: 0;
    border-radius: 4px;
    overflow: hidden;
    margin-top: 5%;
    display: flex;
    align-items: center;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.03, '#7159c1')};
    }

    div {
      display: flex;
      align-items: center;
      padding: 12px;
      background: rgba(0, 0, 0, 0.1);

      svg {
        margin-right: 5px;
      }
    }

    span {
      flex: 1;
      text-align: center;
      font-weight: bold;
    }
  }

  div {
    display: flex;
  }

`;

export const DivUm = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  img{
    height: 400px;
    width: 400px;
  }

`;

export const DivDois = styled.div`
  display: flex;
  flex-direction: column;
`;



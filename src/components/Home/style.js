import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column; /* Adicione esta linha */
  width: 450px;
  height: 450px;
  justify-content: center;
  align-items: center; /* Centraliza os itens */
  background: black;

  > input {
    width: 75%;
    height: 55px;
    text-align: center;
    margin-top: 15px;
    margin-bottom:15px;
    border-radius: 12px;
    border: none;
  }

  > button { /* Adicione este estilo para o botão */
    width: 65%;
    height: 45px;
    margin-top: 15px;
    border-radius: 8px;
    border: none;
    background: ${({theme}) => theme.COLORS.BACKGROUND_900};
    color: white;
    cursor: pointer;
    transition: width 2s;
    margin-bottom:55px;

}
> button:hover{
    width:75%;
}
`;


export const StyledH2 = styled.h2`
    color: white;
    font-size:22px;
    font-weight:600;
    padding-top:25px;


`;
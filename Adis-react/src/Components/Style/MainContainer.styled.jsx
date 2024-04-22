import styled from "styled-components";

export const MainContainer = styled.div`
  /* 
  */
  position: fixed;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  float: top;
  @media (max-width:786px) {
        overflow-y: scroll;
    } 
`;
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  width: 100vw;
  justify-content: space-around;
  /* display: flex;
    flex-direction: row;
    */
  /* height:100vh; */
  @media (max-width: 786px) {
    flex-direction: column;
  }
`;

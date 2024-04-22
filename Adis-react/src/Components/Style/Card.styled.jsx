import styled from "styled-components";

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 10000;
  margin: 40px;
  
`;

export const CardBody = styled.div`
  height: 180px;
  margin-top: 40px;
  width: 180px;
  display: flex;
  overflow: hidden;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  margin: 20px;
  background-color:#D8D7D5;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
  border-radius: 20px;
  flex-direction: column;
  position: relative;

  &:hover {
    background-color:white;
  }

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-left: 0;
    margin-top: 0;
  }
`;

export const CardText = styled.div`
  color: black;
  /* text-overflow: ellipsis; 
  white-space: nowrap;  */
  text-align: center;
`;

export const CardIcon = styled.div`
  color:#FB6B90;
  font-size: 15px;
  
  &:hover {
    color: red;
  }
`;
export const EditButton = styled.div`
  background-color: blue;
`

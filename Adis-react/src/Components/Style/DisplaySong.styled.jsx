import styled from "styled-components";
import { IoPauseCircle } from 'react-icons/io5';
import { AiFillPlayCircle } from "react-icons/ai";


export const Footer = styled.div`
    position: fixed;
    height: 50px;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    background-color:silver;
    /* margin-left: 253px; */
`;
export const Play = styled.div`
     display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: blue;
    font-size: 20px;
    margin-top: 5px;`;
export const Containers=styled.div`
    width: 40px;
    height: 20px;
    background-color: silver;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`
export const StyledAiFillPlayCircle= styled(AiFillPlayCircle)`
   font-size: 20px;
   :hover{color:lightskyblue}
`
export const StyledIoPauseCircle = styled(IoPauseCircle)`
    font-size: 20px;
    :hover{color:lightskyblue}
`
export const ProgressBarContainer = styled.div`
  display: flex;
  align-items: center;
  height: 3px;
`;

export const Time = styled.span`
  margin: 0 1px;
  font-size: 10px;
`;

export const RangeInput = styled.input.attrs({
    type:"range",
    value:0,
})`
  flex: 1;
  margin: 0 0px;
height:3px;

`;
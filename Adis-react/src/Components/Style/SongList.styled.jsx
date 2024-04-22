import styled from "styled-components";

export const SongListStyle = styled.div`
  width: 30%;
  height: 100vh;
  overflow-y: scroll;
  display: flex;
  /* overflow: hidden; */
  grid-template-columns: 6fr 4fr;
  background-color: white;
  box-shadow: 1px 1px 25px 3px rgba(0, 0, 0, 0.1);
  @media (max-width:786px){
    width: 100%;
    max-width: 100%;
    margin-top: 5px;
    grid-template-columns: 1fr;
  }
`;
export const Song = styled.p`
  align-items: center;
  margin-top: 0px;
`;
export const List = styled.section`
  display: flex;
  /* height: 40px; */
  &:hover {
    background-color:silver;
    color: black;
  }
  background-color: white;
  
`;
export const Button = styled.button`
  border-radius: 50px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  padding: 15px 60px;
  margin-right: 20px;
  background-color: ${({ bg }) => bg || "green"};
  color: ${({ color }) => color || "white"};
  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;
export const ListButton = styled.li`
  display: block;
  width: 100%;
  border: none;
  margin-top: 0.1em;
  color: black;
  padding: 24px 28px;
  font-size: 13px;
  cursor: pointer;
  /* text-align: center; */
 
`;
export const Holder = styled.div`
    margin-bottom: 100px;
    width: 100%;
`
export const DeleteButton = styled.button`
  background: ${(props) => (props.$primary ? "red" : "white")};
  color: ${(props) => (props.$primary ? "white" : "red")};
  font-size: 15px;
  margin: 0.5em;
  align-items: center;
  padding: 0.25em 0.7em;
  border: 2px solid red;
  border-radius: 3px;
  cursor:pointer;
  &:hover {
    background-color:red;
    color:white;
  }
`;
export const EditSong = styled.button`
  align-items: center;
  border-radius: 10px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 20px;
  font-weight: 700;
  padding: 15px 10px;
  margin: 20px;
  margin-top: 30px;
  
  color: white;
  background-color: palevioletred;
`;
export const ArtistHolder = styled.section`
  display: flex;
  flex-direction: row;
  /* &:hover {
    background-color: #ddd;
    color: black;
  } */
  background-color: white;
  justify-content: center;
  margin: 20px;
  p {
    margin-top: 25px;
  }
`;
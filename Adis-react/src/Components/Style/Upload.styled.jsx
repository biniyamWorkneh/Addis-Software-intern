import styled from "styled-components";

export const UploadContainer = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  /* max-width: 20%;
  background-color: rgb(19,89,139); */
  /* margin: auto; */
  /* height: auto;
  text-align: center;
  font-family: arial;
  width: 100%; */
  h5{
    color: white;
    margin-top:1px;
  }
  @media (max-width:786px){
    width: 100%;
    height: 100%;
    max-width: 100%;
    margin-top: 5px;
  }
`;
export const UploadView = styled.img`
  margin: 1em;
  width: 85%;
  border-radius: 50px;
  align-items: center;
`;
export const UploadButton = styled.input`
  align-items: center;
  border-radius: 50px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  padding: 10px 30px;
  margin: 1px;
  color: white;
  background-color: palevioletred;
  @media (max-width:786px){
    margin-bottom: 10px;
  }
`;
export const FileInput = styled.input`
  width: 98%;
  align-items: center;
  border-radius: 10px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  padding: 15px 5px;
  margin-top: 20px;
  color: white;
  background-color: #8aaae5;

@media(max-width:786px){
    width: 98%;
}
`;
export const ArtistInput = styled(FileInput)`
  background-color: black;
  color: white;
  cursor: text;
`
export const ArtistEditInput = styled(ArtistInput)`
background-color: #2BAE66;
  color: white;
width:50px;`
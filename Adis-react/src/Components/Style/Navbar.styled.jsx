import styled from 'styled-components';

export const Header = styled.header`
  background-color:white;
  padding: 1px;
  position: fixed;
  width:100%;
  box-shadow: 0 0 10px rgba(0,0,0,0.6);
  height:40px;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Text = styled.div`
  display: flex;
  align-items: center;
  color:black;
`;

export const Logo = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

export const UploadContainer = styled.div`
  position: relative;
  h5{
    color:black;
  }
`;

export const FileInput = styled.input`
  display: flex;
`;

export const UploadButton = styled.input`
  background-color: #1976d2;
  color:black;
  color: white;
  border: none;
  padding: 10px 16px;
  cursor: pointer;
  border-radius: 4px;
  margin-left: 55%;
  margin-top: -10px;

`;

export const DropdownButton = styled.button`
  background-color: transparent;
  color:black;
  border: none;
  cursor: pointer;
  font-size: 20px;
  margin-right:150px;
  /* margin-top: 10px; */
`;

export const DropdownContent = styled.div`
  display: ${(props) => (props.show ? 'block' : 'none')};
  position: absolute;
  /* top: 100%; */
  left: 0;
  background-color: #f9f9f9;
  /* min-width: 160px; */
  width:100%;
  height:auto;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

export const DropdownItem = styled.div`
  padding: 12px 16px;
  cursor: pointer;
  &:hover {
    background-color: #ddd;
  }
`;

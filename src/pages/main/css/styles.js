import styled from 'styled-components';

export const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserContainer = styled.div`
  display: ${props => props.user};
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const DisplayUser = styled.span`
 position: absolute;
  font-size: 30px;
  cursor: pointer;
    right: 0;
`;

export const SearchContainer = styled.div`
  width: 50vw;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  background-color: #f0f0f0;
  border-radius: 4px;
`;

export const SearchInput = styled.input`
  flex: 1;
  margin-right: 16px;
  padding: 8px;
  border: none;
  border-radius: 4px;
  outline: none;
`;

export const SearchButton = styled.button`
  min-width: fit-content;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export const UsersContainer = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const UserCard = styled.div`
  width: 200px;
  margin: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f8f8f8;
  border-radius: 4px;
  padding: 16px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const UserAvatar = styled.img`
  width: 120px;
  height: 120px;
  margin-bottom: 8px;
  border-radius: 50%;
`;

export const UserName = styled.div`
  text-align: center;
  margin-bottom: 8px;
  font-weight: bold;
`;

export const UserRepoCount = styled.div`
  text-align: center;
`;

export const DetailsContainer = styled.div`
  width: 100%;
  padding: 16px;
`;

export const UserDetails = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
`;

export const UserDetailLabel = styled.div`
  font-weight: bold;
`;

export const PaginationContainer = styled.div`
    display: ${props => props.display};
    margin-top: 10px;
`;

export const BackButton = styled.button`
  margin-bottom: 16px;
  padding: 8px 16px;
    margin-right: 2px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export const ForwardButton = styled.button`
  margin-bottom: 16px;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export const PaginationPageNumberContainer = styled.div`
  display: flex;
  flex: 1;
    justify-content: flex-start;
    flex-wrap: nowrap;
    overflow-x: hidden;
`;

export const PageNumberdButton = styled.button`
  margin-bottom: 16px;
  padding: 8px 16px;
  margin-right: 2px;
  border: none;
  border-radius: 4px;
  background-color: ${props => props.clicked};
  color: #fff;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgb(105 100 102);
  }
`;

export const UserListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserLogin = styled.div`
border: 1px dashed #e2dede;;
  font-weight: bold;
  cursor: pointer;

  &:hover {
  background-color: #e2dede;;
  }
`;

export const SortContainer = styled.div`
display: ${props => props.display};
    flex-direction: column;
    align-items: center;
`;

export const RadioButtonContainer = styled.div`
  display: flex;
    justify-content: center;
    margin-bottom: 20px;
`;

export const ResultContainer = styled.div`
display: ${props => props.display};
  width: 50vw;
`;

export const Input = styled.input`
  cursor: pointer;
`;

export const ErrorDisp = styled.div`
display: ${props => props.display};
font-size: 35px;
    color: red;
    font-weight: bold;
`;


import styled from '@emotion/styled';

export const FriendsList = styled.ul`
  overflow: hidden;
  background-color: inherit;
`;

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;

  padding-left: 10px;
  padding-bottom: 5px;
  padding-top: 5px;

  margin: 5px 0;

  background-color: rgb(243, 246, 249);
  border: 1px solid gray;
  box-shadow: 0 10px 10px -5px rgba(29, 29, 29, 0.774);
`;

export const FriendStatus = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => {
    if (props.isOnline === true) {
      return 'green';
    }
    return 'red';
  }};
  color: transparent;
`;

export const FriendAvatar = styled.img`
  ${props => {
    return `src:${props.src};
    alt:${props.alt};`;
  }}
  height: 48px;
  width: 48px;
  border-radius: 5px;
  overflow: hidden;
`;

export const FriendName = styled.p`
  color: black;
  margin: auto 0;
  font-weight: 700;
`;

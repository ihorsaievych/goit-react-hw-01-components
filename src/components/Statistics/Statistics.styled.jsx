import styled from '@emotion/styled';

export const SectionStatistics = styled.section`
  overflow: hidden;
  background-color: rgb(243, 246, 249);
`;

export const ContainerStatistics = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleH2 = styled.h2`
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: auto;
  margin-bottom: auto;

  color: black;
  text-align: center;
  text-transform: uppercase;
`;

export const StatList = styled.ul`
  display: flex;
  display: flex;
  justify-items: baseline;
  justify-content: space-between;

  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  overflow: hidden;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-color: ${props => {
    if (props.label === '.docx') {
      return 'skyblue';
    }
    if (props.label === '.pdf') {
      return 'slateblue';
    }
    if (props.label === '.mp3') {
      return 'lightcoral';
    }
    if (props.label === '.psd') {
      return 'cadetblue';
    }
    return 'darkgreen';
  }};
`;

export const Label = styled.span`
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: smaller;
  color: #fff;
  padding-top: 5px;
  padding-bottom: 5px;
`;

export const Percentage = styled.span`
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: large;
  color: #fff;
  padding-top: 5px;
  padding-bottom: 5px;
`;

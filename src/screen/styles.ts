import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-left: ${({theme}) => theme.space.default}px;
  padding-right: ${({theme}) => theme.space.default}px;
  padding-bottom: 32px;
  background-color: ${({theme}) => theme.colors.background};
`;
export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;
export const TextTitle = styled.Text`
  font-size: 28px;
  padding: 10px;
  color: ${({theme}) => theme.colors.primary};
`;

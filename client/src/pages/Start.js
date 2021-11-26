import React from 'react';
import SidebarComponent from '../components/SidebarComponent';
import styled from 'styled-components';
import { Container, Button } from '@chakra-ui/react';

const Start = () => {
  return (
    <>
      <SidebarComponent></SidebarComponent>
      <div>Start 페이지</div>

      <MainContainer>
        <LeftContanier>
          <Button textAlign='center' justifyContent='center'>
            {' '}
            버튼
          </Button>

          <p>
            국회의원은 현행범인인 경우를 제외하고는 회기중 국회의 동의없이 체포 또는 구금되지 아니한다. 근로조건의 기준은 인간의 존엄성을 보장하도록 법률로 정한다. 제안된 헌법개정안은 대통령이 20일
            이상의 기간 이를 공고하여야 한다. 대통령은 국무총리·국무위원·행정각부의 장 기타 법률이 정하는 공사의 직을 겸할 수 없다.
          </p>
        </LeftContanier>
        <RightContainer>
          <Container>오른쪽</Container>
        </RightContainer>
      </MainContainer>
    </>
  );
};

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  margin-top: 20px;
  //border: 1px solid #003458;
`;

const LeftContanier = styled.div`
  width: 70%;
  height: 100vh;
  float: left;
  box-sizing: border-box;
  background: #8977ad;
  text-align: center;
  justify-content: center;
  flex-direction: column;
`;

const RightContainer = styled.div`
  width: 30%;
  height: 100vh;
  float: right;
  box-sizing: border-box;
  background: #ece6cc;
`;

export default Start;

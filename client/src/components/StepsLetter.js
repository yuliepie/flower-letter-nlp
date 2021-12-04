import React from 'react';
import { Flex, Box, Center, Breadcrumb, BreadcrumbItem, BreadcrumbLink, CloseButton, VStack, HStack } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router';
import EditContainer from './create/EditContainer';

function StepsLetter() {
  const navigate = useNavigate();

  return (
    <VStack w='100%' h='20vh' pl='7' pr='7'>
      <Flex w='100%' h='35%' align='center' pl='6'>
        {/* 닫기 버튼 */}
        <CloseButton size='2xl'></CloseButton>
      </Flex>
      <Flex bg='gray' fontWeight='600' color='white' w='100%' h='65%' align='center' justify='center' borderRadius='20px'>
        {/* 단계 박스 */}
        <Breadcrumb fontSize='2vw' spacing='17' separator={<ChevronRightIcon color='white' />}>
          <BreadcrumbItem>
            <BreadcrumbLink
              onClick={() => {
                navigate('/create');
              }}>
              편지쓰기
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            x
            <BreadcrumbLink
              onClick={() => {
                navigate('/edit1');
              }}>
              키워드 선택
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink
              onClick={() => {
                navigate('/edit2');
              }}>
              꽃말 선택
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink
              onClick={() => {
                navigate('/edit3');
              }}>
              디자인
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink
              onClick={() => {
                navigate('/edit4');
              }}>
              자유 글쓰기
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink
              onClick={() => {
                navigate('/edit5');
              }}>
              시집검토
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>
    </VStack>
  );
}

export default StepsLetter;

{
  /*
<div>
      <Box p='6' w='100%' h='70'>
        <CloseButton size='3xl' />
      </Box>
      <Center bg='gray' w='100%' h='100'>
        <Breadcrumb fontSize='2xl' spacing='17' separator={<ChevronRightIcon color='white' />}>
          <BreadcrumbItem>
            <BreadcrumbLink
              onClick={() => {
                navigate('/create');
              }}>
              편지쓰기
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>x
            <BreadcrumbLink
              onClick={() => {
                navigate('/edit1');
              }}>
              키워드 선택
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink
              onClick={() => {
                navigate('/edit2');
              }}>
              꽃말 선택
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink
              onClick={() => {
                navigate('/edit3');
              }}>
              디자인
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink
              onClick={() => {
                navigate('/edit4');
              }}>
              자유 글쓰기
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink
              onClick={() => {
                navigate('/edit5');
              }}>
              시집검토
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Center>
    </div>



*/
}

import React from 'react';
import { Box, Center, Breadcrumb, BreadcrumbItem, BreadcrumbLink, CloseButton } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router';

function StepsLetter() {
  const navigate = useNavigate();


  return (
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
  );
}

export default StepsLetter;

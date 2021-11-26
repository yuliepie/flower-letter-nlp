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

          <BreadcrumbItem>
            <BreadcrumbLink
              onClick={() => {
                navigate('/create/edit');
              }}>
              시집편집
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink
              onClick={() => {
                navigate('/checkout');
              }}>
              결제하기
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Center>
    </div>
  );
}

export default StepsLetter;

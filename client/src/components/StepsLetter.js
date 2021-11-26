import React from 'react';
import { Box, Center, Breadcrumb, BreadcrumbItem, BreadcrumbLink, CloseButton } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

function StepsLetter() {
  return (
    <div>
      <Box p='6' w='100%' h='70'>
        <CloseButton size='3xl' />
      </Box>
      <Center bg='gray' w='100%' h='100'>
        <Breadcrumb fontSize='2xl' spacing='17' separator={<ChevronRightIcon color='white' />}>
          <BreadcrumbItem>
            <BreadcrumbLink href='#'>편지쓰기</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href='#'>시집편집</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href='#'>결제하기</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Center>
    </div>
  );
}

export default StepsLetter;

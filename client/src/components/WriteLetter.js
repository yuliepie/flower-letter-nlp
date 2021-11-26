import React from 'react';
import { Box, Center, Breadcrumb, BreadcrumbItem, BreadcrumbLink, CloseButton, Flex, Stack, Input, Button, Textarea } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

function WriteLetter() {
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
            <BreadcrumbLink href='#'>각종단계</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href='#'>시집검토</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Center>

      <Flex>
        <Box p='4' w='70%' h='730'>
          <Stack p='9' spacing={3}>
            <Input placeholder='편지 제목' h='48px' size='sm' borderColor='black' />
            <Textarea h='540px' borderColor='black' placeholder='편지작성' />
          </Stack>
        </Box>
        <Box p='5' w='30%' h='730'>
          <Box p='5' w='100%' h='80%' bg='white'>
            <p>정당의 목적이나 활동이 민주적 기본질서에 위배될 때에는 정부는 헌법재판소에 그 해산을 제소할 수 있고, 정당은 헌법재판소의 심판에 의하여 해산된다.</p>
            <p>정당의 목적이나 활동이 민주적 기본질서에 위배될 때에는 정부는 헌법재판소에 그 해산을 제소할 수 있고, 정당은 헌법재판소의 심판에 의하여 해산된다.</p>
          </Box>
          <Center w='100%' h='20%'>
            <Button w='80%' colorScheme='blue'>
              다음으로
            </Button>
          </Center>
        </Box>
      </Flex>
    </div>
  );
}

export default WriteLetter;

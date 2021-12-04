import React from 'react';
import { Flex, Center, Box, Button, Image, PortalManager, Spacer } from '@chakra-ui/react';
import PoemContainer from './PoemContainer';
import { useNavigate } from 'react-router';

export default function EditContainer({ prevLink, nextLink }) {
  const navigate = useNavigate();

  const pages_contents = { 1: '/img/flowerPoem.png', 2: '/img/lavenderBook.png', 3: '/img/mainPageFirstImg.png', 4: '/img/mainpageSecondImg.png', 5: '/img/mainpageThirdImg.png' };

  return (
    <Flex pl='6' pr='6' h='10%' w='100%'>
      <Box>
        <Button
          w='30vh'
          h='7vh'
          bg='skyblue'
          color='white'
          fontSize='3vh'
          onClick={() => {
            navigate(prevLink);
          }}>
          이전 단계
        </Button>
      </Box>
      <Spacer />
      <Box>
        <Button
          w='30vh'
          h='7vh'
          bg='skyblue'
          color='white'
          fontSize='3vh'
          onClick={() => {
            navigate(nextLink);
          }}>
          다음 단계
        </Button>
      </Box>
    </Flex>
  );
}

{
  /*

이전코드
<Flex>
      <Center p='4' w='60%' h='730' bg='rgba(229, 229, 229, 1)'>
        <Center boxSize='sm'>
          <Image src='/img/flowerPoem.png' />
          <Button
            w='90%'
            bg='skyblue'
            onClick={() => {
              navigate(prevLink);
            }}>
            이전 단계
          </Button>
        </Center>
      </Center>

      <Box p='4' w='40%' h='730'>
        <Box p='5' w='100%' h='80%' bg='white'>
          <PoemContainer />
        </Box>
        <Center w='100%' h='20%'>
          <Button
            w='90%'
            bg='skyblue'
            onClick={() => {
              navigate(nextLink);
            }}>
            다음 단계
          </Button>
        </Center>
      </Box>
    </Flex>

*/
}

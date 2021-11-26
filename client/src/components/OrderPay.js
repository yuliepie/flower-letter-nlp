import React from 'react';
import { Flex, Box, CloseButton, Input, Center, Button } from '@chakra-ui/react';

function OrderPay() {
  return (
    <div>
      <Flex p='2' h='70' justifyContent='center' alignItems='center' borderBottom='1px'>
        <Box p='4' w='90%'>
          결제하기
        </Box>
        <Box p='1' w='10%'>
          <CloseButton size='3xl' />
        </Box>
      </Flex>

      <Flex>
        <Box p='4' w='67%' h='730'>
          <Box w='100%' h='10%' textAlign='center'>
            주문자정보
          </Box>
          <Box p='2' w='100%' h='25%' border='1px' borderColor='black'>
            <Input w='80%' mb='3' borderColor='black' placeholder='이름' />
            <Input w='80%' mb='3' borderColor='black' placeholder='전화번호' />
            <Input w='80%' mb='3' borderColor='black' placeholder='이메일' />
          </Box>
          <Box w='100%' h='10%' textAlign='center'>
            배송정보
          </Box>
          <Box p='2' w='100%' h='55%' border='1px' borderColor='black'>
            <Input w='80%' mb='3' borderColor='black' placeholder='이름' />
            <Input w='80%' mb='3' borderColor='black' placeholder='전화번호' />
            <Input w='80%' mb='3' borderColor='black' placeholder='이메일' />
            <Input w='80%' mb='3' borderColor='black' placeholder='이름' />
            <Input w='80%' mb='3' borderColor='black' placeholder='전화번호' />
          </Box>
        </Box>
        <Box p='4' w='33%' h='730'>
          <Center p='2' w='100%' h='10%'>
            결제정보
          </Center>
          <Box p='2' w='100%' h='40%' border='1px' borderColor='black'>
            <Box p='2' w='100%' h='80%'>
              시집이름 등 정보
            </Box>
            <Box p='2' w='100%' h='20%'>
              가격 정보
            </Box>
          </Box>
          <Center p='2' w='100%' h='10%'>
            결제수단선택
          </Center>
          <Flex p='2' w='100%' h='30%' justifyContent='center' border='1px' borderColor='black'>
            <Button colorScheme='blue' m='1' w='20%' fontSize='5px'>
              네이버페이
            </Button>
            <Button colorScheme='blue' m='1' w='20%' fontSize='5px'>
              카카오페이
            </Button>
            <Button colorScheme='blue' m='1' w='20%' fontSize='5px'>
              카드결제
            </Button>
            <Button colorScheme='blue' m='1' w='20%' fontSize='5px'>
              무통장입금
            </Button>
          </Flex>
          <Flex p='2' w='100%' h='10%' justifyContent='center' alignItems='center'>
            <Button colorScheme='blue' m='1' w='90%'>
              결제하기
            </Button>
          </Flex>
        </Box>
      </Flex>
    </div>
  );
}
export default OrderPay;

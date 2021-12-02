import React from "react";
import {
  Flex,
  Box,
  CloseButton,
  Input,
  Center,
  Button,
  Text
} from "@chakra-ui/react";
import {  useNavigate } from "react-router";




function OrderPay({history}) {
  
  const navigate = useNavigate()
  
  const orderInfo = '김서정님 주문 완료 되었습니다.'

  const onClickPayButton = async()=>{
    navigate('/checkout')
  }


  return (
    <div margin='25px'>
      <Flex
        p="2"
        h="70"
        justifyContent="center"
        alignItems="center"
        borderBottom="1px"
        marginTop='50px'
        marginLeft='100px'
        
      >
        <Box p="4" w="90%">
          <Text fontSize='4xl' fontWeight='bold'>결제하기</Text>
        </Box>
        <Box p="1" w="10%">
          <CloseButton size="3xl" />
        </Box>
      </Flex>

      <Flex marginLeft='100px' marginRight='100px'>
        <Box p="4" w="67%" h="full">
          <Box w="100%" h="10%" textAlign="left">
            <Text fontSize='2xl' fontWeight='bold'>1. 주문자 정보</Text>
          </Box>
          <Box p="2" w="100%" h="25%" border="1px" borderColor="black" >
            <Input w="80%" mb="3" borderColor="black" placeholder="이름" />
            <Input w="80%" mb="3" borderColor="black" placeholder="전화번호" />
            <Input w="80%" mb="3" borderColor="black" placeholder="이메일" />
          </Box>
          <Box w="100%" h="10%" textAlign="left" marginTop='15px'>
            <Text fontSize='2xl' fontWeight='bold'>2. 배송 정보</Text>
          </Box>
          <Box p="2" w="100%" h="55%" border="1px" borderColor="black">
            <Input w="80%" mb="3" borderColor="black" placeholder="이름" />
            <Input w="80%" mb="3" borderColor="black" placeholder="전화번호" />
            <Input w="80%" mb="3" borderColor="black" placeholder="이메일" />
            <Input w="80%" mb="3" borderColor="black" placeholder="이름" />
            <Input w="80%" mb="3" borderColor="black" placeholder="전화번호" />
          </Box>

        </Box>
        <Box p="4" w="33%" h="730">
          <Center p="2" w="100%" h="10%">
            결제정보
          </Center>
          <Box p="2" w="100%" h="40%" border="1px" borderColor="black">
            <Box p="2" w="100%" h="80%">
              시집이름 등 정보
            </Box>
            <Box p="2" w="100%" h="20%">
              가격 정보
            </Box>
          </Box>
          <Center p="2" w="100%" h="10%">
            결제수단선택
          </Center>
          <Flex
            p="2"
            w="100%"
            h="30%"
            justifyContent="center"
            border="1px"
            borderColor="black"
          >
            <Button colorScheme="blue" m="1" w="20%" fontSize="1rem">
              네이버페이
            </Button>
            <Button colorScheme="blue" m="1" w="20%" fontSize="1rem">
              카카오페이
            </Button>
            <Button colorScheme="blue" m="1" w="20%" fontSize="1rem">
              카드결제
            </Button>
            <Button colorScheme="blue" m="1" w="20%" fontSize="1rem">
              무통장입금
            </Button>
          </Flex>
          <Flex
            p="2"
            w="100%"
            h="10%"
            justifyContent="center"
            alignItems="center"
          >
            <Button colorScheme="blue" m="1" w="90%" onClick={onClickPayButton}>
              결제하기
            </Button>
          </Flex>
        </Box>
      </Flex>
    </div>
  );
}
export default OrderPay;

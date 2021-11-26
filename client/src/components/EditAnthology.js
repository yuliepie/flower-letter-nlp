import React from 'react';
import { Box, Center, Flex, Stack, Button, Popover, PopoverTrigger, Portal, PopoverContent, PopoverArrow, PopoverHeader, PopoverCloseButton, PopoverBody } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import StepsLetter from './StepsLetter';
import { useNavigate } from 'react-router';

// create의 세 번째인 시집을 편집하는 페이지입니다.
function EditAnthology() {
  const navigate = useNavigate();

  return (
    <div>
      {/* 상단바 */}
      <StepsLetter></StepsLetter>
      <Flex>
        <Box p='4' w='60%' h='730' bg='rgba(229, 229, 229, 1)'>
          시집이미지
          <Stack p='9' spacing={3}></Stack>
        </Box>
        {/* 시 예시 */}
        <Box p='4' w='40%' h='730'>
          <Box p='5' w='100%' h='80%' bg='white'>
            <Popover>
              <PopoverTrigger>
                <Button bg='skyblue' w='100%'>
                  1. 이별 - 도종환
                </Button>
              </PopoverTrigger>
              <Portal>
                <PopoverContent w='100%'>
                  <PopoverArrow />
                  <PopoverHeader>1. 이별 - 도종환</PopoverHeader>
                  <PopoverCloseButton />
                  <PopoverBody textAlign='center'>
                    <p>당신이 처음 내 곁을 떠났을 떄</p>
                    <p>나는 이것이 이별이라 생각지 않았습니다</p>
                    <p>당신이 내 안에 있고</p>
                    <p>나 또한 언제나 당신이 돌아오는 길을 향해 있었으므로</p>
                    <p>나는 헤어지는 것이라 생각지 않았습니다</p>
                    <p>그러나 이렇게 자꾸 함께 있지 못하는 시간이 길어지면서</p>
                    <p>나는 이것이 이별이 아닌가 생각합니다</p>
                    <Button colorScheme='blue'>수정하기</Button>
                  </PopoverBody>
                </PopoverContent>
              </Portal>
            </Popover>
          </Box>
          <Center w='100%' h='20%'>
            <Button
              w='90%'
              bg='skyblue'
              onClick={() => {
                navigate('/checkout');
              }}>
              결제하러가기
            </Button>
          </Center>
        </Box>
      </Flex>
    </div>
  );
}

export default EditAnthology;

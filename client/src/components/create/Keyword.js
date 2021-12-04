import React from 'react';
import StepsLetter from '../StepsLetter';
import { Flex, HStack } from '@chakra-ui/react';

export default function Keyword() {
  return (
    <div>
      <StepsLetter></StepsLetter>
      <HStack h='70vh' p='2' ml='5' mr='5' align='center' justify='center'>
        {/* 왼쪽, 오른쪽 박스를 묶는 박스 */}
        <Flex w='50%' h='100%' border='1px' borderRadius='10px' mr='1'>
          {/* 왼쪽 박스 */}
        </Flex>
        <Flex w='50%' h='100%' border='1px' borderRadius='10px' ml='1'>
          {/* 오른쪽 박스 */}
        </Flex>
      </HStack>
    </div>
  );
}

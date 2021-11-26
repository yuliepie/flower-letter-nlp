import React from 'react';
import { Box, Flex, Spinner } from '@chakra-ui/react';

function Loading() {
  return (
    <div>
      <Box h='100vh' w='100%' position='relative'>
        <Flex justifyContent='center' alignItems='center' h='100vh'>
          <Spinner size='xl' />
        </Flex>
      </Box>
    </div>
  );
}
export default Loading;

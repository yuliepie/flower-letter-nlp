import React, { useEffect } from 'react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import StepsLetter from './StepsLetter';
import { useNavigate, useParams } from 'react-router';
import { useSelector } from 'react-redux';
import PoemContainer from './create/PoemContainer';
import EditContainer from './create/EditContainer';
import { Button, HStack, Flex, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Box } from '@chakra-ui/react';

function EditAnthology() {
  const navigate = useNavigate();

  const { title, content } = useSelector((state) => ({
    title: state.letter_title,
    content: state.letter_content,
  }));

  return (
    <div>
      <StepsLetter></StepsLetter>
      <HStack h='70vh' p='2' ml='5' mr='5' align='center' justify='center'>
        {/* 왼쪽, 오른쪽 박스를 묶는 박스 */}
        <Flex w='60%' h='100%' border='1px' borderRadius='10px' mr='1' p='2'>
          {/* 왼쪽 박스 */}
          키워드 선택 단계
        </Flex>
        <Flex justify='center' w='40%' h='100%' border='1px' borderRadius='10px' ml='1' p='5'>
          {/* 오른쪽 박스 - 키워드 비율 조절 */}
          <Box m='2' p='3' w='100%' h='40%' align='center'>
            <Slider aria-label='slider-ex-3' defaultValue={35} orientation='vertical' minH='32' mr='4' ml='4'>
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </Box>
        </Flex>
      </HStack>
      <EditContainer prevLink={'/create'} nextLink={'/edit2'} />
    </div>
  );
}

export default EditAnthology;

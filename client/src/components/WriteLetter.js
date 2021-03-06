import React, { useEffect, useState } from 'react';
import {
  Box,
  Center,
  Spacer,
  Flex,
  Stack,
  Input,
  Button,
  Textarea,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react';
import StepsLetter from './StepsLetter';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector, batch } from 'react-redux';
import axios from 'axios';
import PreviewImageUrls from './PreviewImageUrls';
import CreatePageEx from './CreatePageEx';

function WriteLetter({ history }) {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { letter_content, color } = useSelector((state) => ({
    letter_content: state.letter_content,
    color: state.usercolor,
  }));

  const [inputs, setInputs] = useState({
    content: letter_content,
  });

  const { title, content } = inputs;

  const clickNextButton = () => {
    dispatch({ type: 'SAVE_LETTER', content });
    sendLetter();

    navigate('/loading');
  };

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const sendLetter = async () => {
    await axios({
      method: 'post',
      url: `${process.env.REACT_APP_API_URL}/results`,
      data: {
        letter_content: content,
      },
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => {
        console.log('통신 성공', response);
        console.log('꽃말 데이터', response.data.flowers);
        console.log('시 데이터', response.data.poems);

        const flowersList = response.data.flowers;
        const poems = response.data.poems;
        const keywords = response.data.keywords;

        batch(() => {
          dispatch({ type: 'SAVE_FLOWER_DATA', flowersList });
          dispatch({ type: 'SAVE_POEMS', poems });
          dispatch({ type: 'SAVE_KEYWORDS', keywords });
        });
      })
      .catch((response) => {
        alert('error');
      });
  };

  const [passed, setPassed] = useState(false);

  const checkLetter = () => {
    if (content.length >= 50) {
      setPassed(true);
    } else {
      setPassed(false);
    }
  };

  useEffect(() => {
    checkLetter();
  }, [content]);

  return (
    <div>
      <VStack h="100vh" bgGradient={'radial(white, #FDF5E6, #FBEBCD, #f8dfb1)'}>
        <StepsLetter></StepsLetter>
        <CreatePageEx
          exText={'소중한 사람을 위한 편지를 써보세요!'}
        ></CreatePageEx>

        <HStack
          h="80vh"
          p="2"
          w="100%"
          ml="5"
          mr="5"
          mb="2"
          align="center"
          justify="center"
        >
          <Flex w="50%" h="100%" borderRadius="10px" mr="1" mt="5">
            {/* 왼쪽 박스 */}
            <Box p="6" w="100%">
              <Stack spacing={3} h="100%">
                <Textarea
                  border={'none'}
                  h="100%"
                  backgroundColor="white"
                  _focus={{ borderColor: '#613659' }}
                  _hover={{ borderColor: '#613659' }}
                  borderColor="black"
                  placeholder="편지작성"
                  boxShadow={'1px 1px 1px rgba(120,120,120,0.2)'}
                  resize={'none'}
                  fontFamily={'Sungsil'}
                  fontSize={'1.2rem'}
                  onChange={handleChange}
                  name="content"
                  value={content}
                />
              </Stack>
            </Box>
          </Flex>
        </HStack>

        <Center w="100%" h="20%">
          <Spacer />

          <Button
            borderRadius={'15px'}
            w="25vh"
            h="7vh"
            fontFamily={'EliceBold'}
            _hover={{ bg: '#A49393', color: 'white' }}
            bg="white"
            borderColor="#A49393"
            color="#A49393"
            mr="7"
            mb="2"
            fontSize="3vh"
            disabled={passed ? false : true}
            onClick={clickNextButton}
          >
            다음으로
          </Button>
        </Center>
      </VStack>
    </div>
  );
}

export default WriteLetter;

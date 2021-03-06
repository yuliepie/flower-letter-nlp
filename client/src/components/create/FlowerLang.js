import React, { useEffect, useState } from 'react';
import StepsLetter from '../StepsLetter';
import Preview from '../Preview';

import { Flex, HStack, Box, Button, Spacer, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import CreatePageEx from '../CreatePageEx';
import { TriangleUpIcon } from '@chakra-ui/icons';
import styled from 'styled-components';

const RightBox = styled.div`
  font-family: 'Sungsil';
  font-size: 1.2rem;
  width: 330px;
  min-height: 420px;
  height: 55vh;
  overflow: auto;
  padding: 40px;
  padding-top: 20px;
  border: 10px solid #fdfdfd;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #fdfdfd;
  box-shadow: 1px 1px 1px rgba(120, 120, 120, 0.2);
  .buttons {
    cursor: pointer;
    background-color: #d8bfd7;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border-radius: 5px;
  }
  .buttons:hover {
    border: 3px solid black;
    font-weight: bold;
  }
  .selected {
    border: 3px solid black;
    font-weight: bold;
  }
`;

export default function FlowerLang() {
  const [checked, setChecked] = useState(false);
  const [passed, setPassed] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [currentKeyword, setCurrentKeyword] = useState();

  const { flowersList, font, color, userflower } = useSelector((state) => ({
    flowersList: state.flowersList,
    font: state.userfont,
    color: state.usercolor,
    userflower: state.user_flower_url,
  }));
  const [currentFlower, setCurrentFlower] = useState(userflower);

  const saveFlower = (user_flower_id, user_flower_symbol, user_flower_url) => {
    dispatch({
      type: 'SAVE_USER_FLOWER',
      user_flower_id,
      user_flower_symbol,
      user_flower_url,
    });
  };

  const flowerList = flowersList.map((content, index) => (
    <div
      key={index}
      className={
        currentKeyword === content['_id'] ? 'buttons selected' : 'buttons'
      }
      onClick={() => {
        let flowerURL = 'rose';
        if (content['flower'].includes('??????')) {
          flowerURL = 'rose';
        } else if (content['flower'].includes('??????')) {
          flowerURL = 'tulip';
        } else if (content['flower'].includes('??????')) {
          flowerURL = 'cherryblossoms';
        } else if (
          content['flower'].includes('??????') ||
          content['image_url'] === 'white'
        ) {
          flowerURL = 'lily';
        } else if (
          content['flower'].includes('?????????') ||
          content['image_url'] === 'purple'
        ) {
          flowerURL = 'lavender';
        } else if (content['flower'].includes('??????')) {
          flowerURL = 'lotus';
        } else if (
          content['flower'].includes('????????????') ||
          content['image_url'] === 'yellow'
        ) {
          flowerURL = 'sunflower';
        } else if (content['image_url'] === 'blue') {
          flowerURL = 'blueflower';
        } else if (content['image_url'] === 'red') {
          flowerURL = content['_id'] % 2 === 0 ? 'rose' : 'tulip';
        } else if (content['image_url'] === 'pink') {
          flowerURL = content['_id'] % 2 === 0 ? 'cherryblossoms' : 'lotus';
        }
        saveFlower(
          content['_id'],
          `${content['flower']}... ${content['symbol']}`,
          flowerURL
        );
        setCurrentFlower(flowerURL);
        setChecked(true);
        setCurrentKeyword(content['_id']);
      }}
    >
      {content['flower']}-{content['symbol']}
    </div>
  ));

  const handleCheck = () => {
    if (checked) {
      setPassed(true);
    }
  };

  useEffect(() => {
    handleCheck();
  }, [checked]);

  return (
    <div>
      <VStack h="100vh" bgGradient={'radial(white, #FDF5E6, #FCF0D9, #EBD2C0)'}>
        <StepsLetter />
        <CreatePageEx
          exText={'????????? ?????? ????????? ??????????????????!'}
        ></CreatePageEx>

        <HStack
          h="80vh"
          w="100%"
          p="2"
          ml="5"
          mr="5"
          align="center"
          justify="center"
        >
          {/* ??????, ????????? ????????? ?????? ?????? */}
          <Flex
            w="47%"
            h="100%"
            borderRadius="10px"
            mr="1"
            p="2"
            align="center"
            justify="center"
          >
            {/* ?????? ?????? */}

            <Preview
              userfont={font}
              usercolor={color}
              userflower={currentFlower}
            />
          </Flex>
          <Flex
            justify="center"
            w="27%"
            h="100%"
            borderRadius="10px"
            ml="1"
            p="4"
            align={'center'}
          >
            {/* ????????? ?????? */}
            <RightBox>{flowerList}</RightBox>
          </Flex>
        </HStack>
        <Flex pl="6" pr="6" h="10%" w="100%">
          <Box>
            <Button
              borderRadius={'15px'}
              w="25vh"
              h="7vh"
              fontFamily={'EliceBold'}
              _hover={{ bg: '#A49393', color: 'white' }}
              bg="white"
              borderColor="#A49393"
              color="#A49393"
              fontSize="3vh"
              onClick={() => {
                navigate('/create/keyword');
              }}
            >
              ?????? ??????
            </Button>
          </Box>
          <Spacer />
          <Box>
            <Button
              borderRadius={'15px'}
              w="25vh"
              h="7vh"
              fontFamily={'EliceBold'}
              _hover={{ bg: '#A49393', color: 'white' }}
              bg="white"
              borderColor="#A49393"
              color="#A49393"
              fontSize="3vh"
              disabled={passed ? false : true}
              onClick={() => {
                navigate('/create/bookcover');
              }}
            >
              ?????? ??????
            </Button>
          </Box>
        </Flex>
      </VStack>
    </div>
  );
}

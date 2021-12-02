import React,{useState} from 'react';
import { Box, Center, Flex, Stack, Input, Button, Textarea } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import StepsLetter from './StepsLetter';
import EditAnthology from '../components/EditAnthology';
import { useNavigate } from 'react-router';
import {useDispatch} from 'react-redux';


function WriteLetter({ history }) {
  const navigate = useNavigate();

  const dispatch = useDispatch()

  const [inputs, setInputs] = useState({
    title:'',
    content:''
  })

  const {title,content} = inputs

  const clickNextButton = ()=>{
    
    dispatch({type:"SAVE_LETTER",title,content})
    navigate("/create/edit")

  }

  const handleChange = (e) =>{
    setInputs({
      ...inputs,
      [e.target.name] : e.target.value
    })
  }
 
  return (
    <div>
      
      <StepsLetter></StepsLetter>

      <Flex>
        <Box p='4' w='70%' h='730'>
          <Stack p='9' spacing={3}>
            <Input placeholder='편지 제목' h='48px' size='sm' borderColor='black' onChange={handleChange} name='title' value={title}/>
            <Textarea h='540px' borderColor='black' placeholder='편지작성' onChange={handleChange} name='content' value={content}/>
          </Stack>
        </Box>
        <Box p='5' w='30%' h='730'>
          <Box p='5' w='100%' h='80%' bg='white'>
            <p>정당의 목적이나 활동이 민주적 기본질서에 위배될 때에는 정부는 헌법재판소에 그 해산을 제소할 수 있고, 정당은 헌법재판소의 심판에 의하여 해산된다.</p>
            <p>정당의 목적이나 활동이 민주적 기본질서에 위배될 때에는 정부는 헌법재판소에 그 해산을 제소할 수 있고, 정당은 헌법재판소의 심판에 의하여 해산된다.</p>
          </Box>
          <Center w='100%' h='20%'>
            <Button
              w='90%'
              bg='skyblue'
              onClick={clickNextButton} >
              다음으로
            </Button>
          </Center>
        </Box>
      </Flex> 
    </div>
  );
}

export default WriteLetter;

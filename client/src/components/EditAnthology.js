import React, { useEffect } from "react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import StepsLetter from "./StepsLetter";
import { useNavigate,useParams } from "react-router";
import {useSelector} from 'react-redux';
import PoemContainer from "./create/PoemContainer";
import EditContainer from "./create/EditContainer";
import {Button} from '@chakra-ui/react';

// create의 세 번째인 시집을 편집하는 페이지입니다.
function EditAnthology() {
  const navigate = useNavigate();


  const { title, content } = useSelector((state) => ({
    title: state.letter_title,
    content: state.letter_content,
  }));


  return (
    <div>
      <StepsLetter></StepsLetter>
      <EditContainer prevLink={'/create'} nextLink={'/edit2'}/>
    </div>
  );
}

export default EditAnthology;

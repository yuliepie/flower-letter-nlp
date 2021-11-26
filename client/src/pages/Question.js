import React from 'react';
import SidebarComponent from '../components/SidebarComponent';
import { Container } from "@chakra-ui/react"
import { Text } from "@chakra-ui/react"
import { List, ListItem, ListIcon, UnorderedList } from "@chakra-ui/react"
import {ArrowRightIcon} from '@chakra-ui/icons';

const Question = ({history})=>{
    return(
        <>
            <SidebarComponent></SidebarComponent>               
            <Container>
                <Text fontSize="5xl">FAQ</Text>
                <br/>
                
                <List spacing={3}>
                    <ListItem fontSize='2xl'>
                      <ListIcon as={ArrowRightIcon} color="green.500" />
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit
                    </ListItem>
                    <ListItem fontSize='2xl'>
                      <ListIcon as={ArrowRightIcon} color="green.500" />
                      Assumenda, quia temporibus eveniet a libero incidunt suscipit
                    </ListItem>
                    <ListItem fontSize='2xl'>
                      <ListIcon as={ArrowRightIcon} color="green.500" />
                      Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                    </ListItem>

                    <ListItem fontSize='2xl'>
                      <ListIcon as={ArrowRightIcon} color="green.500" />
                      Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                    </ListItem>
                </List>
            </Container>
            
        </>

    );
}
export default Question;
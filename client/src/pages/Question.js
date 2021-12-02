import React from 'react';
import SidebarComponent from '../components/SidebarComponent';
import { Container } from "@chakra-ui/react"
import { Text } from "@chakra-ui/react"
import { List, ListItem, ListIcon, UnorderedList,Flex, Box } from "@chakra-ui/react"
import {ArrowRightIcon} from '@chakra-ui/icons';
import WithBackgroundImage from '../components/WithBackgroundImage';

const Question = ({history})=>{
    return(
        <div style={{height:'100vh', overflow:'auto'}}>
            <SidebarComponent></SidebarComponent>      
            <WithBackgroundImage
              backgroundcolor={"#613659"}
              text={"Frequently Asked Question"}
            />   
            <Box justifyContent='center' textAlign='center' h='full' >       
                <List spacing={3} justifyContent='center' textAlign='center' >
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
            
           
            </Box>

            
        </div>

    );
}
export default Question;
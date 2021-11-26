import { Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import React from 'react';
import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router';

function SidebarComponent() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const navigate = useNavigate();

  return (
    <>
      <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
        Open
      </Button>
      <Drawer isOpen={isOpen} placement='left' onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>꽃편지</DrawerHeader>

          <DrawerBody flexDirection='column' justifyContent='space-between'>
            <br />
            <Button
              onClick={() => {
                navigate('/about');
              }}>
              About us
            </Button>
            <br />
            <Button
              onClick={() => {
                navigate('/start');
              }}>
              시집 만들러
            </Button>
            <br />
            <Button
              onClick={() => {
                navigate('/question');
              }}>
              문의 하기
            </Button>
            <br />
            <Button
              onClick={() => {
                navigate('/orders');
              }}>
              주문 확인
            </Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
export default SidebarComponent;

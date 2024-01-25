import React from 'react';
import { useNotification } from '../context/NotificationContext';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Button, 
    Box
} from '@chakra-ui/react';

const NotificationModal = () => {
    const { notification, hideNotification } = useNotification();

    // If there's no notification, don't render the modal
    if (!notification) return null;

    return (
        <Modal isOpen={!!notification} onClose={hideNotification}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{notification.title || 'Notification'}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    {notification.message}
                </ModalBody>
                <ModalFooter>
                    {/* render multiple extra buttons if needed */}
                    {Array.isArray(notification.buttons) 
                    ? notification.buttons.map((button, index) => (
                        <Box key={index} mr={5}>
                            {button}
                        </Box>
                    )) 
                    : <Box mr={3}>{notification.buttons}</Box>}
                    <Button colorScheme="blue" mr={3} onClick={hideNotification}>
                        Close
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default NotificationModal;
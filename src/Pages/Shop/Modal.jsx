import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
const ModalComponent = ({isOpen,onClose}) => {
 
  return (
    <>
      <div>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay
            bg="blackAlpha.300"
            backdropFilter="blur(10px) hue-rotate(90deg)"
          />
          <ModalContent>
            <ModalHeader className="text-base/7 font-medium text-zinc-900">
              Payment successful
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <p className="mt-2 text-sm/6 text-zinc-500">
                Your payment has been successfully submitted. We’ve sent you an
                email with all of the details of your order.
              </p>
            </ModalBody>

            <ModalFooter>
              <Button mr={3} onClick={onClose} colorScheme="teal">
                Got it, thanks!
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </>
  );
};

export default ModalComponent;

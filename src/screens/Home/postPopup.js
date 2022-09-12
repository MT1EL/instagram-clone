import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Input,
} from "@chakra-ui/react";
import { auth, db } from "../../firebase";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  serverTimestamp,
} from "firebase/firestore";
const PostPopup = ({ isOpen, onClose }) => {
  const [image, setImage] = useState();
  const [description, setDescription] = useState();
  const handleToAddTask = async () => {
    const user = auth.currentUser;
    const collectionRef = collection(db, "posts");
    const docRef = doc(db, "users", user.uid);
    try {
      const res = await getDoc(docRef);
      return await addDoc(collectionRef, {
        image: image,
        description: description ? description : "",
        likes: [],
        user: res.data(),
        comments: [],
        createdAt: serverTimestamp(),
      });
    } catch (e) {
      return console.log(e);
    }
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <Input
              placeholder="image link"
              onChange={(e) => setImage(e.target.value)}
            />
            <Input
              placeholder="description"
              onChange={(e) => setDescription(e.target.value)}
            />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost" onClick={handleToAddTask}>
              post
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default PostPopup;

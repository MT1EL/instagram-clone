import React, { useCallback, useState } from "react";
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
  Img,
} from "@chakra-ui/react";
import { auth, db, storage } from "../../firebase";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useDropzone } from "react-dropzone";
import { async } from "@firebase/util";
const PostPopup = ({ isOpen, onClose }) => {
  const [postsLength, setPostslength] = useState(0);
  const [image, setImage] = useState();
  const [description, setDescription] = useState();
  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState();
  const handleToAddTask = async () => {
    const user = auth.currentUser;
    const collectionRef = collection(db, "posts");
    const docRef = doc(db, "users", user.uid);

    try {
      const res = await getDoc(docRef);
      onClose();
      return await addDoc(collectionRef, {
        image: url,
        description: description ? description : false,
        likes: [],
        user: res.data(),
        comments: [],
        createdAt: serverTimestamp(),
      });
    } catch (e) {
      onClose();
      return console.log(e);
    }
  };

  const onDrop = useCallback((acceptedFiles) => {
    const collectionRef = collection(db, "posts");
    const posts = query(collectionRef, orderBy("createdAt"));

    getDocs(posts)
      .then((res) => setPostslength(res.docs.length))
      .catch((e) => console.log(e));

    const imageRef = ref(storage, `post${postsLength}`);
    const uploadTask = uploadBytesResumable(imageRef, acceptedFiles[0]);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(prog);
        // Don't fetch downloadURL here, just track progress
      },
      (err) => console.log(err),
      () => {
        // Get download URL here
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setUrl(url);
          console.log(url);
        });
      }
    );
  }, []);

  console.log(url);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [".png", ".jpg"] },
    maxFiles: 1,
    multiple: false,
  });

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody {...getRootProps()} mt="8">
          <Input
            {...getInputProps}
            h="400px"
            display={url ? "none" : "block"}
          />
          <Img src={url ? url : ""} alt="url" />
        </ModalBody>
        <ModalFooter>
          <Input
            placeholder="description"
            onChange={(e) => setDescription(e.target.value)}
          />
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant="ghost" onClick={handleToAddTask}>
            post
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
export default PostPopup;

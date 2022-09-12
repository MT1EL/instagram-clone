import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import PostHeader from "./postHeader";
import PostBody from "./postBody";
import AddComment from "./addComment";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";

import { auth, db } from "../../firebase";
function Post() {
  const [data, setData] = useState([]);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const collectionRef = collection(db, "posts");
    const posts = query(collectionRef, orderBy("createdAt"));

    const user = auth.currentUser.uid;
    const docRef = doc(db, "users", user);
    getDoc(docRef)
      .then((res) => setUser(res.data()))
      .catch((e) => console.log(e));

    const unsubscribe = onSnapshot(posts, (postSnapshot) => {
      getDocs(posts)
        .then((res) => setData(res.docs))
        .catch((e) => console.log(e));
    });

    return unsubscribe;
  }, []);

  const toMap = data?.slice().reverse();
  return (
    <Box maxW="614px">
      {toMap?.map((doc) => (
        <Box key={doc.data().image}>
          <PostHeader name={doc.data().user?.displayName} />
          <PostBody
            id={doc.id}
            imageUrl={doc.data().image}
            description={doc.data().description}
            likes={doc.data().likes}
            comments={doc.data().comments}
            name={doc.data().user?.displayName}
          />
          <AddComment comments={doc.data().comments} id={doc.id} user={user} />
        </Box>
      ))}
    </Box>
  );
}

export default Post;

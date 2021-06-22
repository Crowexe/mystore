import Loading from "./Loading";
import { SyntheticEvent, useState } from "react";
import { useUser } from "../context/user";
import { firebase, firestore } from "../services/firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";

interface IPersonal {
    id: string,
    udi: string,
    photoURL: string,
    displayName: string,
    createAt: firebase.firestore.Timestamp
}

const messagesRef = firestore.collection("general");
const messagesQuery = messagesRef.orderBy("createdAt", "asc").limit(100);

const General = () => {
    const {  user } = useUser();
    const [messages, loading] = useCollectionData<IPersonal>(
        messagesQuery, 
        { idField: "id" }
    );
}
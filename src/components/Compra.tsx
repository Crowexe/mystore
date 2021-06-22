import Loading from "./Loading";
import { SyntheticEvent, useState } from "react";
import { useUser } from "../context/user";
import { firebase, firestore } from "../services/firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";

const Compra = () => {

	return (
		<>
			<h1>Compras</h1>
		</>
	);
}

export default Compra;
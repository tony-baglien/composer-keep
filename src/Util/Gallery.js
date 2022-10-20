import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore/lite";
import DivList from "./DivList";

import { useEffect, useState } from "react";

const Gallery = () => {
    const [data, setData] = useState([]);
    const [pieces, setPieces] = useState([]);

    const fetchPieces = async () => {
        const snapshot = await getDocs(collection(db, "pieces"));
        let returnArray = [];
        let piecesArray = [];
        snapshot.forEach((doc) => {
            if (doc.data().cover !== undefined || false) {
                returnArray.push(doc.data().cover);
            }
            if (doc.data().piece !== undefined || false) {
                piecesArray.push(doc.data().piece);
            }
        });
        setData(returnArray);
        setPieces(piecesArray);
    };

    useEffect(() => {
        fetchPieces();
    }, []);

    return <DivList items={data} pieces={pieces} />;
};
export default Gallery;

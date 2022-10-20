import Container from "../Util/Container";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore/lite";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faImage } from "@fortawesome/free-solid-svg-icons";

const Upload = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [coverImage, setCoverImage] = useState();
    const [file, setFile] = useState("");

    const navigate = useNavigate();

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };
    const handleAuthorChange = (event) => {
        setAuthor(event.target.value);
    };
    const handleImageChange = (event) => {
        setCoverImage(event.target.files[0]);
    };
    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const storageRef = ref(storage, "images/");
        console.log(storageRef);
        const imageRef = ref(storage, `images/${file.name}`);
        const coverRef = ref(storage, `covers/${coverImage.name}`);

        try {
            await uploadBytesResumable(imageRef, file);
            await uploadBytesResumable(coverRef, coverImage);
            let imageUrl = await getDownloadURL(imageRef);
            let coverUrl = await getDownloadURL(coverRef);

            let data = {
                title: title,
                author: author,
                piece: imageUrl,
                cover: coverUrl,
            };
            await addDoc(collection(db, "pieces"), data);
            navigate("/");
        } catch (event) {
            console.log(event);
        }
    };
    const element = <FontAwesomeIcon icon={faFileArrowUp} />;
    const imageElement = <FontAwesomeIcon icon={faImage} />;

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <div className="input-wrapper">
                    <label htmlFor="title"> Title</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={handleTitleChange}
                    />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="Author"> Author</label>
                    <input
                        type="text"
                        id="title"
                        value={author}
                        onChange={handleAuthorChange}
                    />
                </div>

                <input
                    className="inputfile"
                    id="image"
                    type="file"
                    onChange={handleImageChange}
                />
                <label htmlFor="image">{imageElement}</label>

                <input
                    className="inputfile"
                    id="file"
                    type="file"
                    onChange={handleFileChange}
                />
                <label htmlFor="file">{element}</label>
                <input className="submitButton" type="submit" value="Submit" />
            </form>
        </Container>
    );
};

export default Upload;

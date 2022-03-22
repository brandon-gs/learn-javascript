import { useRef, useState } from "react";
import { Navbar } from "../components/Navbar";
import { Editor } from "@tinymce/tinymce-react";
import ProtectedRoute from "../components/ProtectedRoute";
import PostsService from "../services/posts";
import axios from "axios";
import classnames from "classnames";
import { useHistory } from "react-router-dom";

function CreatePost() {
    const history = useHistory();

    const [redirect, setRedirect] = useState<boolean>(false);

    const [title, setTitle] = useState<string>("");
    const [titleError, setTitleError] = useState<string>("");

    const [cover, setCover] = useState<string>("");
    const [coverFile, setCoverFile] = useState<File | null>(null);
    const [coverError, setCoverError] = useState<string>("");

    const [loading, setLoading] = useState<boolean>(false);
    const [loadingEditor, setLoadingEditor] = useState<boolean>(true);

    const editorRef = useRef<any>(null);

    const handleSavePost = async () => {
        setTitleError(() => "");
        setCoverError(() => "");
        if (editorRef.current) {
            // Validate title, content and cover aren't empty
            const content = editorRef.current.getContent() as string;
            let error = false;
            if (title === "") {
                setTitleError("Se debe colocar un titulo");
                error = true;
            }
            if (title.length > 40) {
                setTitleError("El titulo no debe superar los 40 caracteres");
                error = true;
            }
            if (coverFile === null) {
                setCoverError("Se debe subir una imagen de portada");
                error = true;
            }
            if (content === "") {
                alert("Se debe agregar contenido al post");
                error = true;
            }
            if (error) {
                window.scrollTo({ top: 0, left: 0 });
            }

            if (!coverFile) return;

            setLoading(() => true);

            const formData = new FormData();
            formData.append("image", coverFile);
            // Send file to api to upload the image
            const { data } = await axios.post(
                "http://localhost:3001/api/blog/image/upload",
                formData
            );
            if (data.error) {
                setLoading(() => false);
                setCoverError(data.message);
                return;
            }
            // Save post on firebase
            await PostsService.create({
                content,
                title,
                cover: data.imageName,
            });
        }
        setLoading(() => false);
        setRedirect(() => true);
    };

    const handleFileSelected = (
        e: React.ChangeEvent<HTMLInputElement>
    ): void => {
        if (e.target.files) {
            const files = Array.from(e.target.files);
            setCover(files[0].name);
            setCoverFile(files[0]);
        }
    };

    if (loading) {
        return (
            <>
                <Navbar />
                <div className="row text-center my-5 justify-content-center">
                    <div
                        className="spinner-border text-primary"
                        role="status"
                        style={{
                            width: 240,
                            height: 240,
                        }}
                    ></div>
                </div>
            </>
        );
    }

    if (redirect) {
        history.replace("/posts");
    }

    return (
        <ProtectedRoute type="private">
            <Navbar />
            <div className="container mt-4 mb-5">
                <h1 className="h1 text-center">Crear un artículo</h1>
                <div className="form-group mb-4">
                    <label htmlFor="title" className="mb-1">
                        Título del artículo
                    </label>
                    <input
                        type="text"
                        className={classnames("form-control", {
                            "is-invalid": titleError !== "",
                        })}
                        id="title"
                        placeholder="Ingresa el título del artículo"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    {titleError !== "" && (
                        <small
                            id="titleError"
                            className="form-text text-danger"
                        >
                            {titleError}
                        </small>
                    )}
                </div>
                <div className="custom-file mb-5">
                    <label
                        htmlFor="formFile"
                        className="custom-file-label"
                        data-bs-browse="Jus a test"
                    >
                        {cover ? cover : "Selecciona una imagen de portada"}
                    </label>
                    <input
                        className={classnames("custom-file-input", {
                            "is-invalid": titleError !== "",
                        })}
                        type="file"
                        id="formFile"
                        onChange={handleFileSelected}
                    />
                    {coverError !== "" && (
                        <small
                            id="coverError"
                            className="form-text text-danger"
                        >
                            {coverError}
                        </small>
                    )}
                </div>

                {loadingEditor && (
                    <div className="row text-center my-5 justify-content-center">
                        <div
                            className="spinner-border text-primary"
                            role="status"
                            style={{
                                width: 240,
                                height: 240,
                            }}
                        ></div>
                    </div>
                )}

                <label>Contenido del artículo</label>
                <Editor
                    apiKey="gum8uq1br21cqf3b5mdppzcc34xf3a8c04czlyuneo32vkwe"
                    onInit={(evt, editor) => {
                        setLoadingEditor(() => false);
                        editorRef.current = editor;
                    }}
                    initialValue="<p>Comienza a escribir tu post...</p>"
                    init={{
                        height: 500,
                        menubar: false,
                        image_advtab: false,
                        image_description: false,
                        image_dimensions: false,
                        images_upload_url:
                            "http://localhost:3001/api/blog/image/upload",
                        /* we override default upload handler to simulate successful upload*/
                        images_upload_handler: async function (
                            blobInfo,
                            success,
                            failure
                        ) {
                            const formData = new FormData();

                            formData.append(
                                "image",
                                blobInfo.blob(),
                                blobInfo.filename()
                            );

                            // Send file to api to upload the image
                            const { data } = await axios.post(
                                "http://localhost:3001/api/blog/image/upload",
                                formData
                            );

                            if (data.error) {
                                failure(data.error);
                                return;
                            }
                            success(data.imageName);
                        },
                        plugins: [
                            "advlist autolink lists link image charmap print preview anchor",
                            "searchreplace visualblocks code fullscreen",
                            "insertdatetime media table paste code help wordcount",
                        ],
                        toolbar:
                            "undo redo | formatselect | " +
                            "bold italic backcolor | alignleft aligncenter " +
                            "alignright alignjustify | bullist numlist outdent indent | " +
                            "removeformat | link image | help",
                        content_style:
                            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                        content_langs: [
                            {
                                title: "Spanish",
                                code: "es",
                            },
                        ],
                        language: "es",
                    }}
                />
                <div className="d-grid gap-2">
                    <button
                        onClick={handleSavePost}
                        className="btn btn-primary btn-lg mt-5 mb-5"
                    >
                        Crear post
                    </button>
                </div>
            </div>
        </ProtectedRoute>
    );
}

export default CreatePost;

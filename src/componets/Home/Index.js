import React from "react";

import { Redirect } from "react-router-dom";

import "./style.css";

import { useDispatch, useSelector } from "react-redux";

import { ObtenerTheMovieAccion } from "../Redux/Reducers/TheMovieDB";

import { Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";

const Index = () => {
    const { Dragger } = Upload;

    const dispatch = useDispatch();
    const Data = useSelector((store) => store.TheMoviesData.Details);


    const props = {
        accept: ".jpg, .png",
        name: "file",
        multiple: true, /* poner false si solo quieres que tome el primer archvo */
        /* action: 'https://whois.nomada.cloud/upload',
        headers: {
            Nomada: '"ODY1ZTkwYWYtNmM0Ny00MzJkLTlmNTgtMjA2NDNhN2IwZTAw"',
        }, */

        onChange(info) {
            if (info.fileList.length > 1) {
                message.error(`Solo se permite una imagen.`);
            } else if (info.fileList.length === 1) {
                const { status } = info.file;
                if (status !== "uploading") {
                    try {
                        var myHeaders = new Headers();
                        myHeaders.append(
                            "Nomada",
                            "ODY1ZTkwYWYtNmM0Ny00MzJkLTlmNTgtMjA2NDNhN2IwZTAw"
                        );
                        myHeaders.append(
                            "Cookie",
                            "__cfduid=d635bdaab304a2e2ae88a002cfa06a7791610417202"
                        );

                        var formdata = new FormData();
                        formdata.append("file", info.fileList[0].originFileObj);

                        var requestOptions = {
                            method: "POST",
                            headers: myHeaders,
                            body: formdata,
                            redirect: "follow",
                        };

                        fetch("https://whois.nomada.cloud/upload", requestOptions)
                            .then((response) => response.json())
                            .then((result) => {
                                if (result.error === "") {
                                    dispatch(ObtenerTheMovieAccion(result.actorName))
                                } else {
                                    message.success(`${result.error}`)
                                }
                            }
                            )
                            .catch((error) => message.error(`${error} file upload failed.`));
                    } catch (error) {
                        console.log(error);
                    }
                }
            }
            /*  if (info.file.status === 'done') {
                 message.success(`${info.file.name} file uploaded successfully`);
             } else if (info.file.status === 'error') {
                 message.error(`${info.file.name} file upload failed.`);
             } */
        },
    };

    if (Data !== null) {
        return <Redirect to="/Details" />
    }

    return (
        <div className="searcher">
            <h1>¿Quién es el actor?</h1>
            <Dragger {...props} >
                <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                </p>
                <p className="ant-upload-text">Haz click o arrastra una imagen</p>
                <p className="ant-upload-hint">
                    Selecciona la foto de un actor famoso para conocer quién es y en qué
                    peliculas ha salido
        </p>
            </Dragger>
        </div>
    );
}

export default Index;
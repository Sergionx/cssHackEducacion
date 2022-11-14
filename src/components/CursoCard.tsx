import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../../firebase";
import { Curso } from "../interfaces/models/Curso";

import Gold_Star from "../assets/Gold_Star.svg";

interface ICursoCard {
    curso: Curso;
}

function CursoCard(props: ICursoCard) {
    const navigate = useNavigate();
    const [profName, setProfName] = useState<string>("");

    function handleImageClick() {
        navigate(props.curso.id!.toString());
    }

    useEffect(() => {
        getDoc(doc(db, "users", props.curso.professorId)).then((doc) => {
            setProfName(doc.data()?.name);
        });
    }, []);

    const stars = [];
    for (let i = 0; i < props.curso.stars; i++) {
        stars.push(
            <img height={20} width={20}  src={Gold_Star}/>
        );
    }

    return (
        <>
            <div className="bg-white shadow-xl rounded-lg overflow-hidden w-60 justify-items-center">
                <div className="bg-cover bg-center h-40 px-4">
                    <img src={props.curso.imgUrl} />
                </div>

                <div className="p-4">
                    <p className="uppercase tracking-wide text-sm font-bold text-gray-700">
                        {props.curso.name}
                    </p>
                </div>

                <div className="px-4 pt-3 pb-4 border-t border-gray-300 bg-gray-100">
                    <div className="text-xs uppercase font-bold text-gray-600 text-center">
                        Datos
                    </div>

                    <p className="font-bold text-gray-900 text-center">
                        {profName}
                    </p>

                    <div className="flex flex-row justify-center">{stars}</div>
                </div>
            </div>

            {/* <div className="flex flex-col items-center justify-center gap-y-3 h-24">
                <img
                    src={props.curso.imgUrl as string}
                    className="w-auto 
                hover:cursor-pointer"
                    onClick={handleImageClick}
                />
                <h3 className="text-sm text-gray-700">
                    <Link to={props.curso.id!.toString()} className="">
                        {props.curso.name}
                    </Link>
                </h3>
            </div> */}

            {/* <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                    src={props.curso.imgUrl as string}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full 
                hover:cursor-pointer"
                    onClick={handleImageClick}
                />
            </div>
            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-sm text-gray-700">
                        <Link
                            to={props.curso.id!.toString()}
                            className=""
                        >
                            {props.curso.name}
                        </Link>
                    </h3>
                </div>
                <p className="text-sm font-medium text-gray-900">
                    {props.curso.description} $
                </p>
            </div> */}
        </>
    );
}

export default CursoCard;

import React, { useState } from "react";
import CursoCard from "../../components/CursoCard";
import { Curso } from "../../interfaces/models/Curso";

function Hero() {
    //Create 10 mock courses
    const [cursos, setCursos] = useState<Curso[]>([
        {
            id: "1",
            name: "Curso 1",
            professorId: "c5d4pznU51Pq466KWLl8ON4TVB13",
            description: "Curso 1",
            imgUrl: "https://ichef.bbci.co.uk/news/640/cpsprodpb/870D/production/_111437543_197389d9-800f-4763-8654-aa30c04220e4.png",
            stars: 4,
        },
        {
            id: "2",
            name: "Curso 2",
            professorId: "c5d4pznU51Pq466KWLl8ON4TVB13",
            description: "Curso 2",
            imgUrl: "https://ichef.bbci.co.uk/news/640/cpsprodpb/870D/production/_111437543_197389d9-800f-4763-8654-aa30c04220e4.png",
            stars: 4,
        },
        {
            id: "3",
            name: "Curso 3",
            professorId: "c5d4pznU51Pq466KWLl8ON4TVB13",
            description: "Curso 3",
            imgUrl: "https://ichef.bbci.co.uk/news/640/cpsprodpb/870D/production/_111437543_197389d9-800f-4763-8654-aa30c04220e4.png",
            stars: 4,
        },
        {
            id: "4",
            name: "Curso 4",
            professorId: "c5d4pznU51Pq466KWLl8ON4TVB13",
            description: "Curso 4",
            imgUrl: "https://ichef.bbci.co.uk/news/640/cpsprodpb/870D/production/_111437543_197389d9-800f-4763-8654-aa30c04220e4.png",
            stars: 4,
        },
        {
            id: "5",
            name: "Curso 5",
            professorId: "c5d4pznU51Pq466KWLl8ON4TVB13",
            description: "Curso 5",
            imgUrl: "https://ichef.bbci.co.uk/news/640/cpsprodpb/870D/production/_111437543_197389d9-800f-4763-8654-aa30c04220e4.png",
            stars: 4,
        },
        {
            id: "6",
            name: "Curso 6",
            professorId: "c5d4pznU51Pq466KWLl8ON4TVB13",
            description: "Curso 6",
            imgUrl: "https://ichef.bbci.co.uk/news/640/cpsprodpb/870D/production/_111437543_197389d9-800f-4763-8654-aa30c04220e4.png",
            stars: 4,
        },
        {
            id: "7",
            name: "Curso 7",
            professorId: "c5d4pznU51Pq466KWLl8ON4TVB13",
            description: "Curso 7",
            imgUrl: "https://ichef.bbci.co.uk/news/640/cpsprodpb/870D/production/_111437543_197389d9-800f-4763-8654-aa30c04220e4.png",
            stars: 4,
        },
        {
            id: "8",
            name: "Curso 8",
            professorId: "c5d4pznU51Pq466KWLl8ON4TVB13",
            description: "Curso 8",
            imgUrl: "https://ichef.bbci.co.uk/news/640/cpsprodpb/870D/production/_111437543_197389d9-800f-4763-8654-aa30c04220e4.png",
            stars: 4,
        },
        {
            id: "9",
            name: "Curso 9",
            professorId: "c5d4pznU51Pq466KWLl8ON4TVB13",
            description: "Curso 9",
            imgUrl: "https://ichef.bbci.co.uk/news/640/cpsprodpb/870D/production/_111437543_197389d9-800f-4763-8654-aa30c04220e4.png",
            stars: 4,
        },
        {
            id: "10",
            name: "Curso 10",
            professorId: "c5d4pznU51Pq466KWLl8ON4TVB13",
            description: "Curso 10",
            imgUrl: "https://ichef.bbci.co.uk/news/640/cpsprodpb/870D/production/_111437543_197389d9-800f-4763-8654-aa30c04220e4.png",
            stars: 4,
        },
    ]);

    return (
        <>
            <h1 className="font-bold text-3 xl">
                Cursos
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 space-y-5 justify-items-center">
                {cursos.map((curso) => (
                    <CursoCard key={parseInt(curso.id!)} curso={curso} />
                ))}
            </div>
        </>
    );
}

export default Hero;

import { TitleGeneral } from "@/components/title-general/title-general";
import { Pagination } from "@/components/pagination/pagination";
import { CardDescription } from "@/components/card-description/card-description";

import { RepositoryObra } from "@/repository/repositoryObra";
import { connectToMongoDB } from "@/config/mongoose";
import { deserialize } from "v8";
import { deserializeSlug } from "@/utils/convertes";

export default async function NameArtist({
    params,
    searchParams,
}: {
    params: { name: string }
    searchParams: { page?: number };
}) {
    await connectToMongoDB();
    const repositoryObra = new RepositoryObra();
    const paramName = deserializeSlug(params.name);

    console.log(paramName)
    const numberSaltPage = 25;
    const page = searchParams.page == undefined ? (1) : searchParams.page;

    const { count, obras } = await repositoryObra.GetAllPaginate({
        query: { 'artistas.nombre': paramName },
        sort: { 'fecha': 'desc' },
        page: page,
        take: numberSaltPage
    })
    return (
        <>
            <div className="grid grid-cols-1 gap-4">
                <TitleGeneral
                    name={`ARTISTA: ${paramName.toUpperCase()}`}
                />
            </div>

            <div className="grid">
                <Pagination
                    numberPages={10}
                    skip={25}
                    count={count}
                    page={page}
                />
            </div>
            <div className="bg-gray-50 dark:bg-neutral-900 items-center justify-center p-2">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {
                        obras?.map((obra, i) => {
                            return (
                                <CardDescription
                                    key={i}
                                    url={`/code/${obra.codigo}`}
                                    language={obra.lenguaje.nombre}
                                    name={obra.nombre}
                                    urlImagen={`${process.env.FILE_URL_ORIGINAL} ${obra.paginas[0].url_original}`}
                                />
                            )
                        })
                    }
                </div>
            </div>
            <div className="grid">
                <Pagination
                    numberPages={10}
                    skip={25}
                    count={count}
                    page={page}
                />
            </div>
        </>
    )
}
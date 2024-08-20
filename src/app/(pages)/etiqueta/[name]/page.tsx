import { TitleGeneral } from "@/components/title-general/title-general";
import { AllPage, Pagination } from "@/components/pagination/pagination";
import { CardDescription } from "@/components/card-description/card-description";

import { RepositoryObra } from "@/repository/repositoryObra";
import { getDBConnection } from "@/config/database";

export default async function EtiquetaPage({
    params,
    searchParams,
}: {
    params: { name: string }
    searchParams: { page?: number };
}) {
    const connect = await getDBConnection();
    const repositoryObra = new RepositoryObra(connect);

    const paramName = params.name.replace(/-/g, ' ');

    const numberSaltPage = 25;
    const page = searchParams.page == undefined ? (1) : searchParams.page;

    const { count, data } = await repositoryObra.GetPaginate(paramName, 'etiquetas', numberSaltPage, ((page - 1) * numberSaltPage));

    
    return (
        <>
            <div className="grid grid-cols-1 gap-4">
                <TitleGeneral
                    name={`ETIQUETA: ${paramName.toUpperCase()}`}
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
                        data?.map((book, i) => {
                            return (
                                <CardDescription
                                    key={i}
                                    url={`/code/${book.codigo}`}
                                    language={book.lenguaje.nombre}
                                    name={book.nombre}
                                    urlImagen={`${process.env.FILE_URL_ORIGINAL} ${book.paginas[0].url_original}`}
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
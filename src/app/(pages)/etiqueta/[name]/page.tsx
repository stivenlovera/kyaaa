import { TitleGeneral } from "@/components/title-general/title-general";
import { AllPage, Pagination } from "@/components/pagination/pagination";
import { CardDescription } from "@/components/card-description/card-description";
import { repositoryObra } from "@/repository/repositoryObra";
export const total: AllPage[] = [
    {
        name: '1',
        url: '1'
    },
    {
        name: '2',
        url: '2'
    },
    {
        name: '3',
        url: '3'
    },
    {
        name: '4',
        url: '4'
    },
    {
        name: '5',
        url: '5'
    },
    {
        name: '6',
        url: '6'
    },
    {
        name: '7',
        url: '7'
    },
    {
        name: '8',
        url: '8'
    }
];
export default async function EtiquetaPage({
    params,
    searchParams,
}: {
    params: { name: string, page: string }
    searchParams: { page: string };
}) {
    const paramName = params.name.replace(/-/g, ' ');
    const numberSaltPage = 25;
    
    const page = (parseInt(searchParams.page) - 1) * numberSaltPage;
    const { count, data } = await repositoryObra.GetPaginate(paramName, 'etiquetas', numberSaltPage, page);

    return (
        <>
            <div className="grid grid-cols-1 gap-4">
                <TitleGeneral
                    name={`ETIQUETA: ${paramName.toUpperCase()}`}
                />
            </div>

            <div className="grid">
                <Pagination
                    count={count}
                    page={parseInt(searchParams.page)}
                />
            </div>
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
            <div className="grid">
                <Pagination
                    count={count}
                    page={parseInt(searchParams.page)}
                />
            </div>
        </>
    )
}
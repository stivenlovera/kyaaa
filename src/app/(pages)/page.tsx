"use server"
import 'dotenv/config';
import { Pagination } from "@/components/pagination/pagination";
import { TitleGeneral } from "@/components/title-general/title-general";
import { CardDescription } from "@/components/card-description/card-description";
import 'dotenv/config';
import { RepositoryObra } from '@/repository/repositoryObra';
import { getDBConnection } from '@/config/database';


export default async function PageHome({
    params,
    searchParams,
}: {
    params: { slug: string };
    searchParams: { page?: number };
}) {
    const connect = await getDBConnection();
    const repositoryObra = new RepositoryObra(connect);

    const numberSaltPage = 25;
    const page = searchParams.page == undefined ? (1) : searchParams.page;

    const { count, data } = await repositoryObra.Paginate(numberSaltPage, ((page - 1) * numberSaltPage));

    console.log(count)
    return (
        <>
            <div className="grid grid-cols-1">
                <TitleGeneral
                    name='NUEVOS'
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
                        data.map((obra, i) =>
                            <CardDescription
                                key={i}
                                url={`/code/${obra.codigo}`}
                                language={obra.lenguaje.nombre}
                                name={obra.nombre}
                                urlImagen={`${process.env.FILE_URL_ORIGINAL}${obra.paginas[0].url_original}`}
                            />
                        )
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
    );
}
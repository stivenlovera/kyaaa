"use server"
import 'dotenv/config';
import { Pagination } from "@/components/pagination/pagination";
import { TitleGeneral } from "@/components/title-general/title-general";
import { CardDescription } from "@/components/card-description/card-description";
import 'dotenv/config';
import { repositoryObra } from '@/repository/repositoryObra';


export default async function PageHome({
    params,
    searchParams,
}: {
    params: { slug: string };
    searchParams: { page: string };
}) {
    const numberSaltPage = 25;
    const page = (parseInt(searchParams.page) - 1) * numberSaltPage;

    const { count, data } = await repositoryObra.Paginate(numberSaltPage, page);

    return (
        <>
            <div className="grid grid-cols-1 gap-4">
                <TitleGeneral
                    name='NUEVOS'
                />
            </div>
            <h4>aaa{parseInt(searchParams.page)}</h4>
            <div className="grid">
                <Pagination
                    count={count}
                    page={parseInt(searchParams.page)}
                />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
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
            {/* <div className="grid grid-cols-1 gap-4">
                <Pagination
                    prefix="/etiqueta"
                    allPage={total}
                    page={page}
                />
            </div> */}
        </>
    );
}
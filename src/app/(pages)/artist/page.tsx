import { PaginationAbc } from '@/components/pagination/paginationAbc';
import { TagInformation } from '@/components/tag/tag-information';
import { TitleGeneral } from '@/components/title-general/title-general';
import { getDBConnection } from '@/config/database';

import { RepositoryObra } from '@/repository/repositoryObra';

interface EtiquetaHome {
    artist: string
    quantity: number
}
interface Sample {
    name: string
    language: string
    urlImagen: string
}
export default async function AllEtiquetasHome(
    {
        params,
        searchParams,
    }: {
        params: { slug: string };
        searchParams: { page?: string };
    }
) {
    const connect = await getDBConnection();
    const repositoryObra = new RepositoryObra(connect);

    const abc = repositoryObra.abc();
    const paramsPage = searchParams.page == undefined ? ('123') : searchParams.page;
    const page = paramsPage! == ('123') ? ('^([0-9.-])') : (`^([${paramsPage!.toUpperCase()}${paramsPage!.toLowerCase()}])`);

    const { count, data } = await repositoryObra.GetCountGroupAgregatePaginate(repositoryObra.CreateAgregation({
        entity: 'etiquetas',
        field: 'nombre',
        order: 1,
        match: {
            name: {
                $regex: page
            }
        }
    }));
    
    
    return (
        <>
            <div className="grid grid-cols-1 gap-4">
                <TitleGeneral
                    name='TODAS LAS ETIQUETAS'
                />
            </div>
            <div className="grid">
                <PaginationAbc
                    abc={abc}
                    page={paramsPage}
                    count={abc.length}
                />
            </div>
            <div className="bg-gray-50 dark:dark:bg-neutral-900 items-center justify-center p-2 ">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 ">
                    {
                        data.map((tag, i) => {
                            return (
                                <div key={i} className='flex flex-wrap items-center justify-center'>
                                    <TagInformation
                                        quantity={tag.count}
                                        value={tag.name}
                                        url={`/etiqueta/${tag.name.replace(/ /g, '-')}`}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="grid">
                <PaginationAbc
                    abc={abc}
                    page={paramsPage}
                    count={abc.length}
                />
            </div>
        </>
    );
}
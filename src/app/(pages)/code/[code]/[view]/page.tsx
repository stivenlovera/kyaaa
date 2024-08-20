import { PaginationView } from "@/components/pagination/pagination-view";
import { View } from "@/components/view/view";
import Custom404 from "./404";
import Link from "next/link";
import { getDBConnection } from "@/config/database";
import { RepositoryObra } from "@/repository/repositoryObra";

export default async function ViewPage({ params }:
    {
        params: { code: string, view: number }
    }) {
    const connect = await getDBConnection();
    const repositoryObra = new RepositoryObra(connect);

    const obra = await repositoryObra.GetOne(params.code);
    const pagina = obra?.paginas.find((pag) =>
        pag.numero == params.view
    )

    if (pagina == undefined) {
        return <Custom404 />;
    }
    const paginas = obra?.paginas.map((pag) => pag.numero)

    
    return (
        <div className="dark:bg-neutral-900 grid grid-cols-1">
            <div className="grid">
                <div className='flex mx-auto flex-wrap items-center justify-center pt-1'>
                    <Link href={`/code/${params.code}`} className='flex items-center justify-center p-2 dark:hover:bg-gray-800 rounded-full'>Volver a la galeria</Link>
                </div>
                <PaginationView
                    allPages={paginas!}
                    page={pagina!.numero}
                    code={params.code}
                />
                <View
                    image={`${process.env.FILE_URL_ORIGINAL}${pagina?.url_original}`}
                    page={pagina!.numero}
                />
                <PaginationView
                    allPages={paginas!}
                    page={pagina!.numero}
                    code={params.code}
                />
                <div className='flex mx-auto flex-wrap items-center justify-center pb-1'>
                    <Link href={`/code/${params.code}`} className='flex items-center justify-center p-2 dark:hover:bg-gray-800 rounded-full'>Volver a la galeria</Link>
                </div>
            </div>
        </div>
    )
}
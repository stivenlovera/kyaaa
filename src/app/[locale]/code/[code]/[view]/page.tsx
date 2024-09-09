import { PaginationView } from "@/components/pagination/pagination-view";
import { View } from "@/components/view/view";
import Custom404 from "./404";
import { Link } from '@/i18n/routing';
import { RepositoryObra } from "@/repository/repositoryObra";
import { connectToMongoDB } from "@/config/mongoose";
import { getTranslations } from "next-intl/server";

export default async function ViewPage({ params }:
    {
        params: { code: string, view: number }
    }) {
    const t = await getTranslations('View');
    await connectToMongoDB()
    const repositoryObra = new RepositoryObra();

    const obra = await repositoryObra.GetOne({ codigo: params.code });
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
                    <Link href={`/code/${params.code}`} className='flex items-center justify-center p-2 dark:hover:bg-gray-800 rounded-full'>
                        {t('backGalery')}
                    </Link>
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
import { TagInformation } from '@/components/tag/tag-information';
import { TitleGeneral } from '@/components/title-general/title-general';
import { connectToMongoDB } from '@/config/mongoose';
import { RepositoryObra } from '@/repository/repositoryObra';
import { serializeSlug } from '@/utils/convertes';
import { languajeToSpanish } from '@/utils/traslate-force';

import { getTranslations } from 'next-intl/server';

export default async function Character(
    {
        params,
        searchParams,
    }: {
        params: { slug: string };
        searchParams: { page?: string };
    }
) {
    const t = await getTranslations('Language');

    await connectToMongoDB();
    const repositoryObra = new RepositoryObra();

    const abc = repositoryObra.abc();
    const paramsPage = searchParams.page == undefined ? ('123') : searchParams.page;
    const page = paramsPage! == ('123') ? ('^([0-9.-])') : (`^([${paramsPage!.toUpperCase()}${paramsPage!.toLowerCase()}])`);

    const aggregate = repositoryObra.agreggateLanguage();
    const { count, obras } = await repositoryObra.GetGroupPaginate({ aggregate })


    return (
        <>
            <div className="grid grid-cols-1 gap-4">
                <TitleGeneral
                    name={t('title')}
                />
            </div>
            <div className="bg-gray-50 dark:dark:bg-neutral-900 items-center justify-center p-2 ">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 ">
                    {
                        obras.map((language, i) => {
                            const traslate = languajeToSpanish(language.name)
                            //console.log(language.name)
                            return (
                                <div key={i} className='flex flex-wrap items-center justify-center'>
                                    <TagInformation
                                        quantity={language.count}
                                        value={language.name}
                                        url={`/language/${serializeSlug(traslate)}`}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
}
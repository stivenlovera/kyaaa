import { TagInformation } from '@/components/tag/tag-information';
import { TitleGeneral } from '@/components/title-general/title-general';
import { connectToMongoDB } from '@/config/mongoose';
import { RepositoryObra } from '@/repository/repositoryObra';
import { serializeSlug } from '@/utils/convertes';
import es from '../../../../public/locale/es/common.json'
import en from '../../../../public/locale/es/common.json'
import { appWithTranslation, useTranslation } from 'next-i18next';

export default async function Character(
    {
        params,
        searchParams,
    }: {
        params: { slug: string };
        searchParams: { page?: string };
    }
) {
    //const { t } = useTranslation('common');

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
                    name={'TODOS LOS LENGUAJES'}
                />
            </div>
            <div className="bg-gray-50 dark:dark:bg-neutral-900 items-center justify-center p-2 ">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 ">
                    {
                        obras.map((language, i) => {
                            //const traslate = languajeDetect(language.name)
                            //console.log(language.name)
                            return (
                                <div key={i} className='flex flex-wrap items-center justify-center'>
                                    <TagInformation
                                        quantity={language.count}
                                        value={language.name}
                                        url={`/language/${serializeSlug(language.name)}`}
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
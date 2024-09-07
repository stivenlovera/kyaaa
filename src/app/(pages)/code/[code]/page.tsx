import { CardInformation } from "@/components/card-information/card-information";
import { getDBConnection } from "@/config/database";
import { connectToMongoDB } from "@/config/mongoose";
import { RepositoryObra } from "@/repository/repositoryObra";
import Link from "next/link";

export default async function CodePage({
  params,
  searchParams,
}: {
  params: { code: string };
  searchParams: { page: string };
}) {
  await connectToMongoDB()

  const repositoryObra = new RepositoryObra();
  const obra = await repositoryObra.GetOne({ codigo: params.code });
  console.log('personajes',obra!.personajes)

  const groupArtists = obra!.artistas.map((artist) => artist.nombre)
  const aggregateArtists = repositoryObra.agreggateGroupArtist(groupArtists)
  const artists = await repositoryObra.GetGroup({ aggregate: aggregateArtists });

  const groupCharacters = obra!.personajes.map((personaje) => personaje.nombre)
  const aggregateCharacter = repositoryObra.agreggateGroupCharacter(groupCharacters)
  const characters = await repositoryObra.GetGroup({ aggregate: aggregateCharacter });

  const groupTags = obra!.etiquetas.map((etiqueta) => etiqueta.nombre)
  const aggregateTag = repositoryObra.agreggateGroupTag(groupTags)
  const tags = await repositoryObra.GetGroup({ aggregate: aggregateTag });

  const groupSeries = obra!.series.map((serie) => serie.nombre)
  const aggregateSeries = repositoryObra.agreggateGroupSerie(groupSeries)
  const series = await repositoryObra.GetGroup({ aggregate: aggregateSeries });

  const aggregateGroup = repositoryObra.agreggateGroupGroup([obra!.grupo.nombre])
  const group = await repositoryObra.GetGroup({ aggregate: aggregateGroup });

  console.log('aggregateGroup', JSON.stringify(aggregateGroup, null, "\t"))
  
  const aggregateLanguage = repositoryObra.agreggateGroupLanguage([obra!.lenguaje.nombre])
  const languaje = await repositoryObra.GetGroup({ aggregate: aggregateLanguage });

  const aggregateCategory = repositoryObra.agreggateGroupLanguage([obra!.tipo.nombre])
  const type = await repositoryObra.GetGroup({ aggregate: aggregateCategory });

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
        <CardInformation
          url="#"
          urlImagen={`${process.env.FILE_URL_ORIGINAL}${obra!.paginas[0].url_original}`}
          code={obra!.codigo}
          title={obra!.nombre}
          update={obra!.fecha.toISOString()}
          pages={obra!.numero_pagina}
          artists={artists}
          tags={tags}
          category={type}
          character={characters}
          group={group}
          languaje={languaje}
          series={series}
        />
      </div>
      <br />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 bg-gray-50 dark:bg-neutral-900">
        {
          obra!.paginas.map((page, i) => {
            return (
              <div
                className="flex p-2 items-start justify-center w-full"
                key={i}
              >
                <Link
                  href={`/code/${obra?.codigo}/${page.numero}`}
                  className=""
                >
                  <img
                    className='w-auto'
                    alt='preview'
                    src={`${process.env.FILE_URL_ORIGINAL}${page.url_original}`}
                  />
                </Link>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

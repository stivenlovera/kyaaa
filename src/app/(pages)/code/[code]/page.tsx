import { CardInformation } from "@/components/card-information/card-information";
import { getDBConnection } from "@/config/database";
import { RepositoryObra } from "@/repository/repositoryObra";
import Link from "next/link";

export default async function CodePage({
  params,
  searchParams,
}: {
  params: { code: string };
  searchParams: { page: string };
}) {
  const connect = await getDBConnection();

  const repositoryObra = new RepositoryObra(connect);
  const obra = await repositoryObra.GetOne(params.code);

  const groupArtists = obra!.artistas.map((artist) => artist.nombre)
  const artists = await repositoryObra.GetCountGroupAgregate(repositoryObra.CreateAgregation({
    entity: 'artistas',
    field: 'nombre',
    order: 1,
    match: {
      name: {
        $in: groupArtists
      }
    }
  }));
  const artistasCount = artists.map((artists) => {
    return {
      value: artists.name,
      quantity: artists.count,
      url: '#'
    }
  });

  const groupCharacters = obra!.personajes.map((character) => character.nombre)
  const characters = await repositoryObra.GetCountGroupAgregate(repositoryObra.CreateAgregation(
    {
      entity: 'personajes',
      field: 'nombre',
      order: 1,
      match: {
        name: {
          $in: groupCharacters
        }
      }
    }));
  const charactersCount = characters.map((character) => {
    return {
      quantity: character.count,
      url: '#',
      value: character.name
    }
  })

  const groupTags = obra!.etiquetas.map((tag) => tag.nombre)
  const tags = await repositoryObra.GetCountGroupAgregate(repositoryObra.CreateAgregation({
    entity: 'etiquetas',
    field: 'nombre',
    order: 1,
    match: {
      name: {
        $in: groupTags
      }
    }
  }));
  const tagsCount = tags.map((tag) => {
    return {
      quantity: tag.count,
      url: '#',
      value: tag.name
    }
  })

  const groupSeries = obra!.series.map((serie) => serie.nombre)
  const series = await repositoryObra.GetCountGroupAgregate(repositoryObra.CreateAgregation({
    entity: 'series',
    field: 'nombre',
    order: 1,
    match: {
      name: {
        $in: groupSeries
      }
    }
  }));
  const seriesCount = series.map((serie) => {
    return {
      quantity: serie.count,
      url: '#',
      value: serie.name
    }
  })

  const groups = await repositoryObra.GetCountGroupAgregate(repositoryObra.CreateAgregation({
    entity: 'grupo',
    field: 'nombre',
    order: 1,
    match: {
      name: {
        $in: [obra!.grupo.nombre]
      }
    }
  }));
  const groupsCount = groups.map((group) => {
    return {
      quantity: group.count,
      url: '#',
      value: group.name
    }
  })

  const languages = await repositoryObra.GetCountGroupAgregate(repositoryObra.CreateAgregation({
    entity: 'lenguaje',
    field: 'nombre',
    order: 1,
    match: {
      name: {
        $in: [obra!.lenguaje.nombre]
      }
    }
  }));
  const languageCount = languages.map((language) => {
    return {
      quantity: language.count,
      url: '#',
      value: language.name
    }
  })

  const types = await repositoryObra.GetCountGroupAgregate(repositoryObra.CreateAgregation({
    entity: 'tipo',
    field: 'nombre',
    order: 1,
    match: {
      name: {
        $in: [obra!.tipo.nombre]
      }
    }
  }));
  const typesCount = types.map((type) => {
    return {
      quantity: type.count,
      url: '#',
      value: type.name
    }
  })


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
          artists={artistasCount}
          tags={tagsCount}
          category={typesCount}
          character={charactersCount}
          group={groupsCount}
          languaje={languageCount}
          series={seriesCount}
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

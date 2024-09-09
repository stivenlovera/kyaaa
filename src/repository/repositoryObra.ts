
import { logger } from "@/config/logger";
import { IGroupPerName } from "@/models/groupPerName";
import { IObra, modelObra } from "@/models/obra";
import { FilterQuery, PipelineStage, SortOrder } from "mongoose";

type CreateAgregationProps = {
    entity: string
    field: string
    order: 1 | -1
    match?: FilterQuery<any>
    skip?: number
}
export class RepositoryObra {
    abc(): string[] {
        return [
            '123', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
        ]
    }
    async GetOne({ codigo }: { codigo: string }): Promise<IObra | null> {
        const obra = await modelObra.findOne<IObra>({
            codigo: codigo
        });
        return obra;
    }
    async GetAllPageInit({ query, sort, page, take }: GetAllNameProps<IObra>) {
        const { docs, totalDocs } = await modelObra.find<IObra>({
            fecha: { $gte: new Date("2023-02-01T00:00:00"), $lte: new Date("2023-03-30T00:00:00") }
        }).paginate({ limit: take, page: page, sort });
        return {
            count: totalDocs,
            obras: docs
        }
    }
    async GetAll({ query, sort, page, take }: GetAllNameProps<IObra>) {
        const { docs, totalDocs } = await modelObra.find<IObra>(query).paginate({ limit: take, page: page, sort });
        return {
            count: totalDocs,
            obras: docs
        }
    }
    async GetAllPaginate({ query, sort, page, take }: GetAllNameProps<IObra>) {
        const { docs, totalDocs } = await modelObra.find<IObra>(query)/* .sort(sort).skip(skip).limit(take) */.paginate({ limit: take, page: page, sort });
        return {
            count: totalDocs,
            obras: docs
        }
    }
    async GetGroupPaginate({ aggregate, sort }: GetGroupPaginateProps) {
        const obras = await modelObra.aggregate<IGroupPerName>(aggregate);
        return {
            count: obras.length,
            obras
        }
    }
    async GetGroup({ aggregate }: { aggregate: PipelineStage[] }): Promise<IGroupPerName[]> {

        const grupos = await modelObra.aggregate<IGroupPerName>(aggregate);
        return grupos;
    }
    agregation({ entity, field, order, match, skip }: CreateAgregationProps): PipelineStage[] {
        let pipeline: PipelineStage[] = [
            {
                $unwind: `$${entity}`
            },
            {
                $group: {
                    _id: `$${entity}.${field}`,
                    count: {
                        $sum: 1
                    },
                    name: {
                        $first: `$${entity}.${field}`,
                    }
                }
            },
            {
                $sort: {
                    name: 1
                }
            }
        ];
        if (match) {
            pipeline.push({
                $match: match
            })
        }
        if (skip) {
            pipeline.push({
                $skip: skip
            })
        }
        return pipeline;
    }

    public agreggateArtist = (match: string) => this.agregation({
        entity: 'artistas',
        field: 'nombre',
        order: 1,
        match: {
            name: {
                $regex: match
            }
        }
    })
    public agreggateCharacter = (match: string) => this.agregation({
        entity: 'personajes',
        field: 'nombre',
        order: 1,
        match: {
            name: {
                $regex: match
            }
        }
    })
    public agreggateTag = (match: string) => this.agregation({
        entity: 'etiquetas',
        field: 'nombre',
        order: 1,
        match: {
            name: {
                $regex: match
            }
        }
    })
    public agreggateSerie = (match: string) => this.agregation({
        entity: 'series',
        field: 'nombre',
        order: 1,
        match: {
            name: {
                $regex: match
            }
        }
    })
    public agreggateGroup = (match: string) => this.agregation({
        entity: 'grupo',
        field: 'nombre',
        order: 1,
        match: {
            name: {
                $regex: match
            }
        }
    })
    public agreggateLanguage = () => this.agregation({
        entity: 'lenguaje',
        field: 'nombre',
        order: 1
    })

    public agreggateCategory = () => this.agregation({
        entity: 'tipo',
        field: 'nombre',
        order: 1
    })
    public agreggateGroupCategory = (match: string[]) => this.agregation({
        entity: 'tipo',
        field: 'nombre',
        order: 1,
        match: {
            name: {
                $in: match
            }
        }
    })
    public agreggateGroupLanguage = (match: string[]) => this.agregation({
        entity: 'lenguaje',
        field: 'nombre',
        order: 1,
        match: {
            name: {
                $in: match
            }
        }
    })
    public agreggateGroupGroup = (match: string[]) => {
        return this.agregation({
            entity: 'grupo',
            field: 'nombre',
            order: 1,
            match: {
                name: {
                    $in: match
                }
            }
        })
    }
    public agreggateGroupSerie = (match: string[]) => {
        return this.agregation({
            entity: 'series',
            field: 'nombre',
            order: 1,
            match: {
                name: {
                    $in: match
                }
            }
        })
    }
    public agreggateGroupTag = (match: string[]) => {
        return this.agregation({
            entity: 'etiquetas',
            field: 'nombre',
            order: 1,
            match: {
                name: {
                    $in: match
                }
            }
        })
    }
    public agreggateGroupCharacter = (match: string[]) => {
        return this.agregation({
            entity: 'personajes',
            field: 'nombre',
            order: 1,
            match: {
                name: {
                    $in: match
                }
            }
        })
    }
    public agreggateGroupArtist = (match: string[]) => {
        return this.agregation({
            entity: 'artistas',
            field: 'nombre',
            order: 1,
            match: {
                name: {
                    $in: match
                }
            }
        })
    }
}
type GetAllNameProps<T> = {
    query: FilterQuery<T>
    sort?: {
        [key: string]: SortOrder | {
            $meta: any;
        };
    }
    page: number
    take: number
}
type GetGroupPaginateProps = {
    aggregate: PipelineStage[]
    sort?: {
        [key: string]: SortOrder | {
            $meta: any;
        };
    }
}
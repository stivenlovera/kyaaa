import { AppDataSource } from "@/config/database";
import { Obra } from "@/entities/obra.entity";
import { ObjectLiteral } from "typeorm";

type Paginate = {
    data: Obra[]
    count: number
}
type CreateAgregationProps = {
    entity: string
    field: string
    order: number
    match?: ObjectLiteral
    skip?: number
}
class RepositoryObra {
    constructor() {

    }
    async GetPaginate(etiqueta: string, entity: string, take: number, skip: number): Promise<Paginate> {
        await AppDataSource.initialize();
        const [result, total] = await AppDataSource.getRepository(Obra).findAndCount(
            {
                where: {
                    'etiquetas': {
                        nombre: etiqueta
                    }
                },
                take: take,
                skip: skip
            }
        );
        await AppDataSource.destroy();
        return {
            data: result,
            count: total,
        }
    }

    async GetOne(code: string): Promise<Obra | null> {
        await AppDataSource.initialize();
        const obra = await AppDataSource.getRepository(Obra).findOne(
            {
                where: {
                    codigo: code
                }
            }
        );
        await AppDataSource.destroy();
        return obra;
    }

    async Paginate(take: number, skip: number): Promise<Paginate> {
        await AppDataSource.initialize();
        const [result, total] = await AppDataSource.getRepository(Obra).findAndCount(
            {
                where: {
                    //fecha:Between(moment('2021-03-08').startOf('day').toDate(),moment('2021-12-08').startOf('day').toDate())
                },
                //order: { fecha: "ASC" },
                take: take,
                skip: skip
            }
        );
        await AppDataSource.destroy();

        return {
            data: result,
            count: total,
        }
    }

    async GetCountGroupAgregate(agregate: ObjectLiteral[]): Promise<Obra[]> {
        await AppDataSource.initialize();
        const obras = await AppDataSource.getMongoRepository(Obra).aggregateEntity(agregate).toArray();
        await AppDataSource.destroy();
        return obras;
    }

    async GetCountGroupAgregatePaginate(agregate: ObjectLiteral[]): Promise<Paginate> {
        await AppDataSource.initialize();
        const obras = await AppDataSource.getMongoRepository(Obra).aggregateEntity(agregate).toArray();
        await AppDataSource.destroy();
        return {
            data: obras,
            count: obras.length,
        }
    }

    CreateAgregation({ entity, field, order, match, skip }: CreateAgregationProps): ObjectLiteral[] {
        let pipeline: ObjectLiteral[] = [
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
                    name: order
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

    abc(): string[] {
        return [
            '123', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
        ]
    }
}
export const repositoryObra = new RepositoryObra();
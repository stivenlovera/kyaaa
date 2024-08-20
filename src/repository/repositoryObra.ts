
import { logger } from "@/config/logger";
import { Obra } from "@/entities/obra.entity";
import { convertJson } from "@/utils/convertes";
import { MongoClient } from "mongodb";
import { DataSource, ObjectLiteral } from "typeorm";

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
export class RepositoryObra {
    dataSource: DataSource;

    constructor(_dataSource: DataSource) {
        this.dataSource = _dataSource
    }

    async GetPaginate(etiqueta: string, entity: string, take: number, skip: number): Promise<Paginate> {
        const [result, total] = await this.dataSource.getRepository(Obra).findAndCount(
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
        return {
            data: result,
            count: total,
        }
    }

    async GetOne(code: string): Promise<Obra | null> {
        const obra = await this.dataSource.getRepository(Obra).findOne(
            {
                where: {
                    codigo: code
                }
            }
        );
        return obra;
    }
 
    async Paginate(take: number, skip: number): Promise<Paginate> {
        const [result, total] = await this.dataSource.getRepository(Obra).findAndCount(
            {
                where: {
                    //fecha:Between(moment('2021-03-08').startOf('day').toDate(),moment('2021-12-08').startOf('day').toDate())
                },
                //order: { fecha: "ASC" },
                take: take,
                skip: skip
            }
        );
        
        return {
            data: result,
            count: total,
        }
    }

    async GetCountGroupAgregate(agregate: ObjectLiteral[]): Promise<Obra[]> {
        logger.info(`GetCountGroupAgregate ${convertJson(agregate)}`)
        const obras = await this.dataSource.getMongoRepository(Obra).aggregate(agregate).toArray();
        return obras;
    }

    async GetCountGroupAgregatePaginate(agregate: ObjectLiteral[]): Promise<Paginate> {
        logger.info(`GetCountGroupAgregatePaginate ${convertJson(agregate)}`)
        const obras = await this.dataSource.getMongoRepository(Obra).aggregate(agregate).toArray();
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


import { oc } from "@orpc/contract"
import z from "zod"

import { MapCreateSchema, MapCreateData, MapPreviewListSchema, MapPreviewListData, MapPreviewSchema, MapPreviewData, MapUpdateSchema, MapUpdateData } from "@repo/schemas"
import { success } from "zod/v4"

const listMaps = oc
    .route({ method: 'GET', path: '/maps', inputStructure: 'detailed' })
    .input(z.object({}))
    .output(MapPreviewListSchema)

const getMap = oc
    .route({ method: 'GET', path: '/maps/{mapId}', inputStructure: 'detailed' })
    .input(z.object({ 
        params: z.object({ mapId: z.coerce.number() })
     }))
    .output(MapPreviewSchema)

const createMap = oc
    .route({ method: 'POST', path: '/maps', inputStructure: 'detailed' })
    .input(z.object({
        body: MapCreateSchema,
    }))
    .output(MapPreviewSchema)

const updateMap = oc
    .route({ method: 'PUT', path: '/maps/{mapId}', inputStructure: 'detailed' })
    .input(z.object({
        params: z.object({ mapId: z.coerce.number() }),
        body: MapUpdateSchema,
    }))
    .output(MapPreviewSchema)

const deleteMap = oc
    .route({ method: 'DELETE', path: '/maps/{mapId}', inputStructure: 'detailed' })
    .input(z.object({
        params: z.object({ mapId: z.coerce.number() }),
    }))
    .output(z.object({
        success: z.boolean(),
    })) 

export const mapsContract = {
    list: listMaps,
    get: getMap,
    create: createMap,
    update: updateMap,
    delete: deleteMap
}
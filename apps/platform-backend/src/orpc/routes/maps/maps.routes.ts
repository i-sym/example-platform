import { implement, ORPCError } from '@orpc/server'

import { mapsContract } from '@repo/contracts'
import { MapsModule } from 'src/modules/MapsModule/MapsModule';

const os = implement(mapsContract)

const listMaps = os.list.handler(async ({ input, context }) => {
    const res = await MapsModule.getInstance().listMaps();
    return res;
})

const getMap = os.get.handler(async ({ input, context }) => {
    const res = await MapsModule.getInstance().getMapById({ mapId: input.params.mapId });
    return res;
})

const createMap = os.create.handler(async ({ input, context }) => {
    const res = await MapsModule.getInstance().createMap({ mapData: input.body });
    return res;
})

const updateMap = os.update.handler(async ({ input, context }) => {
    const res = await MapsModule.getInstance().updateMap({ mapId: input.params.mapId, mapData: input.body });
    return res;
})

const deleteMap = os.delete.handler(async ({ input, context }) => {
    await MapsModule.getInstance().deleteMap({ mapId: input.params.mapId });
    return { success: true };
})


export const mapsRouter = os.router({
    list: listMaps,
    get: getMap,
    create: createMap,
    update: updateMap,
    delete: deleteMap
});
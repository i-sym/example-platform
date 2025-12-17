import type { IncomingHttpHeaders } from 'node:http'
import { implement, ORPCError } from '@orpc/server'
import * as z from 'zod'

import { mapsRouter } from '../../routes/maps/maps.routes'
import { platformBackendContract } from '@repo/contracts'

const os = implement(platformBackendContract)

const health = os.probe.getHealthStatus
    .handler(async () => {
        return { status: 'ok' }
    })


export const router = os.router({
    probe: {
        getHealthStatus: health,
    },
    maps: mapsRouter,
})
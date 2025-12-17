import { oc } from '@orpc/contract'
import z from 'zod'
import { mapsContract } from './maps/maps.contract'
import { platformBackendProbeContract } from './probe/platform-backend-probe.contract'


export const platformBackendContract = {
    maps: mapsContract,
    probe: platformBackendProbeContract,
}
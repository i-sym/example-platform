import type { JsonifiedClient } from '@orpc/openapi-client'
import type { ContractRouterClient } from '@orpc/contract'
import { createORPCClient, onError } from '@orpc/client'
import { OpenAPILink } from '@orpc/openapi-client/fetch'

import { 
    platformBackendContract
 } from '@repo/contracts'
import { env } from '@/config/env'

import 'server-only';

const link = new OpenAPILink(platformBackendContract, {
    url: env.BACKEND_URL,
    headers: () => ({
        'x-api-key': 'my-api-key',
        'Content-Type': 'application/json',
    }),
    fetch: (request, init) => {
        return globalThis.fetch(request, {
            ...init,
            credentials: 'include', // Include cookies for cross-origin requests
        })
    },
    interceptors: [
        onError((error) => {
            console.error(error)
        })
    ],
})

export const platformBackendOrpcClient: JsonifiedClient<ContractRouterClient<typeof platformBackendContract>> = createORPCClient(link)
'use server'

import 'server-only';
import { platformBackendOrpcClient } from '@/clients/platform-backend-client/orpc-client';

export async function listMaps() {
    return await platformBackendOrpcClient.maps.list({});
}
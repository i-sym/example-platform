import { MapPreviewData, MapPreviewListData, MapUpdateData } from "@repo/schemas";

export class MapsModule {
    private static instance: MapsModule;

    public async createMap({ mapData }: { mapData: MapUpdateData }): Promise<MapPreviewData> {
        return {
            id: 1,
            name: mapData.name || "Default Name",
            lat: mapData.lat || 0,
            lng: mapData.lng || 0,
        }
    }

    public async getMapById({ mapId }: { mapId: number }): Promise<MapPreviewData> {
        throw new Error("Method not implemented.");
    }

    public async updateMap({ mapId, mapData }: { mapId: number; mapData: MapUpdateData }): Promise<MapPreviewData> {
        throw new Error("Method not implemented.");
    }

    public async deleteMap({ mapId }: { mapId: number }): Promise<void> {
        throw new Error("Method not implemented.");
    }

    public async listMaps(): Promise<MapPreviewListData> {
        return {
            maps: [
                {
                    id: 1,
                    name: "John Doe",
                    email: "john.doe@example.com"
                }
            ]
        };
    }

    private constructor() {}

    public static getInstance(): MapsModule {
        if (!MapsModule.instance) {
            MapsModule.instance = new MapsModule();
        }
        return MapsModule.instance;
    }

    public async init(): Promise<void> {

    }


}
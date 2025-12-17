import {z} from "zod";

export const MapSchema = z.object({
    id: z.number(),
    name: z.string().min(1),
    lat: z.number(),
    lng: z.number(),
});
export type MapData = z.infer<typeof MapSchema>;


export const MapPreviewSchema = MapSchema.pick({
    id: true,
    name: true,
});
export type MapPreviewData = z.infer<typeof MapPreviewSchema>;

export const MapPreviewListSchema = z.object({
    maps: z.array(MapPreviewSchema),
});
export type MapPreviewListData = z.infer<typeof MapPreviewListSchema>;

export const MapCreateSchema = MapSchema.omit({ id: true });
export type MapCreateData = z.infer<typeof MapCreateSchema>;

export const MapUpdateSchema = MapSchema.partial().omit({ id: true });
export type MapUpdateData = z.infer<typeof MapUpdateSchema>;
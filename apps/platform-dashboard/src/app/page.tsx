import { Button } from "@/components/ui/button";
import { listMaps } from "@/modules/maps/actions";
import Link from "next/link";

export default async function Page() {

    try {
        const maps = await listMaps();
        return (
            <div className="w-full h-full min-h-screen flex flex-col gap-4 items-center justify-center">
               <p>
                   Welcome to the Example Platform Dashboard!
               </p>
               <pre className="mt-4 bg-gray-100 rounded p-4">{JSON.stringify(maps, null, 2)}</pre>
           </div>
       );
   } catch (error) {
       console.error(error);
       return (
           <div className="w-full h-full min-h-screen flex items-center justify-center">
               <p>Failed to load maps</p>
           </div>
       );
   }
}
import { config } from "dotenv";
config();

import { externalServer } from "./orpc/servers/external/orpc-server";
import { env } from "./config/env";
import { MapsModule } from "./modules/MapsModule/MapsModule";


async function main() {

  try {
    console.log('Starting application...');

    await MapsModule.getInstance().init();

  } catch (error) {
    console.error('Error:', error);
  }


  externalServer.listen(
    env.PORT,
    env.HOST,
    () => console.log(`Listening on ${env.HOST}:${env.PORT}`)
  )

  console.log('Application started successfully.');
}


main().catch((error) => {
  console.error('Error occurred:', error);
});



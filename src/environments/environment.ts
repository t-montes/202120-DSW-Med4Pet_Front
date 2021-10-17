// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.

import { TarjetaCredito } from "src/app/tarjetaCredito/tarjetaCredito";

// The list of file replacements can be found in `angular.json`.
const host = 'localhost';
const port = '8080';
const appName = 'frontstepbystep-api';
const rootApi = 'api';


export const environment = {
  production: false,

  baseUrl:`http://${host}:${port}/${rootApi}/`

};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

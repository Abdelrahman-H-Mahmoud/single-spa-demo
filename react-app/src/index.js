import {registerApplication, start} from 'single-spa';
registerApplication(
  'root',
  () => import('./root.app.js'),
  (location) => true
);

registerApplication(
  '@angularApp',
  window["@angularApp"],
  (location) => true
);

start();

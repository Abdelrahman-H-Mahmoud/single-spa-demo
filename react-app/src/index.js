import {registerApplication, start} from 'single-spa';
registerApplication(
  'root',
  () => import('./root.app.js'),
  () => true
);
start();

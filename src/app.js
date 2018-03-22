import { PLATFORM } from 'aurelia-framework';

export class App {
  configureRouter(config, router) {
    this.router = router;
    config.title = 'Life on the Inside';
    config.map([
      { route: ['', 'home'], name: 'home', moduleId: PLATFORM.moduleName('home/index'), nav: true, title: 'Home' },
      { route: 'doula-services', name: 'doula', moduleId: PLATFORM.moduleName('doula/index'), nav: true, title: 'Doula Services' }
      // { route: 'users', name: 'users', moduleId: 'users/index', nav: true, title: 'Users' },
      // { route: 'users/:id/detail', name: 'userDetail', moduleId: 'users/detail' },
      // { route: 'files/*path', name: 'files', moduleId: 'files/index', nav: 0, title: 'Files', href: '#files' }
    ]);
  }
}

export class App {
  configureRouter(config, router){
    config.title = 'Aurelia';
    config.map([
      { route: ['','welcome'],  name: 'welcome',      moduleId: 'welcome',      nav: true, title:'Welcome' },
      { route: 'users',         name: 'users',        moduleId: 'users',        nav: true, title:'Github Users' },
      { route: 'child-router',  name: 'child-router', moduleId: 'child-router', nav: true, title:'Child Router' },
	  { route: 'world',  name: 'world-page', moduleId: 's/components/world-page/world-page', nav: true, title:'World Chapter' },
	  { route: 'country/:id',  name: 'country-page', moduleId: 's/components/country-page/country-page' },
	  { route: 'city/:id',  name: 'city-page', moduleId: 's/components/city-page/city-page' }
    ]);

    this.router = router;
  }
}

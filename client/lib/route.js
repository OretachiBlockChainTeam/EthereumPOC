Router.configure({
  layoutTemplate: 'systemLayout'
});

Router.route('/', function () {
  this.redirect('/dashboard');
});

//URLとRouteテンプレートのマッピングを指定
Router.route('/dashboard', {name: 'dashboard'});
Router.route('/insurers', {name: 'insurers'});
Router.route('/hospitals', {name: 'hospitals'});

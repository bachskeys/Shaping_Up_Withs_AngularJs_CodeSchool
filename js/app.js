

(function() {
  var app = angular.module('gemStore', []);

  app.controller('StoreController', function(){
this.miembros=playa;
  });

  var equipo = [
      { name: 'cesar', img:'cesar.jpg' ,style:'cesar-img-class'},
      { name: 'marco', img:'marco.jpg',style:'marco-img-class'  },
      { name: 'ibarra', img:'ibarra,jpg',style:'ibarra-img-class' },



  ];

  var playa = [
      { name: 'mazatlan', img:'https://mexresorts.com/wp-content/uploads/2016/08/malecon-mazatlan-2.jpg' ,style:'cesar-img-class'},
      { name: 'cancun', img:'https://www.palaceresorts.com/sites/default/files/destination_cancun.jpg',style:'marco-img-class'  },
      { name: 'cabo', img:'http://eltxoromatutino.com/wp-content/uploads/2018/03/3-8-696x464.jpg',style:'ibarra-img-class' },
  ];
})();

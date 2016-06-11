angular.module('home', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {
    
     $urlRouterProvider.otherwise('/home/');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'src/home/home.html',
            controller: 'homeCtrl'
        })
        .state('home.landing', {
            url: '/',
            templateUrl: 'src/home/landing.html',
            controller: 'homeCtrl'
        })
        .state('home.destination', {
            url: '/destination',
            templateUrl: 'src/home/destination.html',
            controller: 'destinationCtrl'
        })
        .state('home.place', {
            url: '/destination/:place',
            templateUrl: 'src/home/place.html',
            controller: 'placeCtrl'
        })
        .state('home.contact', {
            url: '/contact',
            templateUrl: 'src/home/contact.html',
            controller: 'homeCtrl'
        })
        .state('home.about', {
            url: '/about',
            templateUrl: 'src/home/about.html',
            controller: 'homeCtrl'
        })
        .state('home.t&c', {
            url: '/t&c',
            templateUrl: 'src/home/terms&conditions.html',
            controller: 'homeCtrl'
        });
        
})
.controller('homeCtrl', function ($scope, $state, $stateParams,$http,$timeout,toaster) {

$scope.mytime = new Date();

  $scope.hstep = 1;
  $scope.mstep = 1;

  $scope.ismeridian = true;
  $scope.toggleMode = function() {
    $scope.ismeridian = ! $scope.ismeridian;
  };
   
     $scope.loaded = false;    
     $timeout(function() { $scope.loaded = true; }, 5000);
    $scope.myInterval = 5000;
    $scope.testimonials = [{feedback:'Best team outing destinations and amazing experiences.. Cheers to Glamaride',author:'Apeksha'},
                    {feedback:'Wow!!!! Mountains ..falls..trekking.. One of the best ever tour ..Thank you Glamaride', author:'Shweta'},
                    {feedback:'Great Experience First Time I have Stayed In the Forest  ..Thank you Glamaride for making such a Memorable Team Outing', author:'Adarsh'},
                    {feedback:'Good Places to visit with friends I had like to see More Destinations adding up  in Glamaride so that I can have more Fun',author:'Mohan Kumar'},
                    {feedback:'I had been many Places with friends but for the First time Such a  wonderful place Really  awesome Its because of Glamaride Thank you Glamaride', author:'Shashikant'},
                    {feedback:'Affordable and best service and mind blowing destination', author:'Swati'}];



       $scope.enquires = function() {
           console.log("hiiiii",$scope.enquire);
           $http({
            method: 'POST',
            url: "src/home/enquire.php",
            data: $scope.customize,
            headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
         }).success(function(data,status){
            toaster.pop('success', "Submitted", "Thank you! Our team will get in touch with you soon");
            $scope.code=status;    
            $scope.enquire={};
            
        });

      };

        $scope.customise = function() {
           console.log($scope.customize);
           $http({
            method: 'POST',
            url: "src/home/customise.php",
            data: $scope.customize,
            headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
         }).success(function(data,status){
            toaster.pop('success', "Submitted", "Thank you! Our team will get in touch with you soon");
            $scope.code=status;    
            $scope.customize={};
            
        });

      };

       $scope.contacts = function() {
           console.log($scope.contact);
           $http({
            method: 'POST',
            url: "src/home/contact.php",
            data: $scope.contact,
            headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
         }).success(function(data,status){
            toaster.pop('success', "Submitted", "Thank you! Our team will get in touch with you soon");
            $scope.code=status;    
            $scope.contact={};
            
        });

      };


      $scope.requestCall = function(){


        console.log($scope.enq);
          $http({
            method: 'POST',
            url: "src/home/enq.php",
            data: $scope.enq,
            headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
         }).success(function(data,status){
            toaster.pop('success', "Submitted", "Thank you! Our team will get in touch with you soon");
            $scope.code=status;    
            $scope.contact={};
            
        });

      }
})
.controller('destinationCtrl', function ($scope, $state, $stateParams,$http) {
   $scope.destinations=[{src:'images/destinations/dandeli/dandeli.jpg',text:'Dandeli',link:"home.place({place:'Dandeli'})"},{src:'images/destinations/goa/goabg.jpg',text:'Goa',link:"home.place({place:'Goa'})"},
                  {src:'images/destinations/hampi/hampi.jpg',text:'Hampi',link:"home.place({place:'Hampi'})"},{src:'images/destinations/yercaud/yercaud.jpg',text:'Yercaud',link:"home.place({place:'Yercaud'})"},
                  {src:'images/destinations/gokarna/gokarna.jpg',text:'Gokarna',link:"home.place({place:'Gokarna'})"},
				  {src:'images/destinations/wayanad/wayanad.jpg',text:'Wayanad',link:"home.place({place:'Wayanad'})"},
                  {src:'images/destinations/munnar/munnar.jpg',text:'Munnar' ,link:"home.place({place:'Munnar'})"},{src:'images/destinations/coonoor/coonoor.jpg',text:'Coonoor' ,link:"home.place({place:'Coonoor'})"},
                  {src:'images/destinations/ooty/ooty.jpg',text:'Ooty',link:"home.place({place:'Ooty'})",link:"home.place({place:'Ooty'})"},
                  {src:'images/destinations/coorg/coorg.jpg',text:'Coorg',link:"home.place({place:'Coorg'})"},{src:'images/destinations/kurumgad/kurumgad.jpg',text:'Kurumgad Island',link:"home.place({place:'Kurumgad Island'})"},
                  {src:'images/destinations/mullayangiri/mullayangiri.jpg',text:'Mullayangiri',link:"home.place({place:'Mullayangiri'})"},
                  {src:'images/destinations/mary/mary.jpg',text:'Malpe',link:"home.place({place:'Malpe'})"},{src:'images/destinations/mysore/mysore.jpg',text:'Mysore',link:"home.place({place:'Mysore'})"},
                  {src:'images/destinations/chikmagalur/chikmagalur.jpg',text:'Chikmagalur',link:"home.place({place:'Chikmagalur'})"},
				  {src:'images/destinations/Alleppey/Alleppey.jpg',text:'Alleppey',link:"home.place({place:'Alleppey'})"},
				  {src:'images/destinations/Papikondalu/Papi.JPG',text:'Papikondalu',link:"home.place({place:'Papikondalu'})"},
				  {src:'images/destinations/Dhanushkodi/dhanushkodi.jpg',text:'Dhanushkodi',link:"home.place({place:'Dhanushkodi'})"},
				  {src:'images/destinations/Maravanthe/maravanthe-beach.jpg',text:'Maravanthe Beach',link:"home.place({place:'Maravanthe Beach'})"},
				  {src:'images/destinations/Athirapally/Athirapally.jpg',text:'Athirapally Falls',link:"home.place({place:'Athirapally'})"},
				  {src:'images/destinations/Gandikota/Gandikota.jpg',text:'Gandikota',link:"home.place({place:'Gandikota'})"},
				  {src:'images/destinations/Thekkekadu/thekkekadu.jpg',text:'Thekkekadu',link:"home.place({place:'Thekkekadu'})"},
				  {src:'images/destinations/araku/araku.jpg',text:'Araku Valley',link:"home.place({place:'Araku Valley'})"},
                  ];  

  })   
.controller('placeCtrl', function ($scope, $state, $stateParams,$http) {
  $scope.place=$stateParams.place;
  
console.log($scope.place);
  $scope.descr={};
    $http.get("src/home/destination.json")
    .success(function(response) {
      $scope.descriptions= response.dest;
      console.log($scope.descriptions);
      angular.forEach($scope.descriptions,function(value,key){
      if($scope.descriptions[key].Name==$scope.place){
       $scope.descr=$scope.descriptions[key];
       $scope.whatToDo=$scope.descr.whatToDo;
       $scope.whatTosee=$scope.descr.whatTosee;
       $scope.imageBg = $scope.descr.imageBg;
       $scope.image1 = $scope.descr.image1;
       $scope.image2 = $scope.descr.image2;
       $scope.image3 = $scope.descr.image3;
       $scope.placeid= $scope.descr.id;
       $scope.bestTimeToVisit = $scope.descr.BestTimeToVisit;
       $scope.tagline=$scope.descr.tagline;

       console.log($scope.whatToDo);

    }
  

    })
    });

    $scope.next = function(value){  
    var array=["Goa","Coorg","Ooty","Wayanad","Kurumgad Island","Gokarna","Dandeli","Yercaud","Hampi","Mysore","Malpe","Munnar","Coonoor","Chikmagalur","Mullayangiri","Alleppey","Papikondalu-Papi Hills","Dhanushkodi","Maravanthe Beach","Athirapally Falls","Gandikota","Thekkekadu","Araku Valley"];
      index = array.indexOf(value);
      if(index >= 0 && index < array.length - 1){
        nextItem = array[index + 1]
        $state.go('home.place', {place: nextItem});
      }else{
        nextItem = array[0];
        $state.go('home.place', {place: nextItem});
      }
      

    }

    $scope.placeEnquiry = function(){

         console.log($scope.place);
           $http({
            method: 'POST',
            url: "src/home/placeEnquiry.php",
            data: $scope.place,
            headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
         }).success(function(data,status){
            toaster.pop('success', "Submitted", "Thank you! Our team will get in touch with you soon");
            $scope.code=status;    
            $scope.place={};
            
        });
    }


})


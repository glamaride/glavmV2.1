angular.module('glamApp', ['ui.router','ui.bootstrap','toaster', 'ngAnimate', 'angular-input-stars','home']);

// .config(function($stateProvider, $urlRouterProvider) {
    
//     $urlRouterProvider.otherwise('/');
    
//     $stateProvider
        
//         // HOME STATES AND NESTED VIEWS ========================================
//         .state('home', {
//             url: '/',
//             templateUrl: 'src/home.html',
//             controller: 'homeCtrl'
//         })
//         .state('destination', {
//             url: '/destination',
//             templateUrl: 'src/destination.html',
//             controller: 'destinationCtrl'
//         })
//         .state('place', {
//             url: '/destination/:place',
//             templateUrl: 'src/place.html',
//             controller: 'placeCtrl'
//         })
//         .state('contact', {
//             url: '/contact',
//             templateUrl: 'src/contact.html',
//             controller: 'homeCtrl'
//         })
//         .state('about', {
//             url: '/about',
//             templateUrl: 'src/about.html',
//             controller: 'homeCtrl'
//         })
//         .state('t&c', {
//             url: '/t&c',
//             templateUrl: 'src/terms&conditions.html',
//             controller: 'homeCtrl'
//         });
        
// })
// .controller('homeCtrl', function ($scope, $state, $stateParams,$http,$timeout,toaster) {


   
//      $scope.loaded = false;    
//      $timeout(function() { $scope.loaded = true; }, 5000);
//     $scope.myInterval = 5000;
//     $scope.testimonials = [{feedback:'Best team outing destinations and amazing experiences.. Cheers to Glamaride',author:'Apeksha'},
//                     {feedback:'Wow!!!! Mountains ..falls..trekking.. One of the best ever tour ..Thank you Glamaride', author:'Shweta'},
//                     {feedback:'Great Experience First Time I have Stayed In the Forest  ..Thank you Glamaride for making such a Memorable Team Outing', author:'Adarsh'},
//                     {feedback:'Good Places to visit with friends I had like to see More Destinations adding up  in Glamaride so that I can have more Fun',author:'Mohan Kumar'},
//                     {feedback:'I had been many Places with friends but for the First time Such a  wonderful place Really  awesome Its because of Glamaride Thank you Glamaride', author:'Shashikant'},
//                     {feedback:'Affordable and best service and mind blowing destination', author:'Swati'}];



//        $scope.enquires = function() {
//            console.log("hiiiii",$scope.enquire);
//            $http({
//             method: 'POST',
//             url: "src/enquire.php",
//             data: $scope.customize,
//             headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
//          }).success(function(data,status){
//             toaster.pop('success', "Submitted", "Thank you! Our team will get in touch with you soon");
//             $scope.code=status;    
//             $scope.enquire={};
            
//         });

//       };

//         $scope.customise = function() {
//            console.log($scope.customize);
//            $http({
//             method: 'POST',
//             url: "src/customise.php",
//             data: $scope.customize,
//             headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
//          }).success(function(data,status){
//             toaster.pop('success', "Submitted", "Thank you! Our team will get in touch with you soon");
//             $scope.code=status;    
//             $scope.customize={};
            
//         });

//       };

//        $scope.contacts = function() {
//            console.log($scope.contact);
//            $http({
//             method: 'POST',
//             url: "src/contact.php",
//             data: $scope.contact,
//             headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
//          }).success(function(data,status){
//             toaster.pop('success', "Submitted", "Thank you! Our team will get in touch with you soon");
//             $scope.code=status;    
//             $scope.contact={};
            
//         });

//       };
// })
// .controller('destinationCtrl', function ($scope, $state, $stateParams,$http) {
//    $scope.destinations=[{src:'images/destinations/dandeli/dandeli.jpg',text:'Dandeli',link:"place({place:'Dandeli'})"},{src:'images/destinations/goa/goabg.jpg',text:'Goa',link:"place({place:'Goa'})"},
//                   {src:'images/destinations/hampi/hampi.jpg',text:'Hampi',link:"place({place:'Hampi'})"},{src:'images/destinations/yercaud/yercaud.jpg',text:'Yercaud',link:"place({place:'Yercaud'})"},
//                   {src:'images/destinations/gokarna/gokarna.jpg',text:'Gokarna',link:"place({place:'Gokarna'})"},
// 				  {src:'images/destinations/wayanad/wayanad.jpg',text:'Wayanad',link:"place({place:'Wayanad'})"},
//                   {src:'images/destinations/munnar/munnar.jpg',text:'Munnar' ,link:"place({place:'Munnar'})"},{src:'images/destinations/coonoor/coonoor.jpg',text:'Coonoor' ,link:"place({place:'Coonoor'})"},
//                   {src:'images/destinations/ooty/ooty.jpg',text:'Ooty',link:"place({place:'Ooty'})",link:"place({place:'Ooty'})"},
//                   {src:'images/destinations/coorg/coorg.jpg',text:'Coorg',link:"place({place:'Coorg'})"},{src:'images/destinations/kurumgad/kurumgad.jpg',text:'Kurumgad Island',link:"place({place:'Kurumgad Island'})"},
//                   {src:'images/destinations/mullayangiri/mullayangiri.jpg',text:'Mullayangiri',link:"place({place:'Mullayangiri'})"},
//                   {src:'images/destinations/mary/mary.jpg',text:'Malpe',link:"place({place:'Malpe'})"},{src:'images/destinations/mysore/mysore.jpg',text:'Mysore',link:"place({place:'Mysore'})"},
//                   {src:'images/destinations/chikmagalur/chikmagalur.jpg',text:'Chikmagalur',link:"place({place:'Chikmagalur'})"}
//                   ];  

//   })   
// .controller('placeCtrl', function ($scope, $state, $stateParams,$http) {
//   $scope.place=$stateParams.place;
  
// console.log($scope.place);
//   $scope.descr={};
//     $http.get("src/destination.json")
//     .success(function(response) {
//       $scope.descriptions= response.dest;
//       console.log($scope.descriptions);
//       angular.forEach($scope.descriptions,function(value,key){
//       if($scope.descriptions[key].Name==$scope.place){
//        $scope.descr=$scope.descriptions[key];
//        $scope.whatToDo=$scope.descr.whatToDo;
//        $scope.whatTosee=$scope.descr.whatTosee;
//        $scope.imageBg = $scope.descr.imageBg;
//        $scope.image1 = $scope.descr.image1;
//        $scope.image2 = $scope.descr.image2;
//        $scope.image3 = $scope.descr.image3;
//        $scope.placeid= $scope.descr.id;
//        $scope.bestTimeToVisit = $scope.descr.BestTimeToVisit;
//        $scope.tagline=$scope.descr.tagline;

//        console.log($scope.whatToDo);

//     }
  

//     })
//     });

//     $scope.next = function(value){  
//     var array=["Goa","Coorg","Ooty","Wayanad","Kurumgad Island","Gokarna","Dandeli","Yercaud","Hampi","Mysore","Malpe","Munnar","Coonoor","Chikmagalur","Mullayangiri"];
//       index = array.indexOf(value);
//       if(index >= 0 && index < array.length - 1){
//         nextItem = array[index + 1]
//         $state.go('place', {place: nextItem});
//       }else{
//         nextItem = array[0];
//         $state.go('place', {place: nextItem});
//       }
      

//     }

//     $scope.placeEnquiry = function(){

//          console.log($scope.place);
//            $http({
//             method: 'POST',
//             url: "src/placeEnquiry.php",
//             data: $scope.place,
//             headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
//          }).success(function(data,status){
//             toaster.pop('success', "Submitted", "Thank you! Our team will get in touch with you soon");
//             $scope.code=status;    
//             $scope.place={};
            
//         });
//     }


// })


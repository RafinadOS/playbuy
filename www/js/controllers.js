playbuy.controller('playbuyCtrl', function($scope, $http) {


  // цепляем жЫсонку
  $http.get('films/films.json').success(function(data, headers){
    $scope.filmlist = data;
  });

  $http.get('films/filmstime.json').success(function(data, headers){
    $scope.filmlisttime = data;
  });

  // аккордеоним список
  $scope.films = [];
  for (var i=0; i<10; i++) {
    $scope.films[i] = {
      name: i,
      items: []
    };
  }
  $scope.toggleGroup = function(film) {
    if ($scope.isGroupShown(film)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = film;
    }
  };
  $scope.isGroupShown = function(film) {
    return $scope.shownGroup === film;
  };
  $scope.toggleSeat = function(film) {
    if ($scope.isSeatShown(film)) {
      $scope.shownSeat = null;
    } else {
      $scope.shownSeat = film;
    }
  };

  $scope.isSeatShown = function(film) {
    return $scope.shownSeat === film;
  };
  $scope.isSeatShown = function(film) {
    return $scope.shownSeat === film;
  };

  // свайпим для выбора места
  $scope.isSeatShown = function(film) {
    return $scope.shownSeat === film;
  };
  $scope.isSeatShown = function(film) {
    return $scope.shownSeat === film;
  };



  // далее все для фильтра 
  var date = new Date();

  $scope.today = date;



});
﻿/*==========================================================
    Author      : Ranjithprabhu K
    Date Created: 24 Dec 2015
    Description : Base for Dashboard Application module
    
    Change Log
    s.no      date    author     description     
    

 ===========================================================*/

var dashboard = angular.module('dashboard', ['ui.router', 'ngAnimate','ngMaterial']);


dashboard.config(["$stateProvider", function ($stateProvider,$stateParams) {

    //dashboard home page state
    $stateProvider.state('app.dashboard', {
        url: '/dashboard',
        templateUrl: 'app/modules/dashboard/views/home.html',
        controller: 'HomeController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Home'
        }
    });

    //skills page state
    $stateProvider.state('app.skills', {
        url: '/skills',
        templateUrl: 'app/modules/dashboard/views/skills.html',
        controller: 'SkillController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Skills'
        }
    });

    //education page state
    $stateProvider.state('app.education', {
        url: '/education',
        templateUrl: 'app/modules/dashboard/views/education.html',
        controller: 'EducationController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Dashboard Home'
        }
    });

    //Achievements page state
    $stateProvider.state('app.achievements', {
        url: '/achievements',
        templateUrl: 'app/modules/dashboard/views/achievements.html',
        controller: 'AchievementsController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Achievements'
        }
    });

    //Recent Projects page state
    $stateProvider.state('app.recent', {
        url: '/recent-projects',
        templateUrl: 'app/modules/dashboard/views/recent.html',
        controller: 'RecentController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Recent Projects'
        }
    });

    //Experience page state
    $stateProvider.state('app.experience', {
        url: '/experience',
        templateUrl: 'app/modules/dashboard/views/experience.html',
        controller: 'ExperienceController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Experience'
        }
    });

    // Portfolio page state
    $stateProvider.state('app.portfolio', {
        url: '/portfolio',
        templateUrl: 'app/modules/dashboard/views/portfolio.html',
        controller: 'PortfolioController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Portfolio'
        }
    });

    //About Me page state
    $stateProvider.state('app.about', {
        url: '/about-me',
        templateUrl: 'app/modules/dashboard/views/about.html',
        controller: 'AboutController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'About Me'
        }
    });

    //Contact page state
    $stateProvider.state('app.contact', {
        url: '/contact',
        templateUrl: 'app/modules/dashboard/views/contact.html',
        controller: 'ContactController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Contact Me'
        }
    });

    //Websites page state
    $stateProvider.state('app.websites', {
        url: '/websites',
        templateUrl: 'app/modules/dashboard/views/websites.html',
        controller: 'WebsitesController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Websites'
        }
    });

    //Gallery page state
    $stateProvider.state('app.gallery', {
        url: '/gallery',
        templateUrl: 'app/modules/dashboard/views/gallery.html',
        controller: 'GalleryController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Gallery'
        }
    });

    //Search page state
    $stateProvider.state('app.search', {
        url: '/search',
        templateUrl: 'app/modules/dashboard/views/search.html',
        controller: 'appCtrl',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Search'
        }
    });

    //new post page state
    $stateProvider.state('app.newPost', {
        url: '/newPost',
        templateUrl: 'app/modules/dashboard/views/newpost.html',
        controller: 'newPostController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'New Post'
        }
    });

    //view posts page state
    $stateProvider.state('app.viewPosts', {
        url: '/viewPosts',
        templateUrl: 'app/modules/dashboard/views/viewposts.html',
        controller: 'viewPostsController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'View Posts'
        },
        resolve: {
            id: ['$stateParams', function ($stateParams) {
                return $stateParams.id; //By putting this here...
            }]
        }

    });

    //view posts page state
    $stateProvider.state('app/readPost', {
        cache: false,
        url: '/readPost/:id',
        templateUrl: 'app/modules/dashboard/views/readpost.html',
      /*  controller: 'readPostsController',*/
        controller: function ($scope,$http,$stateParams) {
            console.log("coming to readPostsController");
            console.log(" $stateParams.id "+  $stateParams.id);

            var getAllPostUrl = '/webapi/blogPost/' + $stateParams.id;
            $http.get(getAllPostUrl)
                .success(function (response) {
                    $scope.id = $stateParams.id;
                    console.log("coming to  success");
                    console.log("  response.length "+response.length);
                    $scope.myText = "dsfffffffffffffffffffffff";
                    $scope.viewPost = response;
                    if (response.length > 0) {
                        console.log("if response.length "+response.length);
                        $scope.postIsEmpty = true;
                        $scope.viewPost = response;
                        $scope.alerts = [{}];
                        $scope.alerts.push({type: 'success', msg: 'Update Success'});
                        $scope.truck_type = {};
                        $scope.matrialType = '';
                        $scope.maxCapacity = '';
                        $scope.noOfTrucks = '';
                    }
                    else {
                        console.log("else response.length "+response.length);
                        $scope.postIsEmpty = false;
                        $scope.alerts = [{}];
                        $scope.alerts.push({type: 'warning', msg: 'Update Failed'});
                    }
                })
                .error(function (response) {
                    $scope.alerts = [{}];
                    $scope.alerts.push({type: 'danger', msg: 'Something went wrong network Failure.'});
                })
            $scope.viewArticleById = function(id) {
                console.log("psot " + id);



            };


            $scope.viewArticleById($stateParams.id);




        },
        controllerAs: 'vm',
        data: {
            pageTitle: 'View Posts'
        }
    });

}]);


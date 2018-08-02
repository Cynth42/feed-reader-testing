/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
  'use strict';
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    // Test suite for RSS feed variable
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        //Check if allFeeds variable is defined and not empty
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(" ");
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         //Check if feed's url property is defined and not empty
         it('have URLs defined', function() {
           for (let feed of allFeeds) {
             expect(feed.url).toBeDefined();
             expect(feed.url.length).not.toBe(" ");

           }
         });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         //Ensures that name is defined and not empty
         it('has name defined', function() {
           for (let feed of allFeeds) {
             expect(feed.name).toBeDefined();
             expect(feed.name.length).not.toBe(" ");
           }
         });
    });


    /* TODO: Write a new test suite named "The menu" */
    //Test suite for the apps menu functionality
    describe('The menu', function() {

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
         // Ensures that default state of menu is hidden on page Load
          it('is hidden by default on page load', function() {
           const body = document.querySelector('body');
           expect(body.classList.contains('menu-hidden')).toBe(true);
          });


         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          //Check that menu toggles on and off from multiple clicks as expected
          it('changes visibility when it is clicked', function() {

            const menuIcon = document.querySelector('.menu-icon-link');
            const body = document.querySelector('body');

            menuIcon.click();
            expect(body.classList.contains('menu-hidden')).toBe (false);

            menuIcon.click();
            expect(body.classList.contains('menu-hidden')).toBe(true);
          });
      });

      /* TODO: Write a new test suite named "Initial Entries" */

          /* TODO: Write a test that ensures when the loadFeed
           * function is called and completes its work, there is at least
           * a single .entry element within the .feed container.
           * Remember, loadFeed() is asynchronous so this test will require
           * the use of Jasmine's beforeEach and asynchronous done() function.
           */

      //test suite for initial load of feed
     describe('Initial Entries', function() {

        //Loads feedList and wait until work is completed
       beforeEach(function(done) {
          loadFeed(0, done);
       });

        //Checks that completed work contains content
       it('should have atleast one .entry within .feed when loadFeed is called', function() {   
         const feedContainer = document.querySelector('.feed');
         expect(feedContainer.children.length).toBeGreaterThan(0);
       })
    });

      /* TODO: Write a new test suite named "New Feed Selection" */

          /* TODO: Write a test that ensures when a new feed is loaded
           * by the loadFeed function that the content actually changes.
           * Remember, loadFeed() is asynchronous.
           */
      //Test suite for loading new content after initial load
    // describe('New Feed Selection', function() {
      //    const feedContainer = document.querySelector('.feed');
      //    const firstNewFeed = [];

      //    beforeEach(function (done) {

            //Loads first new feed
      //        loadFeed(0);

            //Add values of first new feed into array
      //         Array.from(feedContainer.children).forEach(content => {
            //  for (let content of firstNewFeed) {
        //        firstNewFeed.push(content.innerText);
      //        });

            //Load ssecond new feed
        //    loadFeed(1, done);
    //      });

          //compare first feed against new feed content
      //      it('should change content when new feed is loaded', function() {
          //  for (let content of firstNewFeed) {
        //     Array.from(feedContainer.children).forEach(content, index) => {
        //      expect(content.innerText).not.toEqual(firstNewFeed[index}]);
        //    };
        //  });
    //  });
}());

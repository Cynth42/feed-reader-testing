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
    //Test suite for RSS feed variable
    describe('RSS Feeds', () => {

      //Checks if allFeeds variable is defined and not empty
      it('are defined', () => {
        expect(allFeeds).toBeDefined();
        expect(allFeeds.length).not.toBe(" ");
      });

      //Checks if feed's url is defined and not empty
      it('have URLs defined', () => {
        for (let feed of allFeeds) {
          expect(feed.url).toBeDefined();
          expect(feed.url.length).not.toBe(" ");
        }
      });

      //Ensures that name is defined and not empty
      it('has name defined', () => {
        for (let feed of allFeeds) {
          expect(feed.name).toBeDefined();
          expect(feed.name.length).not.toBe(" ");
        }
      });
    });

    //Test suite for the apps menu functionality
    describe('The menu', () => {

      //Ensures that default state of menu is hidden on page Load
      it('is hidden by default on page load', () => {
        const body = document.querySelector('body');
        expect(body.classList.contains('menu-hidden')).toBe(true);
      });

      //Check that menu toggles on and off from multiple clicks as expected
      it('changes visibility when it is clicked', () => {
        const menuIcon = document.querySelector('.menu-icon-link');
        const body = document.querySelector('body');

        menuIcon.click();
        expect(body.classList.contains('menu-hidden')).toBe (false);

        menuIcon.click();
        expect(body.classList.contains('menu-hidden')).toBe(true);
      });
    });

    //test suite for initial load of feed
    describe('Initial Entries', () => {
      //Loads feedList and wait until work is completed
      beforeEach(done => {
        loadFeed(0, done);
      });

      //Ensures that completed work contains content
      it('should have atleast one entry within feed container when loadFeed is called', () => {
        const feedContainer = document.querySelector('.feed');
        expect(feedContainer.children.length).toBeGreaterThan(0);
      })
    });

    //Test suite for loading new content after initial load
    describe('New Feed Selection', () => {
      beforeEach(done => {
        //Loads first new feed
        loadFeed(0, () => {
         //Using the window object to point to the DOM document from knowledge and looked it up on MDN Doc
          window.firstNewFeed = document.querySelector('.entry').innerText;
           //Loads second new feed
            loadFeed(1, () => {
              window.secondNewFeed = document.querySelector('.entry').innerText;
              done();
             });
          });
        });
      
        //Compares the two loaded feeds content to see if they change
        it('should change content when new feed is loaded', function() {
          expect(firstNewFeed).not.toEqual(secondNewFeed);
        });
     });
}());

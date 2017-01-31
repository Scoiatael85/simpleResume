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
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it("all have defined URLs that are not empty", function() {
            allFeeds.forEach(function(feed) {
                // loop passes through each feed of the allFeeds array
                // and confirms a URL string exists and isn't empty
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });



        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it("all have names that are not empty", function() {
            allFeeds.forEach(function(feed) {
                // loop passes through each feed of the allFeeds array
                // and confirms a name string exists and isn't empty
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe("The menu", function() {
        // calling to the body of the webpage and the menu's hamburger button
        var body = document.body,
            menuButton = document.querySelector(".menu-icon-link");
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it("is hidden by default", function() {
            // ensureing the page loads with a css class that makes the menu
            // slide off the left of the page, making it out of view
            expect(body.className).toContain("menu-hidden");
        });

        /* TODO: Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
        it("toggles to display when on clicking the menu icon", function() {
            // clicks the menu button, and checks to make sure the css class is removed
            // this allows the menu to slide on the page, into view
            menuButton.click();
            expect(body.className).not.toContain("menu-hidden");
            // reverses the test we just made. Menu back out of view
            menuButton.click();
            expect(body.className).toContain("menu-hidden");
        });
    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe("Initial Entries", function() {
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function(done) {
            // sends in the id of 0, and set the call back function
            loadFeed(0, function() {
                done();
            });
        });

        it("are ≥ 1 entry after loadFeed() is called", function(done) {
            // checks to see the number of items appened with the enrty class, and confirms
            // there is at least 1 of them. This is to ensure the feedreader is loading feeds
            var entryAmount = document.querySelector(".feed").getElementsByClassName("entry").length;
            expect(entryAmount).toBeGreaterThan(0);
            done();
        });

        it("including a link starting with 'http(s)://' are ≥ 1", function(done) {
            // since we know that there are feeds, we want to make sure the hyperlinks
            // are there for easy navigation. This confirms there are infact hyperlinks
            // to URLs, and not some local device navigation. eg (ScottiMac/Documents/udacity/projects/)
            var entries = document.querySelector(".feed").getElementsByClassName("entry-link");
            for (var i = 0; i < entries.length; i++) {
                expect(entries[i].href).toMatch(/^(http|https):\/\//);
            }
            done();
        });
    });
    /* TODO: Write a new test suite named "New Feed Selection" */
    describe("New Feed Selection", function() {
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        var initFeed;
        beforeEach(function(done) {
            loadFeed(0, function() {
                // sets the current feed as the initial feed to allow next test to function
                initFeed = document.querySelector(".feed").innerHTML;

                loadFeed(1, function() {
                    done();
                });
            });
        });

        it("when the feed is changed, new content is loaded", function(done) {
            // looks for the content of the new feed and confirms that it doesn't
            // match the previous feed. ensure it changes each time.
            var newFeed = document.querySelector(".feed").innerHTML;
            expect(initFeed).not.toBe(newFeed);
            done();
        });
    });

}());
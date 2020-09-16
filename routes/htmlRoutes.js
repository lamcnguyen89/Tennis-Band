//=============================================
// DEPENDENCIES
// include the path module to allow the JS file to move to the correct path to the specified file
//=============================================
const path = require("path");

//=============================================
// ROUTING
//=============================================

module.exports = function(app) {

    // GET `/` is the index file or the About Me page:
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
 
    // GET "/music" shows the portfolio page
    app.get("/music", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/music.html"));
    });
    
    // GET "/contact" shows the Contact Me page
    app.get("/contact", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/contact.html"));
    });

    // GET "/thanks" shows the thank you page after someone submits a message on the contact form
    app.get("/thanks", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/thanks.html"));
    });

    // GET "/store" shows the Contact Me page
    app.get("/store", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/contact.html"));
    });

    // GET "/error" shows the thank you page after someone submits a message on the contact form
    app.get("/error", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/error.html"));
    });


    // GET `*` - Should return the `error.html` file. I've got to remember that this * means "all other" and it has to go last in all the get and post requests. Otherwise nothing else will work
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/error.html"));
    });

};
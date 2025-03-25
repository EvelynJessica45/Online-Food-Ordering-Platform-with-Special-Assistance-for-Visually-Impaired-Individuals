

function aboutController() {
    return {
        index(req, res) {
            res.render('AboutPage');
        }
    };
}

module.exports = aboutController;

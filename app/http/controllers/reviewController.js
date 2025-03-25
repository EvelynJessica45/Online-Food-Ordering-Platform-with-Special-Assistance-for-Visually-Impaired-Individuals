function reviewController() {
    return {
        index(req, res) {
            res.render('Review'); 
        }
    };
}

module.exports = reviewController;

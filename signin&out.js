
// sign in
router.post('/signin', (req, res, next) => {
   
    user.login(req.body.username, req.body.password, function(result) {
        if(result) {
           
            req.session.user = result;
            req.session.opp = 1;
            // goto  home page.
            res.redirect('../MainWebsite/index');
        }else {
           
            res.send('Username/Password incorrect!');
        }
    })

});


// signup
router.post('/signup', (req, res, next) => {
    
    let userInput = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    };
    
    user.create(userInput, function(lastId) {
        
        if(lastId) {
            
            user.find(lastId, function(result) {
                req.session.user = result;
                req.session.opp = 0;

                // goto  home page.
                res.redirect('../MainWebsite/index');
            });

        }else {
            console.log('Error happens ...');
        }
    });

});

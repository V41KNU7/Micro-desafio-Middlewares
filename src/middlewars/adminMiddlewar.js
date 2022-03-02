let admins = ["Ada", "Greta", "Vim", "Tim"];



function adminValidator (req, res, next) {

    let user = req.query.user;

    if(user){
        
        let admin = admins.find( admin => user == admin );
        
        admin != undefined ? next() : res.send('Usted no es un administrador');

    } 
    else{
        res.send('Usted no es un administrador');
    };
}

module.exports = adminValidator;
const express = require("express"); // const { request } = require("http");
const session = require("express-session");
const req = require("express/lib/request");
const res = require("express/lib/response");

const app = express();  //make app an express app

const port = process.env.PORT || "3800"; //name the port

app.use('/public', express.static('public')); //enable access to the public folder -- app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded({extended: true}));  //instead of using body parser, parses the incoming requests with JSON payloads
app.use(express.json());

app.use(session({
    secret: "random string aka mythic",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  })
);

app.set("view engine", "ejs");  //get ejs working

app.get("/", (req, res) => {
    let my_user = "";
    let puncuation = "";
    let invalid_login = false;

    invalid_login = req.query.reason || null;

    if (req.session && req.session.username){
        my_user = req.session.username;
        puncuation = ",";
    }
    const user = req.session ? req.session.username : "User not set";

    res.render("index", {my_user: user, puncuation: puncuation, invalid_login: invalid_login});   
});

app.get("/signout", (req, res) => {
    req.session.destroy(() => {
        res.end("You have signed out");    //terminates the response cycle
    });
});

app.post("/signup", (req, res) => {
    const valid_users = [
        {"name":"sue", "password":"sue"}, 
        {"name":"joe", "password":"joe"}, 
        {"name":"shay", "password":"shay"}
    ];
    const user = req.body.username;
    const pass = req.body.password;

    const found_user = valid_users.find(usr => {
        return usr.name == user && usr.password == pass
    });

    if (found_user){
        req.session.username = user;
        res.redirect("/dock");
    } else {
        req.session.destroy(() => {
            console.log("user reset");
        });
        res.redirect("/?reason=invalid_user&day=fay");
    }
});

const validation = (req, res, next) => {     //putting logic in one place -- middleware function
    if (req.session && req.session.username) {
        next();
    } else {
        res.redirect("/?reason=invalid_login");
    }
}

app.get("/dock", (req, res) => {
    if (req.session && req.session.username) {   //having logic inside the route
        res.render("dock", {user: req.session.username });
    } else {
        res.redirect("/");
    }
});

app.get("/boardwalk", validation, (request, response) => {   //manualling having validation ran before a route
    response.render("boardwalk");
})

app.get("/*", validation); //catch all for remaining routes

//const mw1 = (req, res, next) => {
//     next();
// }
//const mw2 = (req, res, next) => {
//     next();
// }
//const middlewares = [mw1, mw2, validation];    -- an array of middleware functions
//app.get("/*", middlewares);

app.get("/boardwalk2", (request, response) => {
    response.render("boardwalk2");
})

app.get("/beach", (request, response) => {
    response.render("beach");
})

app.get("/cove", (request, response) => {
    response.render("cove");
})

app.get("/depart", (request, response) => {
    response.render("depart");
})

app.get("/mountains", (request, response) => {
    response.render("mountains");
})

app.get("/continue", (request, response) => {
    response.render("continue");
})

app.get("/snowy", (request, response) => {
    response.render("snowy");
})

app.get("/rocky", (request, response) => {
    response.render("rocky");
})

app.get("/tourists", (request, response) => {
    response.render("tourists");
})

app.get("/cave", (request, response) => {
    response.render("cave");
})

app.get("/dragon", (request, response) => {
    response.render("dragon");
})

app.get("/woods", (request, response) => {
    response.render("woods");
})

app.get("/left", (request, response) => {
    response.render("left");
})

app.get("/right", (request, response) => {
    response.render("right");
})

app.get("/unicorn", (request, response) => {
    response.render("unicorn");
})

app.get("/mom", (request, response) => {
    response.render("mom");
})

app.get("/lost", (request, response) => {
    response.render("lost");
})

app.get("/fairy", (request, response) => {
    response.render("fairy");
})


//listens to port???
app.listen(port, () => {
    console.log(`listening on port ${port}`);
})
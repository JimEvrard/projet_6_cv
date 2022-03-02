import express from 'express'; //import d'express
import bodyParser from 'body-parser';

const app = express();


app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('./public/assets'));

app.listen(8080, () => {
    console.log("Servor Ok")
});


// <-----------------------------> index <----------------------------->
app.get('/', async (req, res) => {
    console.log('test serveur'); //  coté serveur (back-end)
    res.render('./index.html.twig', {
        url: '/',
    })

})

app.get('/lexique', async (req, res) => {
    res.render('./layout/lexique.html.twig', {
        url: '/lexique',
    })
})



app.get('/portfolio', async (req, res) => {
    res.render('./portfolio/portfolio.html.twig', {
        url: '/portfolio',
    })

})

app.get('/before', async (req, res) => {
    res.render('./before_project/before.html.twig', {
        url: '/before',
    })

})
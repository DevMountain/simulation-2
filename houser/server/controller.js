module.exports = {
    getHouses: (req, res, next) =>
    {
        const db = req.app.get( 'db' );
        db.get_houses()
            .then( houses => {res.status(200).send( houses ),
                console.log(houses)}
            )
            .catch( () => res.status(500))
    },
    addHouse: (req, res, next) =>
    {
        const {name, address, city, state, zip} = req.body;
        const db = req.app.get( 'db' );

        db.add_house([name, address, city, state, zip])
        .then( () => res.status(200))
        .catch( () => res.status(500))

    }
}
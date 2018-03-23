module.exports = {
    getHouses: (req, res, next) =>
    {
        const db = req.app.get( 'db' );
        db.get_houses()
            .then( houses => {res.status(200).send( houses )
                }
            )
            .catch( () => res.status(500))
    },
    addHouse: (req, res, next) =>
    {
        const {name, address, city, state, zip} = req.body;
        const db = req.app.get( 'db' );
        const house = [name, address, city, state, zip]
        

        db.add_house(house)
        .then( () => res.status(200))
        .catch( () => res.status(500))

    },
    deleteHouse: (req, res, next) => 
    {
        const {id} = req.params;
        const db = req.app.get( 'db' );
        db.delete_house(id)
        .then( () => res.status(200))
        .catch( () => res.status(500))
    }
}
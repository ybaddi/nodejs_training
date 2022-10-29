const connection = require('../../database');

exports.getAll = (req, result, next) => {
const query = connection.query("select * from personnes", (err, res,next) => {
    console.log(query.sql);
    if(err){
        // TODO change diplaying sql erreur.
        return result.status(500).json({
            erreur: err
        })
    }
    return result.status(200).json(res)
})
}

exports.findById = (req, res, next) => {

}

exports.add = (req, res, next) => {

}


exports.update = (req, res, next) => {

}

exports.delete = (req, result, next) => {
    const id = req.params.id
    const query = connection.query("delete from personnes where num="+id, (err, res,next) => {
        console.log(query.sql);
        if(err){
            // TODO change diplaying sql erreur.
            return result.status(500).json({
                erreur: err
            })
        }
        return result.status(200).json(res)
    })
}
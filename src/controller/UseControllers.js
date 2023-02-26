const UserModels = require("../models/UserModels");

class UserControllers{

    //função assincrona
    async index(req, res){//Retornar uma lista para o usuario
        const user = await UserModels.find();
        return res.status(200).json(user);
    }

    async store(req, res){//Criar algo
        const user = await UserModels.create(req.body);
        await user.save();
        return res.status(200).json(user);
    }
}

module.exports = new UserControllers();
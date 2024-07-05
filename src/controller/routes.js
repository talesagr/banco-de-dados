const RouteService = require('../services/routeService');

exports.getAllRoutes = async (req, res) => {
    try {
        const routes = await RouteService.getAllRoutes();
        res.json(routes);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro interno do servidor');
    }
};

exports.getRouteById = async (req,res) => {
    const routeId = req.params.id;

    try {
        const route = await RouteService.getRouteById(parseInt(routeId));

        if (route) {
            res.json(route);
        } else {
            res.status(404).send('Rota não encontrada');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro interno do servidor');
    }
};

exports.addRoute = async (req,res)=> {
    const { nome, descricao } = req.body;

    try {
        const newRoute = await RouteService.addRoute(nome,descricao);
        res.json(newRoute);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro interno do servidor');
    }
};

exports.updateRouteById=async (req,res)=>{
    const routeId = req.params.id;
    const { nome, descricao } = req.body;

    try {
        const updatedRoute = await RouteService.updateRouteById(routeId,{
            nome : nome,
            descricao: descricao,
        });

        if(updatedRoute){
            res.json(updatedRoute)
        } else {
            res.status(404).send('Rota nao encontrada')
        }
    } catch (e){
        console.error(e);
        res.status(500).send('Internal Server Error')
    }
};

exports.deleteRouteById= async (req, res) => {
    const routeId = req.params.id;

    try {
        const deletedRoute = await RouteService.deleteRouteById(routeId);

        if(deletedRoute){
            res.json(deletedRoute)
        } else {
            res.status(404).send('Rota nao encontrada')
        }
    } catch(e){
        console.error(e);
        res.status(500).send('Internal Server Error')
    }
}

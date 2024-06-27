const sequelize = require('../config/database')
const Point = require('./Point')
const Route = require('./Route')
const RouteSegment = require('./RouteSegment')

Route.hasMany(RouteSegment, { foreignKey: 'rotaoid' });
RouteSegment.belongsTo(Route, { foreignKey: 'rotaoid' });

Point.hasMany(RouteSegment, { foreignKey: 'pontooid_de' });
Point.hasMany(RouteSegment, { foreignKey: 'pontooid_para' });
RouteSegment.belongsTo(Point, { as: 'startPoint', foreignKey: 'pontooid_de' });
RouteSegment.belongsTo(Point, { as: 'endPoint', foreignKey: 'pontooid_para' });

module.exports = {
    sequelize,
    Point,
    Route,
    RouteSegment
};
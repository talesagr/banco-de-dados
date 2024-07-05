const sequelize = require('../config/database');
const Point = require('./Point');
const Route = require('./Route');
const RouteSegment = require('./RouteSegment');
const Connection = require('./Connection');
const Trip = require('./Trip');

Route.hasMany(RouteSegment, { foreignKey: 'rotaoid' });
RouteSegment.belongsTo(Route, { foreignKey: 'rotaoid' });

Point.hasMany(RouteSegment, { foreignKey: 'pontooid_de' });
Point.hasMany(RouteSegment, { foreignKey: 'pontooid_para' });
RouteSegment.belongsTo(Point, { as: 'startPoint', foreignKey: 'pontooid_de' });
RouteSegment.belongsTo(Point, { as: 'endPoint', foreignKey: 'pontooid_para' });

Point.hasMany(Connection, { foreignKey: 'pontooid_de' });
Point.hasMany(Connection, { foreignKey: 'pontooid_para' });
Connection.belongsTo(Point, { as: 'startPoint', foreignKey: 'pontooid_de' });
Connection.belongsTo(Point, { as: 'endPoint', foreignKey: 'pontooid_para' });

Route.hasMany(Trip, {foreignKey:'rotaoid'})
Trip.belongsTo(Route, {foreignKey: 'rotaoid'})

module.exports = {
  sequelize,
  Point,
  Route,
  RouteSegment,
  Connection,
  Trip,
};

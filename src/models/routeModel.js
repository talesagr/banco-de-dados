const pool = require('../config/database')

class RouteModel {
    static async getAllRoutes() {
        try {
            const result = await pool.query('SELECT * FROM rotas');
            return result.rows;
        } catch (error) {
            throw error;
        }
    }

    static async getRouteById(id) {
        try {
            const result = await pool.query('SELECT * FROM rotas WHERE rotaoid = $1', [id]);

            if (result.rows.length > 0) {
                return result.rows[0];
            } else {
                return null; 
            }
        } catch (error) {
            throw error;
        }
    }

    static async addRoute(nome, descricao) {
        try {
            const result = await pool.query(
                'INSERT INTO rotas (nome, descricao) VALUES ($1, $2) RETURNING *',
                [nome, descricao]
            );

            return result.rows[0];
        } catch (error) {
            throw error;
        }
    }

    static async updateRouteById(id, {nome, descricao}){
        try {
            const result = await pool.query(
                'UPDATE rotas SET nome = $1, descricao = $2 WHERE rotaoid = $3 RETURNING *',
                [nome, descricao, id]
            );

            return result.rows[0];
        } catch( error){
            throw error;
        }
    }

    static async deleteRouteById(id){
        try {
            const result = await pool.query(
                'DELETE FROM rotas WHERE rotaoid = $1 RETURNING *',
                [id]
            )
            if (result.rows.length > 0) {
                return result.rows[0];
            } else {
                return null
            }

        } catch(e){
            throw e;
        }
    }
}

module.exports = RouteModel;
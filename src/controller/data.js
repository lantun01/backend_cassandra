import { client } from '../database';

export const getData = async (req, res) => {
    const query = 'SELECT * FROM movies_by_genre';
    try {
        const result = await client.execute(query);
        return res.status(200).json({
            msg: 'Data obtenida exitosamente',
            data: result.rows
        });
    } catch (error) {
        return res.status(500).json({
            msg: 'Ocurrio un error al obtener la data',
            error
        });
    }
};

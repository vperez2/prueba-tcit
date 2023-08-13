import { Post } from "../models/Post.js";

export const getPosts = async (req, res) => {
    try {
        const posts = await Post.findAll();
        console.log("LISTADO: ", JSON.stringify(posts));
        res.json(posts);
    } catch (error) {
        console.log(error);
    }
};

export const createPost = async (req, res) => {
    const { name, description } = req.body;
    try {
        const newPost = await Post.create({ name, description });
        console.log("AGREGADO: ", newPost.dataValues)
        res.redirect(303, req.originalUrl);
    } catch (error) {
        console.log(error);
    }
};

export const deletePost = async (req, res) => {
    try {
        const { id } = req.params;
        console.log("ELIMINADO: ", id)
        await Post.destroy({
            where: {
                id,
            },
        });
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json( {message: error.message} );
    }
};
import { useSelector, useDispatch } from "react-redux";
import { addPost, deletePostAsync, addPostAsync } from "../features/posts/postSlice.js";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function CreateList() {
    const [search, setSearch] = useState('');
    const posts = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const nameInput = useRef();
    const descriptionInput = useRef();

    const resetNameInput = () => (
        nameInput.current.value = "", 
        descriptionInput.current.value = ""
    );

    useEffect(() => {
        let isMounted = true;
    
        axios.get('http://localhost:4000/posts')
            .then(res => { 
                if (isMounted) {
                    res.data.forEach(post => {
                        dispatch(addPost(post));
                    });
                }
            }).catch(err => { 
                console.log(err) 
            });
    
        return () => {
            isMounted = false;
        };
    }, [dispatch]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const post = {name, description};
        try {
            const response = await dispatch(addPostAsync(post));
            dispatch(addPost(response[response.length - 1]));

            setName('');
            setDescription('');
        } catch(error) {
            console.log(error);
        } 
        navigate('/');
    };

    const handleDelete = async (id) => {
        try {
            await dispatch(deletePostAsync(id));
        } catch (err) {
            console.log(err);
        }
        navigate('/');
    };

    return (
        <div>
            <Container>
                <h1 className="name">TCIT</h1>
                <Form className="searchBar">
                    <InputGroup>
                        <Form.Control type="text" placeholder="Buscar Nombre" onChange={e => setSearch(e.target.value)} />
                    </InputGroup>
                </Form>
                <Table className="table" striped bordered hover>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Descripción</th>
                            <th>Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.filter((item) => {
                            return search.toLowerCase() === '' ? item : item.name.toLowerCase().includes(search.toLowerCase())
                        }).map(post => (
                            <tr key = {post.id}>
                                <td>{post.name}</td>
                                <td>{post.description}</td>
                                <td>
                                    <Button variant="secondary" onClick={() => handleDelete(post.id)}>Eliminar</Button>
                                </td>
                            </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </Container>
            <Container>
            <Form onSubmit = {handleSubmit} className="addForm">
                <InputGroup>
                    <Form.Control name="name" type="text" placeholder="Nombre" ref={nameInput} onChange={e => setName(e.target.value)} /> 
                    <Form.Control  name="description" type="text" placeholder="Descripción" ref={descriptionInput} onChange={e => setDescription(e.target.value)} />
                    <Button variant="secondary" type="submit" onClick = {resetNameInput}>Crear</Button>
                </InputGroup>
            </Form>
        </Container>
        </div>

    );
};

export default CreateList;
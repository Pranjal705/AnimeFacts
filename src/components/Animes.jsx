import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
// import { animes } from '../data'
import Anime from './Anime';
import axios from 'axios';

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`
const Animes = () => {

    const [animes, setAnimes] = useState([]);

    useEffect(() => {
        loadAnimes();
    }, []);

    const loadAnimes = async () => {
        const result = await axios.get("http://localhost:4000/api/v1");
        setAnimes(result.data["data"]);
    }
    return (
        <Container>
            {animes.map(item => (
              <Anime item={item} key={item.anime_id}/>
          ))}

        </Container>
    );
};

export default Animes;

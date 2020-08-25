/* eslint-disable no-plusplus */
/* eslint-disable camelcase */
import Input from '@/components/Input';
import { FormHandles, SubmitHandler } from '@unform/core';
import { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import React, { useState, useRef, useCallback, useMemo } from 'react';

import api from '../services/api';
import { capitalizeFirstLetter } from '../utils/toUpercase';
import { Repositories, Title, Error, Form } from './styles';

interface Champion {
  id: string;
  name: string;
  title: string;
  blurb: string;
  key: string;
}

const Dashboard: NextPage<{ data: Champion[] }> = ({ data }) => {
  const formRef = useRef<FormHandles>(null);

  const [champions, setChampions] = useState<Champion[]>([]);

  const sortChampions = useMemo(() => {
    return champions.slice(1, 5);
  }, [champions]);

  const handleAddRepository = useCallback(async ({ champion }) => {
    const name = capitalizeFirstLetter(champion);
    const { data } = await api.get(`champion/${name}.json`);

    setChampions(Object.values(data.data));
  }, []);

  return (
    <>
      <Title>Procure seus Campeões favoritos no legue of legends !</Title>
      <Form ref={formRef} onSubmit={handleAddRepository}>
        <Input placeholder="Informe o nome do campeão" name="champion" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        {champions.map(champion => (
          <Link href="/sad">
            <a href="/algo" key={champion.key}>
              <img
                src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.name}_0.jpg`}
                alt={champion.name}
              />
              <div>
                <strong>{champion.name}</strong>
                <p>{champion.title}</p>
              </div>
            </a>
          </Link>
        ))}
      </Repositories>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get('/champion.json');

  const { data } = response.data;

  return {
    props: {
      data,
    },
  };
};

export default Dashboard;

/*



*/

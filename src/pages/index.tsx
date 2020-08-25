/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-plusplus */
/* eslint-disable camelcase */
import Input from '@/components/Input';
import Loader from '@/components/Loader';
import { FormHandles } from '@unform/core';
import { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import React, { useState, useRef, useCallback } from 'react';
import { useTransition } from 'react-spring';
import { toast } from 'react-toastify';

import api from '../services/api';
import { capitalizeFirstLetter } from '../utils/toUpercase';
import { Repositories, Title, Form, AnimatedDiv } from './styles';

export interface Champion {
  id: string;
  name: string;
  title: string;
  blurb: string;
  key: string;
}

const Dashboard: NextPage<{ data: Champion[] }> = () => {
  const formRef = useRef<FormHandles>(null);

  const [champions, setChampions] = useState<Champion[]>([]);
  const [isLoad, setIsLoad] = useState(false);

  const handleAddRepository = useCallback(async ({ champion }) => {
    try {
      setIsLoad(true);
      const name = capitalizeFirstLetter(champion);
      const { data: currentChampiom } = await api.get(`champion/${name}.json`);

      setChampions(Object.values(currentChampiom.data));
      toast.success('Campeão encontrado !');
    } catch {
      toast.error('Opa ! Parece que esse campeão não existe');
    } finally {
      setIsLoad(false);
    }
  }, []);

  const transition = useTransition(champions, champiom => champiom.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
  });
  return (
    <>
      <Title>Procure seus campeões favoritos do Legue of Legends !</Title>
      <Form ref={formRef} onSubmit={handleAddRepository}>
        <Input placeholder="Informe o nome do campeão" name="champion" />
        <button type="submit">
          <Loader text="Pesquisar" visibility={Number(!!isLoad)} />
        </button>
      </Form>
      {champions && (
        <Repositories>
          {transition.map(({ key, item, props }) => (
            <AnimatedDiv key={key} style={props}>
              <Link href={`/champiom/${item.id}`} key={item.key}>
                <a>
                  <img
                    src={`http://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/${item.id}.png`}
                    alt={item.name}
                  />
                  <div>
                    <strong>{item.name}</strong>
                    <p>{item.title}</p>
                    <p>{item.blurb}</p>
                  </div>
                </a>
              </Link>
            </AnimatedDiv>
          ))}
        </Repositories>
      )}
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

{champions.map(champion => (

            ))}

*/

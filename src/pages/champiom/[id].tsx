/* eslint-disable jsx-a11y/anchor-is-valid */
import { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';
import api from 'services/api';

import { Champion as ChampiomInterface } from '../index';
import { Header, Issues, RepositoryInfo } from './styles';

interface ChampiomDatils extends ChampiomInterface {
  lore: string;
  info: {
    attack: string;
    defense: string;
    magic: string;
  };
}

const Champiom: NextPage<{ content: ChampiomDatils }> = ({ content }) => {
  console.log(content);
  return (
    <>
      <Header>
        <Link href="/">
          <a>Voltar</a>
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${content.id}_0.jpg`}
            alt=""
          />
          <div>
            <strong>{content.name}</strong>
            <p>{content.title}</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>{content.info.attack}</strong>
            <span>Ataque</span>
          </li>
          <li>
            <strong>{content.info.defense}</strong>
            <span>Defesa</span>
          </li>
          <li>
            <strong>{content.info.magic}</strong>
            <span>magico</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <a href="" key="">
          <div>
            <strong>Lore</strong>
            <p>{content.lore}</p>
          </div>
        </a>
      </Issues>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data: dataRequest } = await api.get(`champion/${params.id}.json`);

  const championName = params.id as string;

  const content = dataRequest.data[championName];

  return {
    props: { content },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await api.get('/champion.json');

  const { data } = response.data;

  const champions = Object.values(data) as ChampiomInterface[];

  const paths = champions.map(champion => ({
    params: { id: champion.id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default Champiom;

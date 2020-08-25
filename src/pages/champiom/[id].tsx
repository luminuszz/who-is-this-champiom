/* eslint-disable jsx-a11y/anchor-is-valid */
import { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';
import api from 'services/api';

import { Champion as ChampiomInterface } from '../index';
import {
  Header,
  Issues,
  RepositoryInfo,
  Habilities,
  Title,
  Skins,
} from './styles';

interface Spell {
  id: string;
  name: string;
  key: string;
  description: string;
  image: {
    full: string;
  };
}

interface Skins {
  id: string;
  num: number;
  name: string;
}

interface Passive {
  description: string;
  image: {
    full: string;
  };
  name: string;
}

interface ChampiomDatils extends ChampiomInterface {
  lore: string;
  info: {
    attack: string;
    defense: string;
    magic: string;
  };
  tags: string[];
  passive: Passive;
  spells: Spell[];
  skins: Skins[];
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
            src={`http://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/${content.id}.png`}
            alt={content.name}
          />
          <div>
            <strong>{content.name}</strong>
            <p>{content.title}</p>
            <p>{content.tags.toString()}</p>
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

      <Title>Passiva</Title>

      <Habilities>
        <a>
          <img
            src={`http://ddragon.leagueoflegends.com/cdn/10.16.1/img/passive/${content.passive.image.full}`}
            alt={content.passive.name}
          />
          <div>
            <strong>{content.passive.name}</strong>
            <p>{content.passive.description}</p>
          </div>
        </a>
      </Habilities>

      <Title>Habilidades</Title>

      <Habilities>
        {content.spells.map(spell => (
          <a href="" key={spell.id}>
            <img
              src={`http://ddragon.leagueoflegends.com/cdn/10.16.1/img/spell/${spell.image.full}`}
              alt={content.passive.name}
            />
            <div>
              <strong>{spell.name}</strong>
              <p>{spell.description}</p>
            </div>
          </a>
        ))}
      </Habilities>

      <Title>Skins</Title>

      <Skins>
        {content.skins.map(skin => (
          <div key={skin.id}>
            <img
              src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${content.id}_${skin.num}.jpg`}
              alt=""
            />
            <p>{skin.name}</p>
          </div>
        ))}
      </Skins>
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

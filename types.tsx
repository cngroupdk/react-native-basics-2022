/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type PokemonStackParamList = {
  PokemonList: undefined;
  PokemonDetail: {
    id: string;
    name: string;
  };
};

export type PokemonStackScreenProps<
  Screen extends keyof PokemonStackParamList,
> = NativeStackScreenProps<PokemonStackParamList, Screen>;

export type RootTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
  PokemonStack: NavigatorScreenParams<PokemonStackParamList>;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;

// ========== PokeAPI type definitions ==========

type Result = {
  name: string;
  url: string;
};

export type PokemonList = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Result[];
};

export type Link<T = string> = {
  name: T;
  url: string;
};

type Ability = {
  ability: Link;
  is_hidden: boolean;
  slot: number;
};

type Form = {
  name: string;
  url: string;
};

type GameIndex = {
  game_index: number;
  version: Link;
};

type VersionGroupDetail = {
  level_learned_at: number;
  move_learn_method: Link;
  version_group: Link;
};

type Move = {
  move: Link;
  version_group_details: VersionGroupDetail[];
};

type Sprites = {
  front_default: string;
  front_shiny: string;
  other: {
    dream_world: {
      front_default: string;
    };
    'official-artwork': {
      front_default: string;
    };
  };
};

export type Stat = {
  base_stat: number;
  effort: number;
  stat: Link;
};

export type TypeName =
  | 'bug'
  | 'dark'
  | 'dragon'
  | 'electric'
  | 'fairy'
  | 'fighting'
  | 'fire'
  | 'flying'
  | 'ghost'
  | 'grass'
  | 'ground'
  | 'ice'
  | 'normal'
  | 'poison'
  | 'psychic'
  | 'rock'
  | 'steel'
  | 'water';

export type Type = {
  slot: number;
  type: Link<TypeName>;
};

export type Pokemon = {
  abilities: Ability[];
  base_experience: number;
  forms: Form[];
  game_indices: GameIndex[];
  height: number;
  held_items: [];
  id: number;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  past_types: [];
  species: Link;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  weight: number;
};

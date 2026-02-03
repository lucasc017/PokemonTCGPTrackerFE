export interface CardImages {
  small: string;
  large: string;
}

export interface CardSet {
  id: string;
  name: string;
}

export interface PokemonCard {
  id: string;
  name: string;
  number: string;
  supertype: string;
  set: CardSet;
  images: CardImages;
}

export interface CardApiResponse {
  data: PokemonCard[];
  totalCount: number;
}

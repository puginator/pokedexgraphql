import {
    gql
} from '@apollo/client';

export const GET_POKEMONS = gql `
    query getPokemons($first: Int!) {
        pokemons(first: $first) {
            id
            name
            image
            types
            weaknesses
            attacks {
                special {
                    name
                }
            }
        }
    }
`;
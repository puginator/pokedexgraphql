import React from 'react';

export function Pokemon({pokemon}) {
    console.log(pokemon);
    return (
        <div className="pokemon">
            <div className="pokemon__name">
                <p> {pokemon.name}</p>
            </div>
            <div className="pokemon__image">
                <img src={pokemon.image} alt={pokemon.name} />
            </div>
            <div className="pokemon__types">
                Type:
                {pokemon.types.map(type => (
                    <span key={type} className={`pokemon__type ${type.toLowerCase()}`}>
                        {type}
                    </span>
                ))}
            </div>
            <div className="pokemon__weaknesses">
                Weaknesses: 
                {pokemon.weaknesses.map(weakness => (
                    <span key={weakness} className={`pokemon__weakness ${weakness.toLowerCase()}`} >
                        {weakness}
                    </span>
                ))}
            </div>
            <div className="pokemon__attacks">
                <div className="pokemon__special-attacks">
                    {pokemon.attacks.special.map(attack => (
                        <span key={attack.name} className="pokemon__special-attack">
                            {attack.name}
                        </span> 
                    ))}
                </div>  
            </div>
        </div>
    )
}
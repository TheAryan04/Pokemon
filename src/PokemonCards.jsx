export const PokemonCards = ({ pokemonData }) => {
    return (
      <li className="pokemon-card">
        <figure>
          <img
            src={pokemonData.sprites.other.dream_world.front_default}
            alt={pokemonData.name}
            className="pokemon-image"
          />
        </figure>
        <h1 className="pokemon-name">{pokemonData.name}</h1>
        <div className="pokemon-info pokemon-highlight grid-two-cols">
            <p>
              {pokemonData.types.map((curType) => curType.type.name).join(", ")}
            </p>
            <p className="">
              <span>ID:</span> {pokemonData.id}
            </p>
          </div>
      </li>
    );
  };
  
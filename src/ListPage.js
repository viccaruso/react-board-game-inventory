import { useState, useEffect } from 'react';
import { getGames } from './services/fetch-utils';
import Game from './Game';

export default function ListPage() {
  // you'll need some state to hold onto the array of games
  const [allGames, setAllGames] = useState([]);
  // fetch the games on load and inject them into state
  useEffect(() => {
    async function fetch() {
      const games = await getGames();
      setAllGames(games);
      console.log(allGames);
    }
    fetch();

  }, []);
  return (
    <div className='list games'>
      {/* map through the games in state and render Game components */}
      {allGames.map((game) => <Game key={game.id} game={game} />)}
    </div>
  );
}

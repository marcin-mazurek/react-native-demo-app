import flow from 'lodash/flow';

const extractAppState = response => response.split('<script>window.APP_STATE = ')[1].split('</script>')[0];
const extractGameData = state => Object.values(state.dataSource.data.games);
const transformGameData = games => games.map(game =>
  ({ key: Math.random(), title: game.title, description: game.description, image: game.smallImage.retina, cover: game.previewImage.largeImage.retina })
);

const parseResponse = flow([extractAppState, JSON.parse, extractGameData, transformGameData]);

export default () => {
  return fetch('https://vegas.williamhill.com/en-gb/')
    .then(response => response.text())
    .then(parseResponse);
}
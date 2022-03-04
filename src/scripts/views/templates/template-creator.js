import CONFIG from '../../globals/config';

const createFavoriteButtonTemplate = () => `
  <button aria-label="favorite this movie" id="favoriteButton" class="favorite">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createFavoritedButtonTemplate = () => `
  <button aria-label="unfavorite this movie" id="favoriteButton" class="favorite">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createFavoriteButtonTemplate,
  createFavoritedButtonTemplate,
};

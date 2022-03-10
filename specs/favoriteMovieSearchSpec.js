import FavoriteRestaurantSearchPresenter from '../src/scripts/views/pages/favorited-restaurants/favorite-restaurant-search-presenter';
import FavoriteRestaurantIdb from '../src/scripts/data/favoriterestaurant-idb';

describe('Searching restaurants', () => {
  beforeEach(() => {
    document.body.innerHTML = `
        <div id="restaurant-search-container">
            <input id="query" type="text">
            <div class="restaurant-result-container">
                <ul class="restaurants">
                </ul>
            </div>
        </div>
        `;
  });

  it('should be able to capture the query typed by the user', () => {
    spyOn(FavoriteRestaurantIdb, 'searchRestaurants');
    const presenter = new FavoriteRestaurantSearchPresenter({
      favoriteRestaurants: FavoriteRestaurantIdb,
    });

    const queryElement = document.getElementById('query');
    queryElement.value = 'restaurant a';
    queryElement.dispatchEvent(new Event('change'));

    expect(presenter.latestQuery).toEqual('restaurant a');
  });

  it('should ask the model to search for favorited restaurants', () => {
    spyOn(FavoriteRestaurantIdb, 'searchRestaurants');
    const presenter = new FavoriteRestaurantSearchPresenter({ favoriteRestaurants: FavoriteRestaurantIdb });

    const queryElement = document.getElementById('query');
    queryElement.value = 'restaurant a';
    queryElement.dispatchEvent(new Event('change'));

    expect(FavoriteRestaurantIdb.searchRestaurants)
      .toHaveBeenCalledWith('restaurant a');
  });
});
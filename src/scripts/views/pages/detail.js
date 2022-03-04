import UrlParser from '../../routes/url-parser';
import FavoriteButtonInitiator from '../../utils/favorite-button-initiator';

const Detail = {
  async render() {
    return `
      <div id="detail">
        <div class="container" id="restaurant-detail"></div>
      </div>
      <div id="favoriteButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detailRestaurant = document.querySelector('#restaurant-detail');
    detailRestaurant.innerHTML = '';
    let showRestaurant;

    fetch(`https://restaurant-api.dicoding.dev/detail/${url.id}`).then((response) => response.json())
      .then((restaurantData) => {
        showRestaurant = restaurantData.restaurant;
        detailRestaurant.innerHTML = `
          <div class="container">
            <div class="image-container">
              <img class="images" src="https://restaurant-api.dicoding.dev/images/medium/${restaurantData.restaurant.pictureId}" alt="${restaurantData.restaurant.name}" alt='Gambar restaurantData.restaurant ${restaurantData.restaurant.name}'>
            </div>
            <div class="content">
              <h2 class="text-center">${restaurantData.restaurant.name}</h2>
              <h4 class="text-center">Lokasi : ${restaurantData.restaurant.address}, ${restaurantData.restaurant.city}</h4>
              <h4 class="text-center">Rating : ${restaurantData.restaurant.rating}/5</h4>
              <p>${restaurantData.restaurant.description}</p>
              <hr>
              <div id="menus">
                <div>
                  <h4>Menu Makanan</h4>
                  <div id="foods"></div>
                </div>
                <div>
                  <h4>Menu Minuman</h4>
                  <div id="drinks"></div>
                </div>
              </div>
              <hr>
              <h4>Review Customer</h4>
              <div id="reviews"></div>
            </div>
          </div>
        `;

        const foods = document.querySelector('#foods');
        foods.innerHTML = '';
        restaurantData.restaurant.menus.foods.forEach((food) => {
          foods.innerHTML += `<p>${food.name}</p>`;
        });

        const drinks = document.querySelector('#drinks');
        drinks.innerHTML = '';
        restaurantData.restaurant.menus.drinks.forEach((drink) => {
          drinks.innerHTML += `<p>${drink.name}</p>`;
        });

        const reviews = document.querySelector('#reviews');
        restaurantData.restaurant.customerReviews.forEach((review) => {
          reviews.innerHTML += `<div class="review">
            <h5>${review.name}</h5>
            <div>${review.review}</div>
            <div>${review.date}</div>
          </div>`;
        });

        FavoriteButtonInitiator.init({
          favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
          restaurant: {
            id: showRestaurant.id,
            name: showRestaurant.name,
            pictureId: showRestaurant.pictureId,
            city: showRestaurant.city,
            rating: showRestaurant.rating,
            description: showRestaurant.description,
          },
        });
      }).catch(() => {
        alert('Koneksi jaringan tidak stabil untuk menampilkan data restaurant');
      });
  },
};

export default Detail;

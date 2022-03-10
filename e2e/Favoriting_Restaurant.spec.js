Feature('favoriting Restaurants');
Before((I) => {
  I.amOnPage('/#/favorite');
});
Scenario('showing empty favorited restaurants', (I) => {
  I.seeElement('#query');
  // I.seeElement('.query'); // membuat test menjadi gagal
  I.see('Tidak ada film untuk ditampilkan', '.restaurant-item__not__found');
});
Scenario('favoriting one restaurant', (I) => {
  I.see('Tidak ada film untuk ditampilkan', '.restaurant-item__not__found');
  I.amOnPage('/');
  // … kita akan mengisi uji coba berikutnya …
});

Scenario('favoriting one restaurant', (I) => {
  I.see('Tidak ada film untuk ditampilkan', '.restaurant-item__not__found');

  I.amOnPage('/');

  I.seeElement('.restaurant__title a');
  I.click(locate('.restaurant__title a').first());

  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');
});
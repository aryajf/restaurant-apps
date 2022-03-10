Feature('Favoriting Restaurant');

Before(({ I }) => {
    I.amOnPage('/#/favorite');
});

Scenario('showing empty favorited restaurants', ({ I }) => {
    I.seeElement('#query');
    // I.seeElement('.query'); // membuat test menjadi gagal
    I.see('Tidak ada film untuk ditampilkan', '.restaurant-item__not__found');
});

Scenario('favoriting one restaurant', ({ I }) => {
    I.see('Tidak ada film untuk ditampilkan', '.restaurant-item__not__found');

    I.amOnPage('/');
    pause();
});
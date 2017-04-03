use drink_app;

db.pubs.insert({
      id:1,
      pubName: 'Lebowskis',
      pubSrc: 'http://farm7.static.flickr.com/6209/6128315560_f2fd0abf4a.jpg',
      drinksMenu: [{
        id:1,
        drinkName: 'White Russian',
        drinkSrc: 'http://www.kahlua.com/globalassets/classic-cocktails/white-russian/kahlua-white-russian-highlighted.png/CocktailHighlight',
        price: 6.99},
      {
        id: 2,
        drinkName: 'Budweiser',
        drinkSrc: 'https://s3-eu-central-1.amazonaws.com/centaur-wp/creativereview/prod/content/uploads/2016/01/2011budweiser-can.jpg',
        drinkPrice: 4.50
      }]
    },
    {
      id: 2,
      pubName: 'Paradise Palms',
      pubSrc: 'http://files.stv.tv/imagebase/300/605x454/300373-paradise-palms-lothian-street.jpg',
      drinksMenu: [{
        id:1,
        drinkName: 'Buckfast Daiquiri',
        drinkSrc: 'https://pbs.twimg.com/media/CIljQtVWcAA-PMg.jpg',
        drinkPrice: 7.99
      },
      {
        id: 2,
        drinkName: 'Blue Moon',
        drinkSrc: 'https://s-media-cache-ak0.pinimg.com/564x/77/62/50/7762508f14ff19acfc75b4a249f29d35.jpg',
        drinkPrice: 4.50
      }]
    }
)

db.dropDatabase();

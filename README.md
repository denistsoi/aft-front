# dt-aft

Uber Challenge (SF Movies) Front & Back.

    app/
      index.js          entry point for frontend (use webpack to bundle)
      map-styles.json   based on mapbox-theme
    
    docs/               documentation
    dist/               webpack output folder

    src/                entry point for backend
      models/           models 
      routes/           routes
      tasks/      
      server.js         entry point for application [fetch movies, save to db, cache etc]
    
    dev-server.js       dev server to build frontend (equivalent of `webpack --watch`)


### Author
Denis Tsoi <denistsoi@gmail.com>

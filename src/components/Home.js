import React from 'react'

export default function Home() {
    return (
        <>
          <div className="homepage-block">
          <a href="/beers"><img src="https://static01.nyt.com/images/2010/02/24/dining/24pourspan-1/24pourspan-1-articleLarge.jpg" width="300" /><br />
            All Beers</a>
            <p>This will display a great selection of All Beers</p>
          </div>

          <div className="homepage-block">
          <a href="/random"><img src="https://i.ytimg.com/vi/VXQXGdsg4qE/maxresdefault.jpg" width="300" /><br />
            Random Beer</a>
            <p>Not sure which beer to choose? We will provide a random option</p>
          </div>

          <div className="homepage-block">
          <a href="/new"><img src="https://www.bevindustry.com/ext/resources/2019/News-Images/nattysw_web.png?1551128487" width="300" /><br />
            New Beer</a>
            <p>Here you can create a new beer in the database</p>
          </div>            
        </>
    )
}

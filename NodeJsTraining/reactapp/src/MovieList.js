import React from "react";
import axios from "axios";

class MovieList extends React.Component {
state = { // we can directly give state or in the constructor
  photos: []
};

  componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/photos")
    .then((response) => {
      console.log(response.data)
      this.setState({
        photos: response.data.slice(0,10)
      });
    });
  }

  render(){


  return (
  // <div> Hello World </div>;
  <section>
  {this.state.photos.map(photo => { //map is used for individual pictures
    return //<div>{photo.title}</div>;
    <div  key={photo.id} className="col s4 m4">
  <div className="card">
    <div className="card-image">
      <img src={photo.thumbnailUrl} />
      <span className="card-title">{photo.title}</span>
    </div>
    <div className="card-content">
      <p>I am a very simple card. I am good at containing small bits of information.
        I am convenient because I require little markup to use effectively.</p>
    </div>
    <div className="card-action">
      <a href="#">This is a link</a>
    </div>
  </div>
</div>



  })};

  </section>
);
  }
}

export default MovieList;

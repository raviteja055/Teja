import React from 'react';
import { render } from 'react-dom';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import "./App.css";
// import Title from './Title';
// import Drag from './Drag'
const photos = [
  { src: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599', width: 3, height: 3 },
  { src: 'https://source.unsplash.com/Dm-qxdynoEc/800x799', width: 3, height: 3 },
  { src: 'https://source.unsplash.com/qDkso9nvCg0/600x799', width: 3, height: 3 },
  { src: 'https://source.unsplash.com/iecJiKe_RNg/600x799', width: 3, height: 4 },
  { src: 'https://source.unsplash.com/epcsn8Ed8kY/600x799', width: 3, height: 4 },
  { src: 'https://source.unsplash.com/NQSWvyVRIJk/800x599', width: 4, height: 3 },
  { src: 'https://source.unsplash.com/zh7GEuORbUw/600x799', width: 3, height: 4 },
  { src: 'https://source.unsplash.com/PpOHJezOalU/800x599', width: 4, height: 3 },
  { src: 'https://source.unsplash.com/I1ASdgphUH4/800x599', width: 4, height: 3 }
];
// const photos1 = [
//   { src: 'https://source.unsplash.com/iecJiKe_RNg/600x799', width: 3, height: 3 },
//   { src: 'https://source.unsplash.com/epcsn8Ed8kY/600x799', width: 3, height: 3 },
//   { src: 'https://source.unsplash.com/NQSWvyVRIJk/800x599', width: 3, height: 3 },
//   // { src: 'https://source.unsplash.com/zh7GEuORbUw/600x799', width: 3, height: 3 },
//   // { src: 'https://source.unsplash.com/PpOHJezOalU/800x599', width: 3, height: 3 },
//   // { src: 'https://source.unsplash.com/I1ASdgphUH4/800x599', width: 3, height: 3 }
// ];
// const photos2 = [

//   { src: 'https://source.unsplash.com/zh7GEuORbUw/600x799', width: 3, height: 3 },
//   { src: 'https://source.unsplash.com/PpOHJezOalU/800x599', width: 3, height: 3 },
//   { src: 'https://source.unsplash.com/I1ASdgphUH4/800x599', width: 3, height: 3 }
// ];

class App extends React.Component {
  constructor() {
    super();
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }

  render() {

    return (
      <div className="container">
        {/* <Drag /> */}
        <div>
          <ul>
            <li><a className="active" href="#home">About</a></li>
            <li><a href="#news">Photos</a></li>
            <li><a href="#contact">Recepies</a></li>
            <li><a href="#about">More</a></li>
          </ul>
        </div>
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-100" src={require('./asets/3.jpeg')} alt="First slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src={require('./asets/4.png')} alt="First slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src={require('./asets/5.jpg')} alt="First slide" />
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
        <div className="row threerows" >
          <div className="col-4">
            <img class="d-block w-100" src={require('./asets/images1.jpeg')} alt="First slide" />
            <h3 style={{ alignItems: 'center' }}>WHO WE ARE</h3>
            <div>
              Farmers who love to cook. Nothing makes us happier than sharing good food with good friends.
            </div>
          </div>
          <div className="col-4">
            <img class="d-block w-100" src={require('./asets/images2.jpeg')} alt="First slide" />
            <h3>OUR PRACTISES</h3>
            <div>
              Farmers who love to cook. Nothing makes us happier than sharing good food with good friends.
            </div>
          </div>
          <div className="col-4">
            <img class="d-block w-100" src={require('./asets/images1.jpeg')} alt="First slide" />
            <h3>JOIN OUR COMMUNITY</h3>
            <div>
              Farmers who love to cook. Nothing makes us happier than sharing good food with good friends.
            </div>
          </div>
        </div>
        <Gallery photos={photos} onClick={this.openLightbox} />
        <Lightbox images={photos}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
        {/* <Gallery photos={photos1} onClick={this.openLightbox} />
        <Lightbox images={photos1}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
        <Gallery photos={photos2} onClick={this.openLightbox} />
        <Lightbox images={photos2}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        /> */}
        <div>

          <img src={require('./asets/7.jpg')} alt="First slide" width="1040px" />
        </div>
      </div >
    )
  }
}
render(<App />, document.getElementById('app'));

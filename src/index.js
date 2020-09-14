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
            <img class="d-block w-100" src={require('./asets/newimage1.jpg')} alt="First slide" />
            <h3 style={{ textAlign: 'center' }}>WHO WE ARE</h3>
            <div>
              Farmer who love to cook. nothing make us happier than sharing good food with good friends
            </div>
          </div>
          <div className="col-4">
            <img class="d-block w-100" src={require('./asets/Screenshot_1.jpg')} alt="First slide" style={{ height: '234px' }} />
            <h3 style={{ textAlign: 'center' }}>OUR PRACTISES</h3>
            <div>
              only natural seeds , Ox farming, Less tillage, Mini tractor, no pesticides,
  life growing food

            </div>
          </div>
          <div className="col-4">
            <img class="d-block w-100" src={require('./asets/origin.jpg')} alt="First slide" s />
            <h3 style={{ textAlign: 'center' }}>JOIN OUR CSA</h3>
            <div>
              Sign up for a weekly subscription of the best produce we have to offer – plus recipes, newletters, ideas & inspiration. With home delivery
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
        <div>
          <h3>ABOUT US</h3>
          <p>
            Nature Farming Cycle farm is a small farm in Telanagan (India). We grow natural, nutrient-dense vegetables for a community supported agriculture (CSA) members and local restaurants.

            </p>
          <p>
            Prasanna kumar anapally is going to start the farm in 2022 so i named project 2022. Neither i grew up farming, and i don’t have a great explanation for how i want to became farmer – i just love food and nature. It’s our main motivation for farming. We grow vegetables that we love to eat; we cook our meals with produce we’ve just picked from the fields; and we take great pleasure in sharing the abundance with friends, neighbors, and CSA members.
</p>
          <p>

            Prasnna kumar grew up in Nalgonda (India), grewn and studied in same town, finished bachelor and went to germany for higher eductaion and started new career. Past 6 years experiencing western world and understanding nature and human i feel this is not a way of life. life should be sustainable. Not materialistic.  So i deciede to live sutainable life with mother nature and encorage other to do. who is with me…! You…?

</p>
          <h3>FARMING PRACTICES
</h3>
          <p>When we say we’re a small farm, we mean very small: just about an five acre land. We farm mostly by hand, with bulls and a mini tractor, because we like keeping our feet on the ground, and it allows us to focus on growing the highest quality produce we can. By very less tilling. we’re able to build very fertile soil by using by natural products from indigenous cattle like soild and liquid jeeva amrutham and many medicinal leafs so that supports healthy plants and nutrient-dense food and try to merg with nature.
</p>
          <p>

            Since we’re so small, we focus on making every square foot count. We grow intensively, choosing our crops carefully and spacing them closely, and we replant beds as many as six times a year. Our focus on building fertile soil and increase carbon content to inrigate less water it supports this level of production and allows us to grow year-round with high quality product.
            
</p>
          <p>

            We believe the best way to grow healthy, nutrient-dense food – as well as to grow plants that are resilient against pests and extreme weather like wind and heavy rains – is to farm organically. While we’re not certified, we follow organic practices strictly. Every day, we make farm decisions based on the health of the soil, the pollinators, the community we’re a part of, and the broader ecosystem we inhabit. We never use synthetic chemical sprays or Genetically modified organisms (GMOs). 100% we used natural seeds, what came from nature not by laboratory or scientist.
            
</p>
          <p>

            Since we spend pretty much all our free time cooking, we grow vegetable varieties that are known for great flavor. When harvesting for CSA members, we always prioritize taste, freshness, and nutrition. We want you and your family to eat well.
            
</p>
          <h3>OUR NAME
</h3>
          <p>The NATURE FARMING CYCLE do not disturub nature it can do his job as a cyclic form with out disturbing any creature on this planet. there’s an old saying that “Mimic Nature” which to us means if you obey the nature it never brings you down. In nature everthing go by cycle as a human we depend on nature but never nature depend on humanbeing. No need to plant a tree but do not cut a tree. To plant a tree there a other medium like birds and wind.
</p>
        </div>
      </div >
    )
  }
}
render(<App />, document.getElementById('app'));

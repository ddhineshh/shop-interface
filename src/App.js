import React from 'react';
import './App.css';
import Brand from './Brand';
import Carditem from './Carditem'; // data stored in card item variable
import Navbar from './Navbar';
import ReactStars from "react-rating-stars-component";   //For star Value


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: Carditem,
      cartCount: 0
    }
  }


  //Add to cart function

  addToCart = (event) => {
    let index = parseInt(event.target.dataset.id);
    let tempData = this.state.data;
    tempData[index].cart = true;
    this.setState({ cartCount: this.state.cartCount + 1 });
    this.setState({ data: tempData })
  }

  //Remove from cart

  removeFromCart = (event) => {
    let index = parseInt(event.target.dataset.id);
    let tempData = this.state.data;
    tempData[index].cart = false;
    if (this.state.cartCount > 0) {
      this.setState({ cartCount: this.state.cartCount - 1 });
    }
    this.setState({ data: tempData })
  }

  render() {
    return (
      <>
        <Navbar count={this.state.cartCount} />
        <Brand />
        <div className='container'>
          <div className='row'>
            {
              this.state.data.map((item, index) => (
                <div key={item.id} className="col-12 col-sm-12 col-md-4 col-lg-4 pb-2 pt-2">
                  <div className='card' style={{ width: "18rem" }}>
                    <img src="https://dummyimage.com/600x400/22d1d4/fff&text=Shopping+Cart" className='card-img-top' alt='cardItem' />
                    <div className='card-body'>
                      <h5 className='card-title'>{item.title}</h5>
                      <p className='card-text'>{item.price}</p>
                      <p className='ps-5 ms-4'>
                        {/* user can give rating */}
                        <ReactStars size={30} half={false}
                          onChange={newRating => {
                            console.log(newRating)
                          }} />
                      </p>
                      {
                        item.cart === false ?
                          <button className='btn btn-dark' data-id={index} onClick={(event) => this.addToCart(event)}>Add to Cart</button>
                          :
                          <button className='btn btn-dark' data-id={index} onClick={(event) => this.removeFromCart(event)}>Remove from Cart</button>
                      }
                    </div>
                  </div>
                </div>
              ))
            }

          </div>
        </div>
        <footer className='py-5 bg-dqark'>
          <div className='container'> <p className='m-0 text-center text-wghite'>Copyright ?? Dhinesh 2023</p></div>
        </footer>
      </>
    )
  }


}


export default App;

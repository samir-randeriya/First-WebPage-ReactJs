import React, { Component } from 'react';

import classes from './App.module.css';
import Topbar from './Topbar/Topbar';
import ProductPreview from './ProductPreview/ProductPreview';
import ProductDetails from './ProductDetails/ProductDetails';
import ProductData from './Utils/ProductData';

class App extends Component {

  state={
    productData: ProductData,
    // currentPreviewImage: 'https://imgur.com/iOeUBV7.png',
    currentPreviewImagePos: 0,
    currentSelectedFeature: 0,
  }

  onColorOptionClick = (pos) => {
    // const updatedPreviewImage =this.state.productData.colorOptions[pos].imageUrl
    // console.log(updatedPreviewImage);
    this.setState({currentPreviewImagePos: pos})
  }

  onFeaturedItemClick = (pos) => {
    // console.log(pos);
    // let updatedState = false;
    // if(pos === 1){
    //   updatedState = true;
    // }
    this.setState({currentSelectedFeature: pos})
  }

  render() {
    return (
      <div className="App">
          <Topbar />
        
        <div className={classes.MainContainer}>
          <div className={classes.ProductPreview}>
            <ProductPreview currentPreviewImage={this.state.productData.colorOptions[this.state.currentPreviewImagePos].imageUrl} currentSelectedFeature={this.state.currentSelectedFeature} />
          </div>
          
          <div className={classes.ProductData}>
             <ProductDetails data={this.state.productData} onColorOptionClick={this.onColorOptionClick} currentPreviewImagePos={this.state.currentPreviewImagePos} onFeaturedItemClick={this.onFeaturedItemClick} currentSelectedFeature={this.state.currentSelectedFeature} />
          </div>
        </div>
      </div>
    );
  }

}

export default App;

import React from 'react';
import classes from './ProductDetails.module.css';
import ProductData from '../Utils/ProductData';

const ProductDetails = (props) => {
  // console.log(props.data);
  const colorOptions = props.data.colorOptions.map((item, pos) => {
    const classArr = [classes.ProductImage]
    if(pos === props.currentPreviewImagePos){
      classArr.push(classes.SelectedProductImage)
    }
    return(
      <img key={pos} className={classArr.join(' ')} src={item.imageUrl} alt={item.styleName} onClick={() =>props.onColorOptionClick(pos)}/> 
    );
  })

  const featuredList = props.data.featureList.map((item, pos) => {
    const classArr = [classes.FeaturedItem]
    if(pos === props.currentSelectedFeature) {
      classArr.push(classes.SelectedFeaturedItem);
    } 
    return(
      <button key={pos} onClick={() => props.onFeaturedItemClick(pos)} className={classArr.join(' ')}>{item}</button>
    )
  })

  return(
    <div className={classes.ProductData}>
    <h1 className={classes.ProductTitle}>{props.data.title}</h1>
    <p className={classes.ProductDescription}>{props.data.description}</p>

    <h3 className={classes.SectionHeading}>Select Color</h3>
    <div> {colorOptions} </div>

    <h3 className={classes.SectionHeading}>Features</h3>
    <div> {featuredList} </div>

    <button className={classes.PrimaryButton}>Buy Now</button>
  </div>

  );
}

export default ProductDetails;
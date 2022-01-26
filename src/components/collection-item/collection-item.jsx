import React from "react";

import "./collection-item.scss";
import CustomButton from "../custom-button/custom-button";

const CollectionItem = ({ name, imageUrl, price }) => {
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton inverted className="custom-button">
        Add to cart
      </CustomButton>
    </div>
  );
};
export default CollectionItem;

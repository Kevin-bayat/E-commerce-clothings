import React from "react";

import "./collection-item.scss";
import { addItem } from "../../redux/cart/cart.action";
import { connect } from "react-redux";
import { CustomButtonContainer } from "../custom-button/custom-button.styled";

const CollectionItem = ({ item, addItem }) => {
  const { imageUrl, price, name } = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButtonContainer
        inverted
        className="custom-button"
        onClick={() => addItem(item)}
      >
        Add to cart
      </CustomButtonContainer>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);

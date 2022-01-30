import React from "react";
import "./ShopPage.scss";
import CollectionPreview from "../../components/collection-preview/collection-preview";
import { createStructuredSelector } from "reselect";
import { selectShopSections } from "../../redux/shop/shop-selector";
import { connect } from "react-redux";

const ShopPage = ({ collection }) => {
  return (
    <div>
      {collection?.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collection: selectShopSections,
});
export default connect(mapStateToProps)(ShopPage);

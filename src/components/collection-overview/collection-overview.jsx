import React from "react";
import "./collection-overview.scss";
import CollectionPreview from "../collection-preview/collection-preview";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionPreview } from "../../redux/shop/shop-selector";

const CollectionOverview = ({ collection }) => {
  return (
    <div className="collection-overview">
      {collection?.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collection: selectCollectionPreview,
});
export default connect(mapStateToProps)(CollectionOverview);

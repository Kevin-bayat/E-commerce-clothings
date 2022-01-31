import React from "react";
import "./CollectionPage.scss";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop-selector";

const CollectionPage = (collections) => {
  console.log({ collections }, "CollectionPage");
  return <div>Collection Page</div>;
};

const mapStateToProps = (state, ownProps) => ({
  collections: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);

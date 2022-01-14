import React, { Component } from "react";
import { ShopData } from "./shopData/shopData";

import "./ShopPage.scss";
import CollectionPreview from "../../components/collection-preview/collection-preview";

class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collection: ShopData,
    };
  }
  render() {
    const { collection } = this.state;
    return (
      <div>
        {collection?.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}
export default ShopPage;

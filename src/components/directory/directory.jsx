import React from "react";
import "./directory.scss";
import MenuItem from "../menu-item/menu-item";
import { createStructuredSelector } from "reselect";
import { SelectDirectorySection } from "../../redux/directory/directory-selector";
import { connect } from "react-redux";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: SelectDirectorySection,
});

export default connect(mapStateToProps)(Directory);

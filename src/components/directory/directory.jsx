import React from "react";
import MenuItem from "../menu-item/menu-item";
import { createStructuredSelector } from "reselect";
import { SelectDirectorySection } from "../../redux/directory/directory-selector";
import { connect } from "react-redux";
import { DirectoryContainer } from "./directory.styled";

const Directory = ({ sections }) => {
  return (
    <DirectoryContainer>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </DirectoryContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: SelectDirectorySection,
});

export default connect(mapStateToProps)(Directory);

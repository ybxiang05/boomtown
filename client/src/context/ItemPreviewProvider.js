import React from "react";
import PropTypes from "prop-types";

export const ItemPreviewContext = React.createContext();

const initialState = {
  title: "Item Name",
  description: "Item Description",
  tags: [],
  itemowner: {},
  created: new Date(),
  imageurl: "http://via.placeholder.com/350x250?text=Please, for the love of god!"
};

const ItemPreviewProvider = props => {
  const [item, setItem] = React.useState(initialState);

  const updatePreview = itemInput => {
    const newItem = { ...item, ...itemInput };
    setItem(newItem);
  };

  const resetPreview = () => {
    setItem(initialState);
  };

  return (
    <ItemPreviewContext.Provider
      value={{
        state: item,
        updatePreview,
        resetPreview
      }}
    >
      {props.children}
    </ItemPreviewContext.Provider>
  );
};

ItemPreviewProvider.propTypes = {
  props: PropTypes.object
};

export default ItemPreviewProvider;

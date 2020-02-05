import React from "react";

export const ItemPreviewContext = React.createContext();

const initialState = {
  title: "Item Name",
  description: "Item Description",
  tags: [],
  itemowner: {},
  created: new Date(),
  imageurl: "http://via.placeholder.com/350x250?text=Please select an image"
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
        updatePreview: updatePreview,
        resetPreview: resetPreview
      }}
    >
      {props.children}
    </ItemPreviewContext.Provider>
  );
};

export default ItemPreviewProvider;

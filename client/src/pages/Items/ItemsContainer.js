import React, { Component } from "react";
import Items from "./Items";
// import FullScreenLoader from '../../components/FullScreenLoader';
import { Query } from "react-apollo";
import {} from "../../apollo/queries";
import { ALL_ITEMS_QUERY } from "../../apollo/queries";
import { ViewerContext } from "../../context/ViewerProvider";
import FullScreenLoader from "../../components/FullScreenLoader";

class ItemsContainer extends Component {
  render() {
    return (
      <ViewerContext.Consumer>
        {({ viewer, data }) => (
          <Query query={ALL_ITEMS_QUERY} variables={{ filter: viewer.id }}>
            {({ loading, error, data }) => {
              if (loading) return <FullScreenLoader />;
              // console.log(data);

              if (error) return `Error! ${error.message}`;
              return <Items items={data.items} />;
            }}
          </Query>
        )}
      </ViewerContext.Consumer>
    );
  }
}

export default ItemsContainer;

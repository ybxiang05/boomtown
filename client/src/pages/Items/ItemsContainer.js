import React, { Component } from "react";
import Items from "./Items";
// import FullScreenLoader from '../../components/FullScreenLoader';
import { Query } from "react-apollo";
import {} from "../../apollo/queries";
import { ALL_ITEMS_QUERY } from "../../apollo/queries";

class ItemsContainer extends Component {
  render() {
    return (
      <Query query={ALL_ITEMS_QUERY} variables={{ filter: 2 }}>
        {({ loading, error, data }) => {
          if (loading) return "loading";
          //console.log(data);
          // if (loading) return <FullScreenLoader />;
          if (error) return `Error! ${error.message}`;
          return <Items items={data.items} />;
        }}
      </Query>
    );
  }
}

export default ItemsContainer;

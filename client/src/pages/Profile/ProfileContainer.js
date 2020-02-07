import React, { Component } from "react";
import Profile from "./Profile";
// import FullScreenLoader from '../../components/FullScreenLoader';
import { Query } from "react-apollo";
import { ALL_USER_ITEMS_QUERY } from "../../apollo/queries";
import { ViewerContext } from "../../context/ViewerProvider";
import FullScreenLoader from "../../components/FullScreenLoader";
import ItemCard from "../../components/ItemCard";

class ProfileContainer extends Component {
  render() {
    return (
      <ViewerContext.Consumer>
        {({ viewer, data }) => (
          <Query query={ALL_USER_ITEMS_QUERY} variables={{ id: viewer.id }}>
            {({ loading, error, data }) => {
              if (loading) return <FullScreenLoader />;
              if (error) return `error, ${error.message}`;
              if (data) return <Profile data={data} />;
            }}
            {/* {console.log(data)} */}
          </Query>
        )}
      </ViewerContext.Consumer>
    );
  }
}

export default ProfileContainer;

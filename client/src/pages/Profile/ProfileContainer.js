import React, { Component } from "react";
import Profile from "./Profile";
import { Query } from "react-apollo";
import { ALL_USER_ITEMS_QUERY } from "../../apollo/queries";
import { ViewerContext } from "../../context/ViewerProvider";
import FullScreenLoader from "../../components/FullScreenLoader";

class ProfileContainer extends Component {
  render() {
    return (
      console.log(this.props),
      (
        <ViewerContext.Consumer>
          {({ viewer, data }) => (
            <Query
              query={ALL_USER_ITEMS_QUERY}
              variables={{ id: this.props.match.params.id || viewer.id }}
            >
              {({ loading, error, data }) => {
                if (loading) return <FullScreenLoader />;
                if (error) return `error, ${error.message}`;
                if (data) return <Profile data={data} />;
              }}
              {/* {console.log(data)} */}
            </Query>
          )}
        </ViewerContext.Consumer>
      )
    );
  }
}

export default ProfileContainer;

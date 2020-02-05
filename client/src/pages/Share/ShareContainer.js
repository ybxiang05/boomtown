import React, { Component } from "react";
import Share from "./Share";
//import FullScreenLoader from "../../components/FullScreenLoader";
import { Query } from "react-apollo";
import { ALL_TAGS_QUERY } from "../../apollo/queries";

class ShareContainer extends Component {
  render() {
    return (
      <div>
        <Query query={ALL_TAGS_QUERY}>
          {({ loading, error, data, classes }) => {
            if (loading) return "loading";
            if (error) return `Error! ${error.message}`;
            if (data) return <Share tags={data.tags} classes={classes} />;
          }}
        </Query>
      </div>
    );
  }
}

export default ShareContainer;

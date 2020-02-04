import ItemCard from "../ItemCard";
import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid, makeStyles } from "@material-ui/core/";
import styles from "./styles";

const useStyles = makeStyles({
  cardGrid: {
    display: "flex",
    flexWrap: "wrap",
    padding: "100px 3%"
  },
  singleCard: {
    // flexBasis: "33%"
    maxWidth: "33%"
  }
});
const ItemGrid = ({ items }) => {
  const classes = useStyles();

  return (
    <Grid item className={classes.cardGrid}>
      <Grid container justify="flex-start" spacing={3}>
        {items.map(item => {
          //   console.log(item);
          return (
            <Grid item xs={10} className={classes.singleCard} key={item.id}>
              <ItemCard
                image={item.imageurl}
                title={item.title}
                description={item.description}
                created={item.created}
                tags={item.tags}
                owner={item.itemowner}
              />
            </Grid>
          );
        })}
        {console.log("hello", items)}
      </Grid>
    </Grid>
  );
};

// class ItemGrid extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       hasItems: true
//     };
//   }
//   render() {
//     console.log(props);

//     return this.state.hasItems ? (
//       <section className="item-grid">
//         this is from ItemGrid inside components
//         <ItemCard />;
//       </section>
//     ) : (
//       <section>There appears to be no items. Sorry!</section>
//     );
//   }
// }

export default withStyles(styles)(ItemGrid);

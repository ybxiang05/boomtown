import React, { Component, useState } from "react";
import { withStyles, CheckBox, TextField } from "@material-ui/core/";
import styles from "./styles";
import ItemCard from "../ItemCard";
import ItemsContainer from "../../pages/Items";
import Button from "@material-ui/core/Button";

import { Form, Field } from "react-final-form";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";
import Input from "@material-ui/core/Input";

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium
  };
}
class ShareItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: true
    };
  }
  onSubmit = values => {
    console.log(values);
  };
  validate = values => {
    const errors = {};
    console.log(values);
  };
  // setChecked = () => {
  //   this.setState({
  //     isChecked: !this.state.isClicked
  //   });
  // };
  handleChange = event => {
    this.setChecked(event.target.checked);
  };

  render() {
    let { classes } = this.props;
    return (
      <Form
        onSubmit={this.onSubmit}
        validate={this.validate}
        render={({ handleSubmit, pristine }) => {
          return (
            <form onSubmit={handleSubmit} className={classes.formContainer}>
              <h1>Share. Borrow. Prosper.</h1>
              <input
                accept="image/*"
                className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
              />
              {/* <label htmlFor="contained-button-file"> */}
              <Button variant="contained" color="primary" component="span">
                upload an image{" "}
              </Button>
              {/* </label> */}

              <Field
                name="item name"
                type="text"
                render={({ input, meta }) => (
                  <React.Fragment>
                    <TextField {...input} placeholder="Name your item." />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </React.Fragment>
                )}
              />

              <Field
                name="item description"
                type="text"
                multiline
                rows="3"
                render={({ input, meta }) => (
                  <React.Fragment>
                    <TextField {...input} placeholder="Describe your item." />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </React.Fragment>
                )}
              />

              <FormControl>
                <h2>Add Tags:</h2>
                <div className={classes.tagsContainer}>
                  {this.props.tags.map(tag => (
                    <MenuItem key={tag.id} value={tag}>
                      <Checkbox onChange={console.log("poop")} />
                      <ListItemText primary={tag.title} />
                    </MenuItem>
                  ))}
                </div>
              </FormControl>
              <Button
                className={classes.shareButton}
                variant="contained"
                color="primary"
                component="span"
                type="submit"
                disabled={pristine}
              >
                Share
              </Button>
            </form>
          );
        }}
      ></Form>
    );
  }
}
export default withStyles(styles)(ShareItemForm);

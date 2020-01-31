import React, { Component } from "react";
import { withStyles, CheckBox, TextField } from "@material-ui/core/";
import styles from "./styles";
import { Form, Field } from "react-final-form";

class ShareItemForm extends Component {
  onSubmit = values => {
    console.log(values);
  };
  validate = values => {
    const errors = {};
    console.log(values);
  };

  render() {
    console.log(this.props);
    const { classes } = this.props;
    return (
      <Form
        onSubmit={this.onSubmit}
        validate={this.validate}
        render={({ handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit} className={classes.formContainer}>
              <Field
                name="item name"
                type="textarea"
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
                render={({ input, meta }) => (
                  <React.Fragment>
                    <TextField {...input} placeholder="Describe your item." />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </React.Fragment>
                )}
              />
            </form>
          );
        }}
      ></Form>
    );
  }
}

export default withStyles(styles)(ShareItemForm);

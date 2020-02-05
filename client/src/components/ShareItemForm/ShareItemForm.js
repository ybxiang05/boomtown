import React, { Component, useState } from "react";
import { withStyles, CheckBox, TextField } from "@material-ui/core/";
import styles from "./styles";
import Button from "@material-ui/core/Button";
import HomeIcon from "@material-ui/icons/Home";
import BuildIcon from "@material-ui/icons/Build";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import DevicesIcon from "@material-ui/icons/Devices";
import { Form, Field, FormSpy } from "react-final-form";
import { Mutation } from "react-apollo";
import { ADD_ITEM_MUTATION } from "../../apollo/queries";

import { ItemPreviewContext } from "../../context/ItemPreviewProvider";

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

  applyTags = (tags, allTags) => {
    return tags.map(tag => {
      const updatedTag = { title: tag };
      allTags.filter(t => {
        if (t.title === tag) {
          updatedTag.id = t.id;
        }
      });
      return updatedTag;
    });
  };

  dispatchUpdate = (values, allTags, updatePreview) => {
    updatePreview({
      ...values,
      tags: this.applyTags(values.tags || [], allTags)
    });
  };
  addItem = () => {};

  render() {
    let { classes, tags } = this.props;
    return (
      <ItemPreviewContext.Consumer>
        {({ updatePreview, resetPreview }) => {
          return (
            <Mutation mutation={ADD_ITEM_MUTATION}>
              {addItem => (
                <Form
                  onSubmit={async values => {
                    console.log(values);
                    try {
                      await addItem({
                        variables: {
                          item: { ...values, tags: this.applyTags(values.tags || [], tags) }
                        }
                      });
                    } catch (error) {
                      throw error;
                    }
                    resetPreview();
                    // Form.reset();
                  }}
                  // validate={this.validate}
                  render={({ handleSubmit, pristine }) => {
                    return (
                      <form onSubmit={handleSubmit} className={classes.formContainer}>
                        <FormSpy
                          subscription={{ values: true }}
                          onChange={({ values }) => {
                            if (values) {
                              this.dispatchUpdate(values, tags, updatePreview);
                            }
                            return "";
                          }}
                        />
                        <h1>Share. Borrow. Prosper.</h1>

                        <Field
                          name="title"
                          type="text"
                          render={({ input, meta }) => (
                            <React.Fragment>
                              <TextField {...input} placeholder="Name your item." />
                              {meta.error && meta.touched && <span>{meta.error}</span>}
                            </React.Fragment>
                          )}
                        />

                        <Field
                          name="description"
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

                        <label className={classes.tagIcons}>
                          <Field name="tags" component="input" type="checkbox" value="Tools" />
                          Tools
                          <HomeIcon />
                        </label>
                        <label className={classes.tagIcons}>
                          <Field
                            name="tags"
                            component="input"
                            type="checkbox"
                            value="Electronics"
                          />
                          Electronics <DevicesIcon />
                        </label>
                        <label className={classes.tagIcons}>
                          <Field
                            name="tags"
                            component="input"
                            type="checkbox"
                            value="Physical Media"
                          />
                          Physical Media <HomeIcon />
                        </label>
                        <label className={classes.tagIcons}>
                          <Field
                            name="tags"
                            component="input"
                            type="checkbox"
                            value="Sporting Goods"
                          />
                          Sporting Goods <HomeIcon />
                        </label>
                        <label className={classes.tagIcons}>
                          <Field
                            name="tags"
                            component="input"
                            type="checkbox"
                            value="Musical Instruments"
                          />
                          Musical Instruments <MusicNoteIcon />
                        </label>
                        <label className={classes.tagIcons}>
                          <Field
                            name="tags"
                            component="input"
                            type="checkbox"
                            value="Recreational Equipment"
                          />
                          Recreational Equipment <HomeIcon />
                        </label>
                        <label className={classes.tagIcons}>
                          <Field
                            name="tags"
                            component="input"
                            type="checkbox"
                            value="Household Item"
                          />
                          Household Item
                          <BuildIcon />
                        </label>
                        <Button
                          className={classes.shareButton}
                          variant="contained"
                          color="primary"
                          type="submit"
                          disabled={pristine}
                        >
                          Share
                        </Button>
                      </form>
                    );
                  }}
                />
              )}
            </Mutation>
          );
        }}
      </ItemPreviewContext.Consumer>
    );
  }
}
export default withStyles(styles)(ShareItemForm);

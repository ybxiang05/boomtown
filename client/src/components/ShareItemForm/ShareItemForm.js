import React, { Component, useState } from "react";
import { withStyles, CheckBox, TextField, Box } from "@material-ui/core/";
import styles from "./styles";
import Button from "@material-ui/core/Button";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import BuildOutlinedIcon from "@material-ui/icons/BuildOutlined";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import DevicesIcon from "@material-ui/icons/Devices";
// import SportsIcon from "@material-ui/icons/Sports";
import BookOutlinedIcon from "@material-ui/icons/BookOutlined";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { Form, Field, FormSpy } from "react-final-form";
import { Mutation } from "react-apollo";
import { withRouter } from "react-router-dom";
import { ADD_ITEM_MUTATION } from "../../apollo/queries";
// import { Alert, AlertTitle } from "@material-ui/lab";

import { ItemPreviewContext } from "../../context/ItemPreviewProvider";

class ShareItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // isChecked: true
    };
  }

  validate = values => {
    const errors = {};
    if (!values.title) {
      errors.title = "required";
    }
    if (!values.description) {
      errors.description = "required";
    }
    if (!values.tags) {
      errors.tags = "required";
    }
    return errors;
  };

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

  render() {
    let { classes, tags } = this.props;
    return (
      <ItemPreviewContext.Consumer>
        {({ updatePreview, resetPreview, form }) => {
          return (
            <Mutation mutation={ADD_ITEM_MUTATION}>
              {addItem => (
                <Form
                  validate={this.validate}
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
                    alert(
                      "Your item has been added. Click 'OK' to be directed to your profile page."
                    );
                    this.props.history.push("/profile");
                  }}
                  render={({ handleSubmit, pristine, submitting, invalid }) => {
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
                        <Box className={classes.tagsContainer}>
                          <label className={classes.tagIcons}>
                            <Field name="tags" component="input" type="checkbox" value="Tools" />
                            Tools
                            <BuildOutlinedIcon className={classes.icons} />
                          </label>
                          <label className={classes.tagIcons}>
                            <Field
                              name="tags"
                              component="input"
                              type="checkbox"
                              value="Electronics"
                            />
                            Electronics <DevicesIcon className={classes.icons} />
                          </label>
                          <label className={classes.tagIcons}>
                            <Field
                              name="tags"
                              component="input"
                              type="checkbox"
                              value="Physical Media"
                            />
                            Physical Media <BookOutlinedIcon className={classes.icons} />
                          </label>
                          <label className={classes.tagIcons}>
                            <Field
                              name="tags"
                              component="input"
                              type="checkbox"
                              value="Sporting Goods"
                            />
                            Sporting Goods <HomeOutlinedIcon className={classes.icons} />
                          </label>
                          <label className={classes.tagIcons}>
                            <Field
                              name="tags"
                              component="input"
                              type="checkbox"
                              value="Musical Instruments"
                            />
                            Musical Instruments <MusicNoteIcon className={classes.icons} />
                          </label>
                          <label className={classes.tagIcons}>
                            <Field
                              name="tags"
                              component="input"
                              type="checkbox"
                              value="Recreational Equipment"
                            />
                            Recreational Equipment <InsertEmoticonIcon className={classes.icons} />
                          </label>
                          <label className={classes.tagIcons}>
                            <Field
                              name="tags"
                              component="input"
                              type="checkbox"
                              value="Household Item"
                            />
                            Household Item
                            <HomeOutlinedIcon className={classes.icons} />
                          </label>
                        </Box>
                        <Button
                          className={classes.shareButton}
                          variant="contained"
                          color="primary"
                          type="submit"
                          disabled={pristine || invalid || submitting}
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
export default withRouter(withStyles(styles)(ShareItemForm));

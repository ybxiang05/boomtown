import React from "react";
import { withStyles, TextField, Box, Button, Typography } from "@material-ui/core/";
import styles from "./styles";
import BuildOutlinedIcon from "@material-ui/icons/BuildOutlined";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import DevicesIcon from "@material-ui/icons/Devices";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import BookOutlinedIcon from "@material-ui/icons/BookOutlined";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { Form, Field, FormSpy } from "react-final-form";
import { Mutation } from "react-apollo";
import { withRouter } from "react-router-dom";
import { ADD_ITEM_MUTATION } from "../../apollo/queries";
import { ItemPreviewContext } from "../../context/ItemPreviewProvider";
import propTypes from "prop-types";
import validate from "./helpers/validation";

class ShareItemForm extends React.Component {
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
        {({ updatePreview, resetPreview }) => {
          return (
            <Mutation mutation={ADD_ITEM_MUTATION}>
              {addItem => (
                <Form
                  validate={validate.bind(this)}
                  onSubmit={async values => {
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
                        <Typography variant="h3" className={classes.title}>
                          Share. Borrow. Prosper.
                        </Typography>

                        <Field
                          name="title"
                          type="text"
                          render={({ input, meta }) => (
                            <React.Fragment>
                              <TextField
                                {...input}
                                className={classes.inputField}
                                placeholder="Name your item."
                              />
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
                              <TextField
                                {...input}
                                className={classes.inputField}
                                placeholder="Describe your item."
                              />
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
                            Sporting Goods <FitnessCenterIcon className={classes.icons} />
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
ShareItemForm.propTypes = {
  classes: propTypes.object.isRequired,
  tags: propTypes.array
};
export default withRouter(withStyles(styles)(ShareItemForm));

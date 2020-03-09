import {
  Button,
  FormControl,
  Grid,
  Input,
  InputLabel,
  Typography,
  withStyles
} from "@material-ui/core/";
import React, { Component } from "react";
import { Form, Field } from "react-final-form";
import { LOGIN_MUTATION, SIGNUP_MUTATION, VIEWER_QUERY } from "../../apollo/queries";
import { Mutation } from "react-apollo";
import validate from "./helpers/validation";
import styles from "./styles";
import propTypes from "prop-types";

class AccountForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formToggle: true,
      error: null
    };
  }

  render() {
    const { classes } = this.props;

    return (
      //took out compose, with nested mutations and compose technically I had four mutations... had to move refetchQueries up here because it was in compose...
      <Mutation mutation={LOGIN_MUTATION} refetchQueries={[{ query: VIEWER_QUERY }]}>
        {loginMutation => (
          <Mutation mutation={SIGNUP_MUTATION} refetchQueries={[{ query: VIEWER_QUERY }]}>
            {signupMutation => (
              <Form
                onSubmit={values => {
                  const user = { variables: { user: values } };
                  this.state.formToggle
                    ? loginMutation(user).catch(error => this.setState({ error }))
                    : signupMutation(user).catch(error => this.setState({ error }));
                }}
                validate={validate.bind(this)}
                render={({ handleSubmit, pristine, invalid, form }) => (
                  <form onSubmit={handleSubmit} className={classes.accountForm}>
                    {!this.state.formToggle && (
                      <FormControl fullWidth className={classes.formControl}>
                        <InputLabel htmlFor="fullname">Username</InputLabel>
                        <Field name="fullname">
                          {({ input, meta }) => (
                            <React.Fragment>
                              <Input
                                id="fullname"
                                type="text"
                                inputProps={{
                                  ...input,
                                  autoComplete: "off"
                                }}
                                value={input.value}
                              />
                              {meta.error && meta.touched && <span>{meta.error}</span>}
                            </React.Fragment>
                          )}
                        </Field>
                      </FormControl>
                    )}
                    <FormControl fullWidth className={classes.formControl}>
                      <InputLabel htmlFor="email">Email</InputLabel>
                      <Field name="email">
                        {({ input, meta }) => (
                          <React.Fragment>
                            <Input
                              id="email"
                              type="text"
                              inputProps={{
                                ...input,
                                autoComplete: "off"
                              }}
                              value={input.value}
                            />
                            {meta.error && meta.touched && <span>{meta.error}</span>}
                          </React.Fragment>
                        )}
                      </Field>
                    </FormControl>
                    <FormControl fullWidth className={classes.formControl}>
                      <InputLabel htmlFor="password">Password</InputLabel>
                      <Field name="password" type="password">
                        {({ input, meta }) => (
                          <React.Fragment>
                            <Input
                              id="password"
                              type="password"
                              inputProps={{
                                ...input,
                                autoComplete: "off"
                              }}
                              value={input.value}
                            />
                            {meta.error && meta.touched && <span>{meta.error}</span>}
                          </React.Fragment>
                        )}
                      </Field>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                      <Grid container direction="row" justify="space-between" alignItems="center">
                        <Button
                          type="submit"
                          className={classes.formButton}
                          variant="contained"
                          size="large"
                          color="secondary"
                          disabled={pristine || invalid}
                        >
                          {this.state.formToggle ? "Enter" : "Create Account"}
                        </Button>
                        <Typography>
                          <button
                            className={classes.formToggle}
                            type="button"
                            onClick={() => {
                              form.reset();
                              this.setState({
                                formToggle: !this.state.formToggle,
                                error: null
                              });
                            }}
                          >
                            {this.state.formToggle
                              ? "Create an account."
                              : "Login to existing account."}
                          </button>
                        </Typography>
                      </Grid>
                    </FormControl>
                    <Typography className={classes.errorMessage}>
                      {this.state.error ? <span>{this.state.error.message}</span> : null}
                    </Typography>
                  </form>
                )}
              />
            )}
          </Mutation>
        )}
      </Mutation>
    );
  }
}

AccountForm.propTypes = {
  classes: propTypes.object
};

export default withStyles(styles)(AccountForm);

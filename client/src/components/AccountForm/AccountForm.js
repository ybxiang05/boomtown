import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { Form, Field } from "react-final-form";
import { LOGIN_MUTATION, SIGNUP_MUTATION, VIEWER_QUERY } from "../../apollo/queries";
import { Mutation } from "react-apollo";
import { graphql, compose } from "react-apollo";
import validate from "./helpers/validation";
import styles from "./styles";

class AccountForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formToggle: true,
      error: null
    };
  }

  render() {
    const { classes, loginMutation, signupMutation } = this.props;

    return (
      <Mutation mutation={LOGIN_MUTATION} refetchQueries={[{ query: VIEWER_QUERY }]}>
        {login => (
          <Mutation mutation={SIGNUP_MUTATION} refetchQueries={[{ query: VIEWER_QUERY }]}>
            {signup => (
              <Form
                onSubmit={values => {
                  const user = { variables: { user: values } };
                  this.state.formToggle
                    ? loginMutation(user).catch(error => this.setState({ error }))
                    : signupMutation(user).catch(error => this.setState({ error }));
                }}
                validate={validate.bind(this)}
                render={({ handleSubmit, pristine, invalid, submitting, form }) => (
                  <form onSubmit={handleSubmit} className={classes.accountForm}>
                    {!this.state.formToggle && (
                      <FormControl fullWidth className={classes.formControl}>
                        <InputLabel htmlFor="fullname">Username</InputLabel>
                        <Field name="fullname">
                          {({ input, meta }) => (
                            <Input
                              id="fullname"
                              type="text"
                              inputProps={{
                                ...input,
                                autoComplete: "off"
                              }}
                              value={input.value}
                            />
                          )}
                        </Field>
                      </FormControl>
                    )}
                    <FormControl fullWidth className={classes.formControl}>
                      <InputLabel htmlFor="email">Email</InputLabel>
                      <Field name="email">
                        {({ input, meta }) => (
                          <Input
                            id="email"
                            type="text"
                            inputProps={{
                              ...input,
                              autoComplete: "off"
                            }}
                            value={input.value}
                          />
                        )}
                      </Field>
                    </FormControl>
                    <FormControl fullWidth className={classes.formControl}>
                      <InputLabel htmlFor="password">Password</InputLabel>
                      <Field name="password" type="password">
                        {({ input, meta }) => (
                          <Input
                            id="password"
                            type="password"
                            inputProps={{
                              ...input,
                              autoComplete: "off"
                            }}
                            value={input.value}
                          />
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
                          onClick={() => {
                            {
                              this.state.formToggle ? login() : signup();
                            }
                          }}
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
                                formToggle: !this.state.formToggle
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
                      {(this.state.error &&
                        this.state.formToggle &&
                        this.state.error.graphQLErrors.message) ||
                        (this.state.error &&
                          !this.state.formToggle &&
                          this.state.error.graphQLErrors.message)}
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

const refetchQueries = [{ query: VIEWER_QUERY }];
export default compose(
  graphql(SIGNUP_MUTATION, {
    name: "signupMutation",
    options: {
      refetchQueries
    }
  }),
  graphql(LOGIN_MUTATION, {
    name: "loginMutation",
    options: {
      refetchQueries
    }
  }),
  withStyles(styles)
)(AccountForm);

import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from '@material-ui/core/TextField'
import Layout from '../ContentLayout';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import { streamCreate } from "../../actions";
import { connect } from 'react-redux';


class StreamCreate extends React.Component {

    onSubmit = (formValues) => {
        this.props.createStream(formValues);
    }

    validate = values => {
        const errors = {}
        const requiredFields = [
          'title'
        ]
        requiredFields.forEach(field => {
          if (!values[field]) {
            errors[field] = 'Required'
          }
        })
        return errors
      }

    renderTextField = ({
        label,
        input,
        meta: { touched, invalid, error },
        ...custom
      }) => (
        <TextField
          mb={10}
          label={label}
          placeholder={label}
          error={touched && invalid}
          helperText={touched && error}
          {...input}
          {...custom}
        />
      )

    renderForm() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <div>
                  <Field name="title" component={this.renderTextField} label="Stream title" />
                </div><br />
                <Field name="description" component={this.renderTextField} label="Stream description" />
                <div><br /><br />
                <Button variant="outlined" color="secondary" type="submit" startIcon={<SendIcon />}>Submit</Button>
                </div>
            </form>
        )
    }

    render() {
        return <Layout component={this.renderForm()} />
    }

}

const validate = (values) => {
  const errors = {};
  const requiredFields = [
    'title', 'description'
  ];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  });
  return errors;
}

const formWrapped = reduxForm({
    form: 'streamCreate',
    validate,
})(StreamCreate);

export default connect(null, { createStream: streamCreate })(formWrapped);

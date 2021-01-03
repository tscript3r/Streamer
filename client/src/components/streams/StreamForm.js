import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from '@material-ui/core/TextField'
import Layout from '../ContentLayout';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';

class StreamForm extends React.Component {

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
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
                <Field name="description" component={this.renderTextField} label="Description" />
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

export default reduxForm({
    form: 'putStream',
    validate,
})(StreamForm);
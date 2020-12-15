import React, {Component} from 'react';
import {Form, Field, Formik} from 'formik';

class AddUser extends Component {
    initialValues = {
        username: "",
        firstName: "",
        lastName: "",
        noOfGames: 0
    }

    handleSubmit = (values) => {
        if(this.props.usersData.some(user => user.username === values.username)) {
            alert("This user already exists");
        } else {
            this.props.handleAddUser(values);
        }
    }

    render () {
        return (
            <div>
                <Formik
                initialValues={this.initialValues}
                onSubmit={this.handleSubmit}
                >
                <Form>
                    Username: <Field name="username" type="text" />
                    First Name: <Field name="firstName" type="text"/>
                    Last Name: <Field name="lastName" type="text"/>
                    No. of Games: <Field name="noOfGames" type="text"/>
                    <button type="submit"> Add User </button>
                </Form>
                </Formik>
            </div>
        )
    }
}

export default AddUser;
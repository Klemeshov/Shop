import React from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {isCounterpartyCheck} from "../../../redux/CartReducer";
import {Input} from "../../common/Forms/Forms";
import {required} from "../../../Validators/Validators";

const CounterpartyForm = reduxForm({form: 'counterparty'})((props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input}
                       // ErrorClassName={}
                       name={"name"}
                       validate={required}
                       placeholder={'name'}/>
            </div>
            <div>
                <Field component={Input}
                       //ErrorClassName={}
                       name={"phone"}
                       validate={required}
                       placeholder={'phone'}/>
            </div>
            <div>
                <Field component={Input}
                       //ErrorClassName={}
                       name={"email"}
                       validate={required}
                       placeholder={'email'}/>
            </div>
            <div>
                <button>
                    submit
                </button>
            </div>
        </form>
    )
});


const submitForm = (isCounterpartyCheck) => (formData) => {
    isCounterpartyCheck(formData.name, formData.phone, formData.email);
};

const Counterparty = (props)=>{
    return(
        <div>
            <div>
                <CounterpartyForm onSubmit={submitForm(props.isCounterpartyCheck)}/>
            </div>
            <div>
                {props.isCounterparty}
            </div>
        </div>
    )
};

const mapStateToProps = (state) =>({
    isCounterparty: state.cart.isCounterparty
});

export default connect(mapStateToProps, {isCounterpartyCheck})(Counterparty);
import React from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {isCounterpartyCheck} from "../../../redux/CartReducer";
import {Input} from "../../common/Forms/Forms";
import {email, phone, required} from "../../../Validators/Validators";
import classes from "./Counterparty.module.css"

const CounterpartyForm = reduxForm({form: 'counterparty'})((props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input}
                       className={classes.Input}
                       errorclassname={classes.ErrorInput}
                       name={"name"}
                       validate={required}
                       placeholder={'name'}/>
            </div>
            <div>
                <Field component={Input}
                       className={classes.Input}
                       errorclassname={classes.ErrorInput}
                       name={"phone"}
                       validate={[required, phone]}
                       placeholder={'phone'}/>
            </div>
            <div>
                <Field component={Input}
                       className={classes.Input}
                       errorclassname={classes.ErrorInput}
                       name={"email"}
                       validate={[required, email]}
                       placeholder={'email'}/>
            </div>
            <div>
                <Field component={Input}
                       className={classes.Input}
                       errorclassname={classes.ErrorInput}
                       name={"address"}
                       validate={required}
                       placeholder={'address'}/>
            </div>
            <div>
                <Field component={"textarea"}
                       className={classes.TextArea}
                       name={"Comment"}
                       placeholder={'Комментарий к заказу'}/>
            </div>
            <div>
                <button className={classes.Button}>
                    Оформить заказ
                </button>
            </div>
        </form>
    )
});


const submitForm = (isCounterpartyCheck) => (formData) => {
    isCounterpartyCheck(formData.name, formData.phone, formData.email);
};

const Counterparty = (props) => {
    return (
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

const mapStateToProps = (state) => ({
    isCounterparty: state.cart.isCounterparty
});

export default connect(mapStateToProps, {isCounterpartyCheck})(Counterparty);
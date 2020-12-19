import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { login } from "../../redux/auth-reducer";
import { required } from "../../utils/validators/validators";
import { Input } from "../common/FormControls/FormControls";
import s from "../Login/Login.module.css";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.form}>
            <div className={s.login}>
                <Field
                    component={Input}
                    validate={[required]}
                    name="login"
                    placeholder="Login"
                />
            </div>
            <div className={s.password}>
                <Field
                    component={Input}
                    validate={[required]}
                    name="password"
                    placeholder="Password"
                />
            </div>
            <div className={s.remember}>
                <Field component={Input} name="rememberMe" type="checkbox" />{" "}
                Remember me
            </div>
            {props.error ? (
                <div className={s.error_all_form}>{props.error}</div>
            ) : null}

            {props.captchaURL ? (
                <img src={props.captchaURL} alt="jopa" />
            ) : null}
            {props.captchaURL ? (
                <Field
                    placeholder="Input symbols"
                    name="loginCaptcha"
                    component={Input}
                    type="text"
                />
            ) : null}

            <div className={s.form_btn}>
                <button>Sign in</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(
            formData.login,
            formData.password,
            formData.rememberMe,
            formData.loginCaptcha
        );
    };

    if (props.isAuth) {
        return <Redirect to={"/profile"} />;
    }
    return (
        <div className={s.wrapper}>
            <div className={s.title}>Login</div>
            <LoginReduxForm onSubmit={onSubmit} {...props} />
        </div>
    );
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaURL: state.auth.captchaURL,
});
export default connect(mapStateToProps, { login })(Login);

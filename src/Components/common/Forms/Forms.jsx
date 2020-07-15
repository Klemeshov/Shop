import React from "react";
import classes from "./Forms.module.css"


export const Input = ({input, meta, ...props}) => {
    const isError = meta.touched && meta.error;
    return (
        <div>
            <div>
                <input{...input} {...props}
                      className={props.className + ' ' + (isError?classes.errorForm:"")}/>
            </div>
            {isError ? <span className={classes.error + ' ' + props.ErrorClassName}>
                {meta.error}
            </span> : <></>}
        </div>
    )
};
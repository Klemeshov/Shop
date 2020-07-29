import React from "react";
import classes from "./Forms.module.css"


export const Input = ({input, meta, ...props}) => {
    const isError = meta.touched && meta.error;
    return (
        <div>
            <div>
                <input{...input} {...props}
                      className={isError
                          ?(classes.errorForm + ' ' + props.className + ' ' + props.errorclassname)
                          :props.className}/>
            </div>
            {isError ? <span className={classes.error}>
                {meta.error}
            </span> : <></>}
        </div>
    )
};
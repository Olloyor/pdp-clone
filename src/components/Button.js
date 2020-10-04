import React from 'react';

export default function({label,...props}){
    return (
        <button {...props} className="btn btn-primary custom-btn">{label}</button>
    )
}

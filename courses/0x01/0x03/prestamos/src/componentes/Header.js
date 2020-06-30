import React, { Fragment } from 'react';
/**
 * forma - function declaration
 */
function Header({titulo}) {
    // Add code js
    return (
        <Fragment>
            <h1>{ titulo }</h1>
        </Fragment>
    )
}
export default Header;
/**
 * Forma - funtion expression
 *
const Header = ({titulo}) => {
    // Add code js
    return (
        <Fragment>
            <h1>{ titulo }</h1>
        </Fragment>
    );
}
export default Header;
*/
/**
 * Forma - function expression
 * Implicito return
 * No requiere Fragment
 * No hay donde agregar código js
 *
const Header = ({titulo}) => (
            <h1>{ titulo }</h1>
);
export default Header;
*/
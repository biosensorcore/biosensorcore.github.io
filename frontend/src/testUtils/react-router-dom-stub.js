const React = require('react');

function Link({ to, children, className, ...rest }) {
    return React.createElement('a', { href: to, className, ...rest }, children);
}

module.exports = {
    Link
};

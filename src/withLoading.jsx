import React from 'react';

const withLoading = (WrappedComponent) => {
    return props => {
        return (
            <div>
                It got wrapped
                <WrappedComponent {...props} />
            </div>
        );
    }
};

export default withLoading;

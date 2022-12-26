import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

import LoadingContext from '../../contexts/LoadingContext';

const Loading = ({ children }) => (
  <LoadingContext.Consumer>
    {(context: any) => {
      const { loading } = context;
      const value = loading ? { opacity: '0.2', pointerEvents: 'none' } : {};
      return (
        <>
          <div style={value}>{children}</div>
          {loading && (
            <CircularProgress
              size={50}
              variant="indeterminate"
              style={{
                position: 'absolute',
                zIndex: '9999',
                top: '46%',
                left: '48%',
              }}
            />
          )}
        </>
      );
    }}
  </LoadingContext.Consumer>
);

export default Loading;

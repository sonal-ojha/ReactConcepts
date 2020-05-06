import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
    };
  }
  
  // Life cycle method to catch errors
  componentDidCatch(error) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
    })
    // You can also log error messages to an error reporting service here
  }
  
  render() {
    if (!!this.state.error) {
      // Error path
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
          </details>
        </div>
      );
    }
    // Normally, just render children
    return this.props.children;
  }  
}

export default ErrorBoundary;
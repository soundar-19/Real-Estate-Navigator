import React, { Component } from 'react';
import { AlertCircle } from 'lucide-react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log error to error reporting service
    console.error('Error Boundary caught:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
          <div className="max-w-md w-full space-y-4">
            <div className="flex items-center justify-center">
              <AlertCircle className="w-12 h-12 text-red-500" />
            </div>
            <h1 className="text-2xl font-bold text-center">Something went wrong</h1>
            <p className="text-gray-600 text-center">
              We're sorry for the inconvenience. Please try refreshing the page.
            </p>
            <button
              onClick={this.handleReset}
              className="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

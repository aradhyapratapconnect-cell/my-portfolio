import { Component } from "react";
import type { ErrorInfo, ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

/** Catches rendering errors so the rest of the page keeps working. */
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    console.error("Portfolio render error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center p-8" role="alert">
          <div className="max-w-md text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ink-muted">
              Something went wrong
            </p>
            <h1 className="mt-3 text-2xl font-semibold tracking-tight text-ink">
              This section could not be displayed.
            </h1>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              Please refresh the page. If the problem continues, try a different browser.
            </p>
            <button
              type="button"
              onClick={() => this.setState({ hasError: false })}
              className="mt-6 inline-flex h-10 items-center justify-center rounded-full bg-ink px-5 text-sm font-medium text-white"
            >
              Try again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
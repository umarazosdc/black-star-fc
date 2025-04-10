"use client";
import ErrorBoundaryJSX from "@/components/utils/ErrorBoundary";

const ErrorBoundary = ({ reset }: { reset: () => void }) => {
  return <ErrorBoundaryJSX reset={reset} />;
};

export default ErrorBoundary;

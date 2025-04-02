import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const ErrorBoundary = ({ reset }: { reset: () => void }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(false);

  const handleReset = () => {
    setIsLoading(true);
    React.startTransition(() => {
      router.refresh();
      reset();
      setIsLoading(false);
    });
  };

  return (
    <div className="flex flex-col items-center justify-center gap-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="flex flex-col items-center gap-2">
        <h1 className="font-bold">Error!</h1>
        <p className="text-sm text-primary-foreground">
          Something went wrong. Please try again
        </p>
      </div>
      <button
        className="text-primary py-2 px-4 rounded-md shadow-md bg-accent text-sm"
        onClick={handleReset}
        disabled={isLoading}
      >
        Try again
      </button>
      <p className="text-sm text-primary-foreground">
        Still having trouble?{" "}
        <Link href={`/`} className="text-accent underline">
          Go Home
        </Link>
      </p>
    </div>
  );
};

export default ErrorBoundary;

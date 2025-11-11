import React from 'react';

const Error = () => {
    return (
        <div class="flex flex-col items-center justify-center min-h-screen bg-base-200 text-center p-6">
            <h1 class="text-[10rem] font-extrabold text-primary animate-bounce">404</h1>
            <h2 class="text-3xl font-bold mb-2 text-secondary">Oops! Page not found</h2>
            <p class="text-gray-500 mb-8">
                The page you’re looking for doesn’t exist or has been moved.
            </p>
            <div class="flex gap-4">
                <a href="/" class="btn btn-outline btn-secondary btn-wide">Back to Home</a>
            </div>

            <div class="absolute bottom-10 flex gap-2">
                <span class="w-3 h-3 bg-primary rounded-full animate-ping"></span>
                <span class="w-3 h-3 bg-secondary rounded-full animate-pulse"></span>
                <span class="w-3 h-3 bg-accent rounded-full animate-bounce"></span>
            </div>
        </div>
    );
};

export default Error;
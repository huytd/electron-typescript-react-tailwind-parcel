import * as React from 'react';

export const App = (props: any) => {
    return <div className="w-full h-full flex flex-col">
        <div className="draggable px-20 py-2 bg-gray-200 text-center">Title Bar</div>
        <div className="flex-1 p-5">
            Content
        </div>
    </div>;
};
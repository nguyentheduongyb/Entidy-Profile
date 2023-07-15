import React from "react";
const Custom404 = () => {
        return (
                <div className="container">
                        <div className="grid place-content-center min-h-screen">
                                <div className="flex flex-col items-center gap-4">
                                        <h1 className="text-4xl my-8">
                                                404 - Page Not Found
                                        </h1>
                                </div>
                        </div>
                </div>

        );
};
export default Custom404;
Custom404.Layout = "Default";
// Custom404.Layout = "OtherLayout"; -> error Type '"OtherLayout"' is not assignable to type '"Main" | "Admin" | undefined'.
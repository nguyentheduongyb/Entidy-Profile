import React, { PropsWithChildren } from "react";
import Header from "~/components/common/Header";
import Footer from "~/components/common/Footer";
const DefaultLayout = ({ children }: PropsWithChildren) => {
        return (
                <>
                        <Header />
                        <main className="w-full min-h-screen">
                                {children}
                        </main>
                        <Footer />
                </>
        );
};
export default DefaultLayout;
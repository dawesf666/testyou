import React from "react";

type Props = {};

const Footer = (props: Props) => {
    return (
        <div className="flex flex-col md:lg:flex-row align-center justify-center gap-10 mb-10">
            <div>Uno</div>
            <div>Due</div>
            <div>Tre</div>
        </div>
    );
};

export default Footer;

import React from "react";
import Footer from "../../share/footer";
import PageTitle from "../../share/page-title";
import CommonContact from "./common-contact";

const Contact = () => {
    return (
        <>
            <PageTitle title="Contact"></PageTitle>
            {/* End pagetitle */}

            <div className="bg-white  lg:rounded-2xl dark:bg-[#111111]">
                {/* Contact page title */}
                <h2 className="after-effect after:left-60 after:top-[76px] mb-12 md:mb-[30px] pl-4 md:pl-[60px] pt-12">
                    Contact
                </h2>
                <CommonContact condition={true} />
                <Footer bg={"#F8FBFB"} />
            </div>
        </>
    );
};

export default Contact;

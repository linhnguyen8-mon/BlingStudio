import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Button } from "./Button";

const ContactForm = ({ onSuccess }) => {
    const [state, handleSubmit] = useForm("mnqeoble");
    const handleFormSubmit = async (e) => {
        await handleSubmit(e);
        if (state.succeeded) {
            onSuccess();
        }
    };

    return (
        <div className="p-8 h-full relative">
            <form
                onSubmit={handleFormSubmit}
                className="flex flex-col relative gap-8 "
            >
                {/* Full name, email */}
                <div className="flex smm:flex-col lg:flex-row md:flex-row gap-8">
                    <div className="flex-grow flex flex-col gap-2">
                        <label className="font-semibold" htmlFor="name">
                            Full name
                        </label>
                        <input
                            className="mt-2 w-full bg-[#fff] p-4 rounded-lg border-gray-100 border-2 hover:border-brand hover:border-opacity-60"
                            id="name"
                            type="name"
                            name="name"
                            placeholder="Enter your full name"
                            style={{ outlineWidth: 0 }}
                        />
                        <ValidationError
                            prefix="Name"
                            field="name"
                            errors={state.errors}
                        />
                    </div>
                    <div className="flex-grow flex flex-col gap-2">
                        <label className="font-semibold" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="mt-2 w-full bg-[#fff] p-4 rounded-lg border-gray-100 border-2 hover:border-brand hover:border-opacity-60"
                            id="email"
                            type="email"
                            name="email"
                            placeholder="email@example.com"
                            style={{ outlineWidth: 0 }}
                        />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                    </div>
                </div>

                {/* Tell us */}
                <div className="flex flex-col gap-2">
                    <label className="font-semibold" htmlFor="message">
                        Tell us a little about your business & the services
                        you're hoping to work with us on.
                    </label>
                    <textarea
                        className="bg-[#fff] p-4 rounded-lg border-gray-100 border-2 hover:border-brand hover:border-opacity-60 focus-within:border-brand"
                        id="message"
                        name="message"
                        placeholder="I want to create a {___mobile app___}. I'm inspired by apps like {___app name___}. My goal is to make an app that's even better. I expect the project to end with a really good app with {___features___}."
                        style={{ minHeight: "10rem" }}
                    />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                </div>

                {/* Guidance */}
                <div className="font-main text-secondary flex-grow">
                    <span className="text-primary font-bold "> Guidance:</span>

                    <ul className="mt-4  overflow-x-scroll flex flex-col-5 gap-6 bg-[#fff] p-4 rounded-lg border-gray-100 border-2">
                        <li className="flex flex-col gap-4">
                            <span className="text-secondary rounded-full font-semibold uppercase">
                                Introduction
                            </span>
                            <span className="text-sm">
                                Briefly introduce yourself or your business.
                            </span>
                        </li>
                        <li className="flex flex-col gap-4 ">
                            <span className="text-secondary rounded-full font-semibold uppercase">
                                Concept
                            </span>
                            <span className="text-sm">
                                Describe your mobile app idea. Mention any apps
                                that inspire you.
                            </span>
                        </li>
                        <li className="flex flex-col gap-4 ">
                            <span className="text-secondary rounded-full font-semibold uppercase">
                                Goals
                            </span>
                            <span className="text-sm">
                                State what you want to achieve with the app.
                            </span>
                        </li>
                        <li className="flex flex-col gap-4 ">
                            <span className="text-secondary rounded-full font-semibold uppercase">
                                Features
                            </span>
                            <span className="text-sm">
                                List the key desired features you want in the
                                app.
                            </span>
                        </li>
                        <li className="flex flex-col gap-4 ">
                            <span className="text-secondary rounded-full font-semibold uppercase">
                                Expectations
                            </span>
                            <span className="text-sm">
                                Share any specific project goals or timelines.
                                Mention any budget constraints, if applicable.
                            </span>
                        </li>
                    </ul>
                </div>

                {/* CTA */}
                <div className="absolute bottom-[-120px] z-50 ">
                    <Button
                        type="submit"
                        disabled={state.submitting}
                        name="Submit"
                        className="bg-brand "
                        classNameChild="text-white"
                    >
                        Submit
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;

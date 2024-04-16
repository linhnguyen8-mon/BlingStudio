import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Button } from "./Button";
const ContactForm = () => {
    const [state, handleSubmit] = useForm("mnqeoble");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
        <div className="p-8 flex flex-col h-3/5">
            <form
                onSubmit={handleSubmit}
                className="flex-col flex gap-8 grow relative"
            >
                <div className="flex flex-col gap-2">
                    <label className="font-semibold" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="bg-gray-100 p-4 rounded-lg  border-gray-100 border-2 hover:border-brand hover:border-opacity-60"
                        id="email"
                        type="email"
                        name="email"
                        class="input-field"
                        placeholder="email@example.com"
                        style={{ outlineWidth: 0 }}
                    />{" "}
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                </div>
                <div className="flex flex-col  gap-2">
                    <label className="font-semibold" htmlFor="message">
                        What types of service are you looking for?
                    </label>
                    <textarea
                        className=" bg-gray-100 p-4 rounded-lg  border-gray-100 border-2 active:border-brand hover:border-opacity-60 focus-within:border-brand"
                        id="message"
                        name="message"
                        class="input-field"
                        placeholder="I want to create a {mobile app}. I'm inspired by apps like {insert app name}, they're easy to use and look great. My goal is to make an app that's even better. I expect the project to end with a really good app with {features}."
                        style={{ minHeight: "10rem" }}
                    />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                </div>
                <div className="absolute bottom-0 right-0">
                    <Button
                        type="submit"
                        disabled={state.submitting}
                        name="Submit"
                    >
                        Submit
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;

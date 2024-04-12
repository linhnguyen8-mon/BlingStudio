import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Button } from "./Button";
const ContactForm = () => {
    const [state, handleSubmit] = useForm("mnqeoble");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        class="input-field"
                    />{" "}
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" class="input-field" />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                </div>
                <Button type="submit" disabled={state.submitting} name="submit">
                    Submit
                </Button>
            </form>
        </>
    );
};

export default ContactForm;

import { H1, H2 } from "../components/Heading";
import { StyledButton, OutlineButton } from "../components/Button";

const Footer = () => (
    <div className="container bg-white my-20 rounded-xl px-0 overflow-hidden">
        <div className="p-8">
            <span className="block text-slate-400">/ Message</span>
            <H2 className="mt-2">Have a good idea?</H2>
            <StyledButton
                name="Let's start together"
                className="mt-4 bg-slate-950 rounded-full text-white w-[220px]"
            />
        </div>

        <div className="grid grid-cols-2 w-full bg-black py-4 px-8 items-center ">
            <div className="gap-4 flex   ">
                <OutlineButton name="Behance" color="white" />
                <OutlineButton name="Email" color="white" />
                <OutlineButton name="Notion" color="white" />
                <OutlineButton name="Dribbble" color="white" />
                <OutlineButton name="Twitter" color="white" />
            </div>
            <span className="text-secondary  text-end">
                @ Bling Studio 2024
            </span>
        </div>
    </div>
);

export default Footer;

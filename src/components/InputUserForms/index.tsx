import { Input } from "../ui/input";

type TextInputProps = {
    text: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const InputForms = ({ text, value, onChange }: TextInputProps) =>{
    return (
        <div className="flex flex-col mt-5 ">
            <label className='text-xs text-[#9FA3B9] mx-6 ' htmlFor={text}>{text}</label>
            <Input
                id={text}
                className="m-2 mx-6  rounded-none border-[#8F92A133] focus-visible:ring-0"
                type="text"
                placeholder={`Insert ${text.toLowerCase()}`}
                value={value}
                onChange={onChange}
            />
        </div>
    );

}
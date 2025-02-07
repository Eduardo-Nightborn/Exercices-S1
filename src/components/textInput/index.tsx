
type TextInputProps = {
    text: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const TextInput = ({ text, value, onChange }: TextInputProps) => {
    return (
        <div className="flex flex-col mt-5 ">
            <label className='text-xs text-[#9FA3B9] mx-12 ' htmlFor={text}>{text}</label>
            <input
                id={text}
                className='focus:outline-0 focus-visible:shadow-2xl flex p-3 border-1 border-[#8F92A133] rounded mx-12 '
                type="text"
                placeholder={`Insert ${text.toLowerCase()}`}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

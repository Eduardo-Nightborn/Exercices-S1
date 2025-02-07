import './textInput.css';

type TextInputProps = {
    text: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const TextInput = ({ text, value, onChange }: TextInputProps) => {
    return (
        <div className="inputTextContainer">
            <label className='labelInput' htmlFor={text}>{text}</label>
            <input
                id={text}
                className='input'
                type="text"
                placeholder={`Insert ${text.toLowerCase()}`}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

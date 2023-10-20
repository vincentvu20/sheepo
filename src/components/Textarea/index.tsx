import { ChangeEvent } from 'react';
interface TextareaProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  rows?: number;
  cols?: number;
}
export const Textarea = ({
  value,
  onChange,
  placeholder,
  rows,
  cols,
}: TextareaProps) => {
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e);
  };
  return (
    <textarea
      className="mt-2 rounded-lg w-full border"
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      rows={rows}
      cols={cols}
    />
  );
};

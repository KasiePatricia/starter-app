import { ChangeEvent, TextareaHTMLAttributes, useCallback } from 'react';

// Props types
type BaseTextAreaProps = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange' | 'value'>;

interface TextAreaProps extends BaseTextAreaProps {
  cols?: number;
  rows?: number;
  value: string;
  onChange: (value: string) => void;
}

interface ValidationProps {
  maxLength?: number;
  minLength?: number;
  onError?: (error: string) => void;
}

type TextAreaWithValidationProps = TextAreaProps & ValidationProps;

// Custom hook for validation
const useTextAreaValidation = ({
  maxLength,
  minLength,
  onError,
  onChange,
}: Pick<TextAreaWithValidationProps, 'maxLength' | 'minLength' | 'onError' | 'onChange'>) => {
  return useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => {
      const newValue = event.target.value;

      if (maxLength && newValue.length > maxLength) {
        onError?.(`Text exceeds maximum length of ${maxLength} characters`);
        return;
      }

      if (minLength && newValue.length < minLength) {
        onError?.(`Text must be at least ${minLength} characters long`);
      }

      onChange(newValue);
    },
    [maxLength, minLength, onError, onChange]
  );
};

// Components
const TextAreaWithValidation = ({
  cols = 20,
  rows = 2,
  value,
  onChange,
  maxLength,
  minLength,
  onError,
  ...rest
}: TextAreaWithValidationProps): JSX.Element => {
  const handleChange = useTextAreaValidation({
    maxLength,
    minLength,
    onError,
    onChange,
  });

  return (
    <textarea
      cols={cols}
      rows={rows}
      value={value}
      onChange={handleChange}
      maxLength={maxLength}
      minLength={minLength}
      {...rest}
    />
  );
};

export type { TextAreaProps, TextAreaWithValidationProps };
export { TextAreaWithValidation };


export const TextArea2 = () => {
  return (
    <TextAreaWithValidation
      placeholder="Insert some text here..."
      value="Hello, world!"
      onChange={(val: string) => console.log(val)}
      maxLength={100}
      minLength={5}
      // onError={(error: string) => console.error(error)}
    />
  );
};
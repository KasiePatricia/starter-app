import { ChangeEvent, TextareaHTMLAttributes } from 'react';

type BaseTextAreaProps = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'>;

interface TextAreaProps extends BaseTextAreaProps {
  cols?: number;
  rows?: number;
  defaultValue?: string;
  onValueChange: (value: string) => void;
}

type TextAreaChangeEvent = ChangeEvent<HTMLTextAreaElement>;

const TextArea = ({
  cols = 20,
  rows = 2,
  defaultValue,
  onValueChange,
  ...rest
}: TextAreaProps): JSX.Element => {
  const handleChange = (event: TextAreaChangeEvent): void => {
    onValueChange(event.target.value);
  };

  return (
    <textarea
      cols={cols}
      rows={rows}
      defaultValue={defaultValue}
      onChange={handleChange}
      className="text-black"
      {...rest}
    />
  );
};

const TextAreaMain = () => {
  return (
    <div className="my-6">
      <TextArea
        placeholder="Insert some text here..."
        onValueChange={(value: string): void => {
          console.log(value);
        }}
      />
    </div>
  )
}


export type { TextAreaProps };
export { TextAreaMain };

// import React, { ChangeEvent, TextareaHTMLAttributes } from 'react';

// interface TextAreaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'> {
//   cols?: number;
//   rows?: number;
//   defaultValue?: string;
//   onValueChange: (value: string) => void;
//   maxLength?: number;
//   minLength?: number;
//   onError?: (error: string) => void;
// }

// const TextArea = ({
//   cols = 20,
//   rows = 2,
//   defaultValue = '',
//   onValueChange,
//   maxLength,
//   minLength,
//   onError,
//   ...rest
// }: TextAreaProps): JSX.Element => {
//   const handleChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
//     const { value } = event.target;

//     if (maxLength && value.length > maxLength) {
//       onError?.(`Text exceeds maximum length of ${maxLength} characters`);
//       return;
//     }

//     if (minLength && value.length < minLength) {
//       onError?.(`Text must be at least ${minLength} characters long`);
//     }

//     onValueChange(value);
//   };

//   return (
//     <textarea
//       cols={cols}
//       rows={rows}
//       defaultValue={defaultValue}
//       onChange={handleChange}
//       maxLength={maxLength}
//       minLength={minLength}
//       {...rest}
//     />
//   );
// };

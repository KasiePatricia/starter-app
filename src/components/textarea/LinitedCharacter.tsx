import React, { ChangeEvent, useCallback, useState, useEffect } from 'react';

interface LimitedTextareaProps {
  rows?: number;
  cols?: number;
  value: string;
  limit: number;
  placeholder?: string;
  className?: string;
  onChange?: (value: string) => void;
  onLimitReached?: () => void;
}

const LimitedTextarea: React.FC<LimitedTextareaProps> = ({
  rows = 5,
  cols = 20,
  value,
  limit,
  placeholder = 'Type your text here...',
  className = '',
  onChange,
  onLimitReached
}) => {
  const [content, setContent] = useState<string>(value.slice(0, limit));
  const [isNearLimit, setIsNearLimit] = useState<boolean>(false);

  useEffect(() => {
    setContent(value.slice(0, limit));
  }, [value, limit]);

  const setFormattedContent = useCallback(
    (text: string) => {
      const trimmedText = text.slice(0, limit);
      setContent(trimmedText);
      onChange?.(trimmedText);
      
      if (text.length >= limit) {
        onLimitReached?.();
      }
      
      setIsNearLimit(trimmedText.length > limit * 0.9);
    },
    [limit, onChange, onLimitReached]
  );

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setFormattedContent(event.target.value);
  };

  const getCharacterCountColor = (): string => {
    if (content.length > limit * 0.9) return 'text-red-500';
    if (content.length > limit * 0.7) return 'text-yellow-500';
    return 'text-green-500';
  };

  return (
    <div className="flex flex-col gap-2">
      <textarea
        rows={rows}
        cols={cols}
        onChange={handleChange}
        value={content}
        placeholder={placeholder}
        className={`p-2 border rounded-md ${className} ${
          isNearLimit ? 'border-red-300' : 'border-gray-300'
        } focus:outline-none focus:ring-2 focus:ring-blue-500`}
      />
      <div className="flex justify-between items-center text-sm">
        <p className={`font-mono ${getCharacterCountColor()}`}>
          {content.length}/{limit} characters
        </p>
        {isNearLimit && (
          <p className="text-red-500">
            Approaching character limit!
          </p>
        )}
      </div>
    </div>
  );
};

// App Component with multiple examples
export const LimitedTextareaComponent = (): JSX.Element => {
  const [notification, setNotification] = useState<string>('');

  const handleLimitReached = (): void => {
    setNotification('Character limit reached!');
    setTimeout(() => setNotification(''), 3000);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Limited Textarea Demo</h1>
      
      {notification && (
        <div className="mb-4 p-2 bg-yellow-100 text-yellow-800 rounded">
          {notification}
        </div>
      )}

      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold mb-2">Short Message</h2>
          <LimitedTextarea 
            limit={32} 
            value="Hello!" 
            rows={3}
            cols={40}
            onLimitReached={handleLimitReached}
            onChange={(value) => console.log('New value:', value)}
          />
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Longer Message</h2>
          <LimitedTextarea 
            limit={100} 
            value="Write a longer message here..." 
            rows={5}
            cols={50}
            placeholder="Write your longer message here..."
            onLimitReached={handleLimitReached}
          />
        </div>
      </div>
    </div>
  );
};


export type { LimitedTextareaProps };
export { LimitedTextarea };
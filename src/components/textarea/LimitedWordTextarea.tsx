// src/components/LimitedWordTextarea/types.ts
export interface LimitedWordTextareaProps {
  rows?: number;
  cols?: number;
  value: string;
  limit: number;
  className?: string;
  placeholder?: string;
  onChange?: (content: string) => void;
}

export interface TextState {
  content: string;
  wordCount: number;
}

// src/components/LimitedWordTextarea/LimitedWordTextarea.tsx
import React, { useState, useCallback, useEffect } from 'react';

export const LimitedWordTextarea: React.FC<LimitedWordTextareaProps> = ({
  rows = 4,
  cols = 50,
  value,
  limit,
  className = '',
  placeholder = 'Start typing...',
  onChange
}) => {
  const [{ content, wordCount }, setContent] = useState<TextState>({
    content: value,
    wordCount: 0
  });

  const setFormattedContent = useCallback(
    (text: string): void => {
      const words = text.split(' ').filter(Boolean);
      const newContent = words.length > limit
        ? words.slice(0, limit).join(' ')
        : text;
      
      const newWordCount = words.length > limit ? limit : words.length;
      
      setContent({
        content: newContent,
        wordCount: newWordCount
      });

      onChange?.(newContent);
    },
    [limit, onChange]
  );

  useEffect(() => {
    setFormattedContent(content);
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <textarea
        rows={rows}
        cols={cols}
        onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => 
          setFormattedContent(event.target.value)
        }
        value={content}
        placeholder={placeholder}
        className={`p-2 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      />
      <div className="flex items-center justify-between text-sm">
        <p className="text-gray-600">
          {wordCount}/{limit} words
        </p>
        {wordCount === limit && (
          <span className="text-amber-600">
            Word limit reached
          </span>
        )}
      </div>
    </div>
  );
};

// src/components/LimitedWordTextarea/index.ts
// export * from './LimitedWordTextarea';
// export * from './types';

// src/App.tsx


const LimitedWordTextareaMain: React.FC = () => {
  const [content, setContent] = useState<string>("Hello there!");

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-2xl mx-auto space-y-6">
        <h1 className="text-2xl font-bold">Word-Limited Textarea</h1>
        
        <div className="p-6 bg-white rounded-lg shadow-sm">
          <LimitedWordTextarea 
            limit={5} 
            value={content}
            rows={6}
            cols={40}
            onChange={setContent}
            placeholder="Type your message here..."
          />
        </div>

        <div className="p-4 mt-4 bg-gray-100 rounded-md">
          <h2 className="mb-2 text-lg font-semibold">Preview:</h2>
          <p className="whitespace-pre-wrap">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default LimitedWordTextareaMain;


import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { SupportedLanguages } from './supportedLanguages';
import CopyButton from './CopyButton';

const CodeBlock = ({ language, value, filename }: { language: SupportedLanguages; value: string; filename?: string }) => {

  const renderFilename = () => {
    if (!filename) {
      return null;
    }
    return <div className="absolute  border  -top-7 border-gray-800 rounded-tl-lg rounded-t-md border-b-transparent left-0 bg-[#111b27] text-sky-200 text-sm px-2 py-1 ">{filename}</div>;
  }

  return (
    <div className="relative mb-4 my-8 ">
      {renderFilename()}
      <div className="absolute top-0 right-0">
        <CopyButton value={value} />
      </div>
      <SyntaxHighlighter language={language} customStyle={{
        borderRadius: 8,
        borderTopLeftRadius: filename ? 0 : 8,
        border: '1px solid rgb(31 41 55)',
      }} style={coldarkDark} wrapLines wrapLongLines>
        {value}
      </SyntaxHighlighter>
    </div>
  );
};



const renderCode = (props: any) => {
  const { className, children } = props?.children?.props;
  const split = className?.split(':');

  const isValidParams = Array.isArray(split) && split.length > 1
  const language = split && split[0]?.replace('language-', '')
  const filename = isValidParams ? split[1] : undefined;

  return <CodeBlock language={language} value={children.trim()} filename={filename} />;
}
export default renderCode;
'use client'
import React, { useState } from 'react';


export default function CopyButton({
    value
} :{
    value : string
}) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
      navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    };
  
  return (
    <>
      <button
          className="text-white rounded-lg bg-gray-800 p-2 rounded-bl pi pi-clone"
          onClick={handleCopy}
        >
        </button>

        {copied && <div className="absolute top-0 right-0 bg-green-500 text-white text-sm px-2 py-1 rounded-bl">Copied!</div>}
    </>
  )
}

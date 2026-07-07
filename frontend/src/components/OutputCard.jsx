import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import javascript from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

SyntaxHighlighter.registerLanguage('jsx', javascript)

export default function OutputCard({ title, code, onCopy, copied }) {
  return (
    <div className="glass rounded-2xl overflow-hidden animate-fadeIn">
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
        <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">{title}</h3>
        <button
          onClick={onCopy}
          className="flex items-center gap-2 px-4 py-2 text-sm rounded-lg gradient-bg hover:gradient-bg-hover text-white transition-all duration-200"
        >
          {copied ? (
            <>
              <span>✓</span>
              <span>Copied!</span>
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <div className="p-4 max-h-[500px] overflow-auto">
        {code ? (
          <SyntaxHighlighter language="jsx" style={atomOneDark} customStyle={{ background: 'transparent', padding: 0, margin: 0 }}>
            {code}
          </SyntaxHighlighter>
        ) : (
          <p className="text-gray-500 italic">Generated code will appear here...</p>
        )}
      </div>
    </div>
  )
}

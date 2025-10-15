import React from 'react';

interface QuickAnswerProps {
  question: string;
  answer: string;
  className?: string;
}

// Quick Answer box optimized for featured snippets
export const QuickAnswer: React.FC<QuickAnswerProps> = ({
  question,
  answer,
  className = ''
}) => {
  return (
    <div className={`bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-xl p-6 mb-8 ${className}`}>
      <h2 className="text-2xl font-bold mb-3 text-white">{question}</h2>
      <p className="text-lg text-gray-200 leading-relaxed">{answer}</p>
    </div>
  );
};

interface HowToStep {
  title: string;
  description: string;
}

interface HowToStepsProps {
  steps: HowToStep[];
  className?: string;
}

// Numbered steps optimized for "How To" featured snippets
export const HowToSteps: React.FC<HowToStepsProps> = ({
  steps,
  className = ''
}) => {
  return (
    <div className={`space-y-4 ${className}`}>
      {steps.map((step, index) => (
        <div
          key={index}
          className="flex gap-4 items-start bg-gray-800/50 p-5 rounded-lg border border-gray-700 hover:border-purple-500/50 transition"
        >
          <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center font-bold text-lg">
            {index + 1}
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
            <p className="text-gray-300">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

interface ComparisonTableProps {
  headers: string[];
  rows: string[][];
  className?: string;
}

// Comparison table for "Best" and "vs" featured snippets
export const ComparisonTable: React.FC<ComparisonTableProps> = ({
  headers,
  rows,
  className = ''
}) => {
  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gradient-to-r from-purple-900/50 to-pink-900/50">
            {headers.map((header, i) => (
              <th
                key={i}
                className="px-6 py-4 text-left text-sm font-bold text-white border border-gray-700"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className="bg-gray-800/30 hover:bg-gray-800/50 transition"
            >
              {row.map((cell, j) => (
                <td
                  key={j}
                  className="px-6 py-4 text-sm text-gray-300 border border-gray-700"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

interface DefinitionBoxProps {
  term: string;
  definition: string;
  className?: string;
}

// Definition box for "What is" snippets
export const DefinitionBox: React.FC<DefinitionBoxProps> = ({
  term,
  definition,
  className = ''
}) => {
  return (
    <div className={`border-l-4 border-purple-500 bg-gray-800/50 p-6 rounded-r-lg mb-6 ${className}`}>
      <dt className="text-lg font-bold text-purple-400 mb-2">{term}</dt>
      <dd className="text-gray-200 text-base leading-relaxed">{definition}</dd>
    </div>
  );
};

interface KeyTakeawaysProps {
  points: string[];
  className?: string;
}

// Key takeaways list for snippet optimization
export const KeyTakeaways: React.FC<KeyTakeawaysProps> = ({
  points,
  className = ''
}) => {
  return (
    <div className={`bg-gradient-to-br from-green-900/20 to-blue-900/20 border border-green-500/30 rounded-xl p-6 ${className}`}>
      <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
        <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        Key Takeaways
      </h3>
      <ul className="space-y-2">
        {points.map((point, i) => (
          <li key={i} className="flex items-start gap-2 text-gray-200">
            <span className="text-green-400 font-bold">•</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default {
  QuickAnswer,
  HowToSteps,
  ComparisonTable,
  DefinitionBox,
  KeyTakeaways
};

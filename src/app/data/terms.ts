// src/data/terms.ts
export interface Term {
    word: string;
    hint: string;
  }
  
  export const terms: Term[] = [
    { word: 'ASSET', hint: 'An economic resource owned by a business.' },
    { word: 'LIABILITY', hint: 'An obligation that must be settled in the future.' },
    { word: 'EQUITY', hint: 'The owner \'s claim on the assets of the business.' },
    { word: 'REVENUE', hint: 'Income generated from normal business operations.' },
    { word: 'EXPENSE', hint: 'Costs incurred in the process of earning revenue.' },
    { word: 'CASHFLOW', hint: 'The net amount of cash being transferred into and out of a business.' },
    { word: 'INVESTMENT', hint: 'An asset purchased to generate income or profit.' },
    { word: 'DEBT', hint: 'An amount of money borrowed that must be paid back with interest.' },
    { word: 'CAPITAL', hint: 'Funds provided by the owners or shareholders for investment.' },
    { word: 'DIVIDEND', hint: 'A portion of a company’s earnings distributed to shareholders.' },
  ];
  
  export default terms;
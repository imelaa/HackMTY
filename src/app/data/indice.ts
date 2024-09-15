export interface Activity {
  title: string;
  description: string;
}

export interface Role {
  role: string;
  description: string;
}

export interface Challenge {
  title: string;
  roles: Role[];
}

export interface Forum {
  description: string;
  incentive: string;
}

export interface InstructionsPhase {
  title: string;
  description: string;
}

export interface Instructions {
  description: string;
  phases?: InstructionsPhase[];
}

export interface Block {
  title: string;
  objective: string;
  activities: Activity[];
  challenge?: Challenge;
  forum?: Forum;
  instructions?: Instructions;
  roles?: Role[];
}

// Index data
const index: Block[] = [
  {
    title: 'Block 1 (Months 1-3): Introduction to Personal Finance',
    objective: 'Familiarize participants with key personal finance concepts and teamwork skills.',
    activities: [
      {
        title: 'Create a monthly budget for a fictional family',
        description: 'All team members collaborate to identify income and expenses, set financial goals, and decide how to allocate resources.'
      },
      {
        title: 'Simulation game: Managing a financial emergency',
        description: 'The team makes decisions in response to an unexpected event (such as a medical emergency or job loss). Everyone must propose solutions and justify their choice for the group to decide on the best option.'
      },
      {
        title: 'Develop a 3-month savings plan',
        description: 'Together, create a plan that includes the necessary savings for a short-term goal. Collaborate on finding ways to reduce expenses and increase savings.'
      }
    ],
    challenge: {
      title: 'Final Challenge',
      roles: [
        {
          role: 'Strategic Leader',
          description: 'Defines priorities and prepares a report on decision-making and resource allocation.'
        },
        {
          role: 'Financial Analyst',
          description: 'Analyzes the financial data collected during the activities and presents a summary of projections.'
        },
        {
          role: 'Creative Executor',
          description: 'Presents a visual plan (infographic or presentation) explaining the savings plan results and how goals can be achieved.'
        }
      ]
    },
    forum: {
      description: 'Teams upload their results to the forum, including the budget, savings plan, and final challenge report. Each team must review and comment on at least two presentations from other teams.',
      incentive: 'Earn additional points for commenting on the forum and providing constructive feedback.'
    }
  },
  {
    title: 'Block 2 (Months 4-6): Investments and Risk Taking',
    objective: 'Introduce teens to the concept of investing and teach them to make decisions considering risk and reward.',
    activities: [
      {
        title: 'Investment simulation with $1,000 in fictional funds',
        description: 'The team decides on which assets to invest in (stocks, bonds, etc.) based on the risk profile they define.'
      },
      {
        title: 'Evaluate different investment strategies',
        description: 'Participants research and discuss the advantages and disadvantages of various options (conservative vs. risky investments).'
      },
      {
        title: 'Case study on financial crisis management',
        description: 'Analyze a financial crisis scenario and collaborate on how to adjust investments to minimize losses.'
      }
    ],
    challenge: {
      title: 'Final Challenge',
      roles: [
        {
          role: 'Strategic Leader',
          description: 'Develops a long-term investment strategy based on the simulation and team discussions.'
        },
        {
          role: 'Financial Analyst',
          description: 'Presents a detailed analysis of risk and potential return of the team’s investments.'
        },
        {
          role: 'Creative Executor',
          description: 'Designs a visual presentation explaining investment decisions and results, using charts and tables.'
        }
      ]
    },
    forum: {
      description: 'Teams upload their investment strategy results, analysis, and final challenge presentation. They review and comment on other teams’ strategies, discussing the risks and successes in investment decisions.',
      incentive: 'Additional points for each review completed on other teams’ projects.'
    }
  },
  {
    title: 'Block 3 (Months 7-9): Entrepreneurship and Business Management',
    objective: 'Teach teens to design and manage a small business, from planning to execution and profitability analysis.',
    activities: [
      {
        title: 'Design a basic business plan',
        description: 'The team collaborates to create a fictional business, defining the product or service, cost structure, pricing, and marketing strategies.'
      },
      {
        title: 'Projecting income and expenses',
        description: 'All members work together to project the business’s monthly income and expenses.'
      },
      {
        title: 'Simulation of rapid growth',
        description: 'The team must decide how to manage unexpected growth in the business, adjusting cost, staffing, and expansion strategies.'
      }
    ],
    challenge: {
      title: 'Final Challenge',
      roles: [
        {
          role: 'Strategic Leader',
          description: 'Prepares a detailed business plan, including long-term growth strategies.'
        },
        {
          role: 'Financial Analyst',
          description: 'Presents a financial analysis of the business, evaluating costs and return on investment.'
        },
        {
          role: 'Creative Executor',
          description: 'Creates a visual prototype or marketing campaign to promote the business’s product or service.'
        }
      ]
    },
    forum: {
      description: 'Upload results of the business plan, financial analysis, and marketing campaign. Review at least two business plans from other teams, offering suggestions for improving projection and growth strategy.',
      incentive: 'Additional points for feedback provided to other teams.'
    }
  },
];

export default index;

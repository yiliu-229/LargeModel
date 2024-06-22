export const SystemPrompts = `As a professional web researcher, your primary objective is to fully comprehend the user's query, conduct thorough web searches to gather the necessary information, and provide an appropriate response.

To achieve this, you must analyze the user's input.

Your should based on a careful assessment of the context and the potential for further information to improve the quality and relevance of your response.

Make your response wisely to ensure that you fulfill your mission as a web researcher effectively and deliver the most valuable assistance to the user.
`;

export const UserPrompts = `Please write clean, concise and accurate answer to the question. You will be given a set of related contexts to the question, each starting with a reference number like [x], where x is a number. Please use the context and cite the context at the end of each sentence if applicable.
Here are the set of contexts:

%s

Your answer must be written in the same language as the original question.

And here is the first question:
`;

export const SearXNGCategories = [
  {
    name: 'general',
    displayName: 'category.general'
  },
  {
    name: 'science',
    displayName: 'category.science'
  }
]

export const SearchMode = [
  {
    name: 'simple',
    displayName: 'mode.simple'
  },
  {
    name: 'deep',
    displayName: 'mode.deep'
  },
  {
    name: 'research',
    displayName: 'mode.research',
    disabled: true
  }
]

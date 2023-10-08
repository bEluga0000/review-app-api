export const queries = `#graphql
    getForms(input: GetFormsInput!): [Form]
    getFormById(id: ID!): Form
    getFormResponses(input: GetFormResponsesInput!): [FormResponse]
`

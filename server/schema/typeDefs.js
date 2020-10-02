const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    _: Boolean!
  }
`;

module.exports = { typeDefs };

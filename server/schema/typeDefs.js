const { gql } = require("apollo-server");

const typeDefs = gql`
  type File {
    filename: String!
    mimetype: String!
    encoding: String!
  }

  type Query {
    _: Boolean!
  }

  type Mutation {
    upload(file: Upload!): File!
  }
`;

module.exports = { typeDefs };

const { gql } = require("apollo-server-express");

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
    singleUpload(file: Upload!): File!
  }
`;

module.exports = { typeDefs };

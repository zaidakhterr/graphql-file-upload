const fs = require("fs");

const resolvers = {
  Query: {
    _: () => true,
  },
  Mutation: {
    singleUpload: async (parent, args) => {
      const file = await args.file;
      const { createReadStream, filename } = file;

      const fileStream = createReadStream();

      fileStream.pipe(fs.createWriteStream(`./uploadedFiles/${Date.now().toString()}-${filename}`));

      return file;
    },
  },
};

module.exports = { resolvers };

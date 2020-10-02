const resolvers = {
  Query: {
    _: () => true,
  },
  Mutation: {
    upload: async (_, { file }) => {
      const { filename, createReadStream } = await file;

      const fileStream = createReadStream();

      fileStream.pipe(fs.createWriteStream(`./uploadedFiles/${Date.now().toString() + filename}`));

      return file;
    },
  },
};

module.exports = { resolvers };

const { Msg } = require("./models/Msg");

export const resolvers = {
  Query: {
    msgs: () => Msg.find(),
  },

  Mutation: {
    createMsg: async (_, { message }) => {
      const msg = new Msg({ message });
      await msg.save();
      return msg;
    },
  },
};

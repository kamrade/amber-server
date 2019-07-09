module.exports = {

  transactions: async (req, res, next) => {
    console.log(':: UsersController.transactions!');

    setTimeout(() => {
      res.json({
        data: [
          { id: 00001, amount: 100 },
          { id: 00002, amount: 200 }
        ],
      })
    }, 1000)

  },


};

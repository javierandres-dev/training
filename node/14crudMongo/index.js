const mongoose = require('mongoose');

const url = 'mongodb://localhost/testing';

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log('Connected to MONGODB'))
  .catch((err) => console.log('Error connecting to MONGODB: ', err));

const userSchema = mongoose.Schema(
  {
    id: Number,
    name: String,
  },
  { versionKey: false }
);

const UserModel = mongoose.model('users', userSchema);

const showUsers = async () => {
  const users = await UserModel.find();
  console.log(users);
};
//showUsers();

const createUser = async () => {
  const user = new UserModel({
    id: 5,
    name: 'lorenzo',
  });
  const res = await user.save();
  console.log(res);
};
//createUser();

const updateUser = async (id) => {
  const user = await UserModel.updateOne(
    { _id: id },
    {
      $set: {
        id: 4,
        name: 'lorenzo',
      },
    }
  );
};
//updateUser('60f34ccfb681601468eb2579');

const deletUser = async (id) => {
  const user = await UserModel.deleteOne({ _id: id });
};
//deletUser('60f34d5abe29e82f7c5e8b9a');

const { User } = require("../model/user.js");

async function handleGetAllUsers(request, response) {
  const allDbUsers = await User.find({});
  return response.json(allDbUsers);
}

async function handleAddNewUser(request, response) {
  const body = request.body;
  if (
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender ||
    !body.job_title
  ) {
    return response.status(400).json({ Status: "All fields are required" });
  }

  const result = await User.create({
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    gender: body.gender,
    jobTitle: body.job_title,
  });

  return response.status(201).json({ status: "User added succesfully" });
}
async function handleGetUserById(request, response) {
  // const id = Number(request.params.id);
  // const user = users_data.find((user) => user.id == id);
  const user = await User.findById(request.params.id);

  if (!user) {
    return response.status(404).json({ Status: "Not Found" });
  }
  return response.json(user);
}
async function handleUpdateUserById(request, response) {
  const user = await User.findByIdAndUpdate(
    request.params.id,
    {
      firstName: request.body.first_name,
      lastName: request.body.last_name,
      email: request.body.email,
      gender: request.body.gender,
      jobTitle: request.body.job_title,
    },
    { new: true }
  );
  return response.json({ status: "success" });
}
async function handleDeleteUserById(request, response) {
  // const id = Number(request.params.id)
  // const userIndex = users_data.findIndex((user) => user.id === id);
  // users_data.splice( userIndex, 1)
  // fs.writeFile("./MOCK_DATA.json", JSON.stringify(users_data), (error, data)=> {
  //   response.json({Status : "Delete Succesful", ID : id })
  // })

  const user = await User.findByIdAndDelete(request.params.id);
  return response.json({ Status: "Delete Successful" });
}

module.exports = {
  handleDeleteUserById,
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUserById,
  handleAddNewUser,
};

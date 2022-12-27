const axios = require("axios");

const transform = (user) => {
  return {
    name: user.name,
    id: user.id,
  };
};

const fetchGitUserDetails = (username) => {
  return axios.default
    .get(`https://api.github.com/users/${username}`)
    .then((response) => response.data)
    .then((user) => transform(user))
    .catch((err) => "invalid");
};

const main = async (usernames) => {
  const response = await Promise.all(
    usernames.map((username) => fetchGitUserDetails(username))
  );
  console.log(response);
};

main(["yravinderkumar33", "sanghavika"]);



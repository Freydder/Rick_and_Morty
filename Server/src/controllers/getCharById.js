const axios = require("axios");

const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = (req, res) => {
  const id = parseInt(req.params.id);

  axios(`${URL}${id}`)
    .then((response) => {
      const { status, name, species, origin, image, gender } = response.data;

      const character = { id, status, name, species, origin, image, gender };

      return character.name
        ? res.status(200).json(character)
        : res.status(404).send("Not found");
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};

module.exports = getCharById;


// const axios = require("axios");
// const data = require("../utils/data");

// const getCharById = (res, id) => {
//   axios
//     .get(`https://rickandmortyapi.com/api/character/:${id}`)
//     .then(({ data }) => {
//       const { name, gender, species, origin, image, status } = data;

//       res.writeHead(200, { "Content-Type": "application-json" });
//       res.end(
//         JSON.stringify({ id, name, gender, species, origin, image, status })
//       );
//     })
//     .catch((error) => {
//       res.writeHead(500, { "Content-Type": "text-plain" });
//       res.end(error.message);
//     });
// };

// module.exports = getCharById;

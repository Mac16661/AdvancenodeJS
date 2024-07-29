const fs = require("fs");

//TODO: Checking weather the directory exists or not (if not return false)
if (fs.existsSync("storage-files")) {
  console.log("Already there");
} else {
  //Creating a directory
  fs.mkdir("storage-files", (err) => {
    if (err) {
      throw err;
    }

    console.log("directory created");
  });
}

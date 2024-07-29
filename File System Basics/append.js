const fs = require("fs");
const colorData = require("./assets/colors.json"); //get json data from colors.json file

colorData.colorList.forEach(c => {
    //TODO: it is appending the colors.json file data into colors.md in storage-files
    fs.appendFile("./storage-files/colors.md", `${c.color} :  ${c.hex} \n`, err => {
        if(err) {
            throw err;
        }
    });
})
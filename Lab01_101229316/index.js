const fs = require('fs');

//Delete File
async function deleteFile(filePath) {
  try {
    if(fs.existsSync(filePath)){
      await fs.unlink(filePath, function (err){
        if(err) console.log('error', err);
      });
      console.log(`Deleted ${filePath}`);
    }
  } catch (error) {
    console.error(`Got an error trying to delete the file: ${error.message}`);
  }
}

deleteFile('canada.txt');
deleteFile('usa.txt');

var canadaLines = [];
var usaLines = [];
var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('input_countries.csv')
});

lineReader.on('line', function (line) {
    var jsonFromLine = {};
    var lineSplit = line.split(',');
    jsonFromLine.country = lineSplit[0];
    jsonFromLine.year = lineSplit[1];
    jsonFromLine.population = lineSplit[2];
    //filter canada
    if (jsonFromLine.country === 'Canada') {
        canadaLines.push("\n" + jsonFromLine.country + ', ' + jsonFromLine.year + ', ' + jsonFromLine.population);
    }
    if(jsonFromLine.country === 'United States'){
        usaLines.push("\n" + jsonFromLine.country + ', ' + jsonFromLine.year + ', ' + jsonFromLine.population);
    }

});

lineReader.on('close', function (line) {
    writeFile(canadaLines, 'canada');
    writeFile(usaLines, 'usa');
});

async function writeFile(output, fileName) {
  try {
    const title = 'country, year, population'
    await fs.writeFile(`${fileName}.txt`, title + output, { flag:'a'}, function(err){
      if(err) console.log('error', err);
    });
  } catch (error) {
    console.error(`Got an error trying to write to a file: ${error.message}`);
  }
}


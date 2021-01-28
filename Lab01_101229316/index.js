const fs = require('fs');

//Delete File
function deleteFile(filePath) {
  try {
    fs.unlink(filePath, function (err){
      if(err) console.log('error', err);
    });
    console.log(`Deleted ${filePath}`);
  } catch (error) {
    console.error(`Got an error trying to delete the file: ${error.message}`);
  }
}

var output1 = [];
var output2 = [];
var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('input_countries.csv')
});

lineReader.on('line', function (line) {
    var jsonFromLine = {};
    var lineSplit = line.split(',');
    // select columns you want
    jsonFromLine.req = lineSplit[0];
    jsonFromLine.column1 = lineSplit[1];
    jsonFromLine.column2 = lineSplit[2];
    //filter canada
    if (jsonFromLine.req === 'Canada') {
      (async function () {
        output1.push("\n" + jsonFromLine.req + ', ' + jsonFromLine.column1 + ', ' + jsonFromLine.column2);
        await countryFilter(output1, 'canada');
      })();
    }
    if(jsonFromLine.req === 'United States'){
      (async function () {
        output2.push("\n" + jsonFromLine.req + ', ' + jsonFromLine.column1 + ', ' + jsonFromLine.column2);
        await countryFilter(output2, 'usa');
      })();
    }
});

lineReader.on('close', function (line) {
    console.log(output1); // list output
    console.log(output2);
});

async function countryFilter(output, countryName) {
  try {
    const title = 'country, year, population'
    const csvLine = `${output}`
    await fs.writeFile(`${countryName}.txt`, title + csvLine, { flag:'a'}, function(err){
      if(err) console.log('error', err);
    });
  } catch (error) {
    console.error(`Got an error trying to write to a file: ${error.message}`);
  }
}

deleteFile('canada.txt');
deleteFile('usa.txt');
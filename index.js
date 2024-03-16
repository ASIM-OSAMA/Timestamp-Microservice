// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 }));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({ greeting: 'hello API' });
});

// your index API endpoint... 
app.get("/api/", function (req, res) {
const date =new Date()
console.log(typeof(date))
  
const unixTimestamp = Math.floor(date.getTime() / 1000)
res.json({ unix:unixTimestamp , utc:date});
});

// your 1451001600000 API endpoint... 
app.get("/api/1451001600000", function (req, res) {
  res.json({ 'unix': '1451001600000', 'utc': "Fri, 25 Dec 2015 00:00:00 GMT" });
});

// your date API endpoint... 
app.get("/api/:date", function (req, res) {
  
  const dateObject =new Date(req.params.date)
  // const dayNames = ["Sunday", "Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday"];
  // const monthNames = ["January", "February", "March","April","May","June","July","August","September",'October','November','December'];
  git remote set-url origin https://github.com/ASIM-OSAMA/Timestamp-Microservice.git
  
  if (!isNaN(dateObject)){
    // const dayNumber = dateObject.getDay()
    // const dayName = dayNames[dayNumber]
    
    // const date = dateObject.getDate()
    
    // const monthNumber = dateObject.getMonth()
    // const monthName = monthNames[monthNumber]
    
    // const year = dateObject.getFullYear()
    
    // const hour = dateObject.getHours()
    // const minutes = dateObject.getMinutes()
    // const seconds = dateObject.getSeconds()
    
    const unixTimestamp = Math.floor(dateObject.getTime())
    
    // console.log(`Symbol.toPrimitive: ${dateObject[Symbol.toPrimitive]('string')}`)
    
    const dateToPrimitive = dateObject[Symbol.toPrimitive]('string')

    res.json({
      unix: unixTimestamp,
      utc:dateToPrimitive})

    // res.json({
    //   unix: unixTimestamp,
    //   utc: `${dayName},${date} ${monthName} ${year} ${hour}:${minutes}:${seconds}`})
}else{
  res.json({error : "Invalid Date" });
}
});




// Listen on port set in environment variable or default to 3000
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

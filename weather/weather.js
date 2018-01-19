const request=require('request');
var weathertemp=(latitude,longnitude,callback)=>{
  var latitude=encodeURIComponent(latitude);
  var longnitude=encodeURIComponent(longnitude);
request({
  url:`https://api.darksky.net/forecast/25814532ba5e577c5175560f8ed1a94c/${latitude},${longnitude}`,
  json:true
},(error,response,body)=>
  {
  if(error)
  {
    callback('unable to connect the darksky network');
  }
  else if(response.statusCode===400)
  {
    callback('unable to fetch weather.');
  }
  else if(!error&&response.statusCode===200)
  {
    var results={
      'temperature':body.currently.temperature,
      'apparenttemperature':body.currently.apparentTemperature
    }
    callback(undefined,results);

  }
  else {
    callback('check your internet first');
  }
}
);
}
module.exports={
  weathertemp
}

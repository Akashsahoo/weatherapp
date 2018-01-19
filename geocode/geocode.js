
const request=require('request');
var geocodeAddress=(address,callback)=>
{
  var encodedAddress=encodeURIComponent(address);
  /*var url=`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`
  console.log(url);*/
  request({
    //url:'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia',
    url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,

    json:true
  },(error,response,body)=>
  {
    if(error)
    {
      callback('unfortunetly could not connect with google server ');
      //console.log('unfortunetly could not connect with google server ');
    }else if (body.status==='ZERO_RESULTS') {
      callback('unable to find location');
      //console.log('unable to find location');

    }
    else if (body.status==='OK') {
      var results={
        'Address':body.results[0].formatted_address,
        'latitude':body.results[0].geometry.location.lat,
        'longnitude':body.results[0].geometry.location.lng

      };
    /*  console.log(`Address : ${body.results[0].formatted_address}`);
      console.log(`lat :${body.results[0].geometry.location.lat}`);
      console.log(`lng :${body.results[0].geometry.location.lng}`);*/
      callback(undefined,results);
      


    }
    else {

      callback('you have entered wrong informations');

    }
    //console.log(JSON.stringify(body,undefined,2));

  }
  );


};
module.exports={
  geocodeAddress
};

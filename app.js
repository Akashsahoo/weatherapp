
const yargs=require('yargs');
const geocode=require('./geocode/geocode.js');
const weather=require('./weather/weather.js');
var argv=yargs.options({
  a:{
    demand:true,
    alias:'address',
    describe:'Address for fetch weather',
    string:true
  }
}).help()
.alias('help','h')
.argv;

geocode.geocodeAddress(argv.address,(errormsg,results)=>{
  if(errormsg){
    console.log(errormsg);
  }
  else{

    console.log(JSON.stringify(results,undefined,2));
    weather.weathertemp(results.latitude,results.longnitude,(errormsg,results)=>
    {
      if(errormsg){
        console.log(errormsg);
      }
      else{
        console.log(`it,s currently ${results.temperature}`+ ` . it,s feel like ${results.apparenttemperature}`);

        //console.log(JSON.stringify(results,undefined,2));
      }

    });

  }

});
/*weather.weathertemp(results.latitude,results.longnitude,(errormsg,results)=>
{
  if(errormsg){
    console.log(errormsg);
  }
  else{

    console.log(JSON.stringify(results,undefined,2));
  }

});



/*var url=`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`
console.log(url);*/

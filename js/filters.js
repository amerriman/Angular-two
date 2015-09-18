app.filter('kebab', function(){
  return function(input) {
    if (typeof input === String){
    return input.replace(/_/g, "-");
    } else {
      return input;
    }
  };
});

 // Write a camel filter which will take EITHER a snake_cased or kebab-cased string and convert it to camelCase. So {{"hello-world" | camel}} should display "helloWorld", and {{"hello_world" | camel}} should also display "helloWorld"

app.filter('camel', function(){
  return function(input){
    var cameled = input.split("");

    for (var i = 0; i < cameled.length; i++) {
      if(cameled[i] === "_" || cameled[i] === "-"){
       cameled[i+1] = cameled[i+1].toUpperCase();
      }
    }
  return cameled.toString().replace(/_|,|-/g, "");
  };
});

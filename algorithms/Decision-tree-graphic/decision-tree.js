function transportationOptions(weather,time,hungery) {
    // Write code here to make the decision tree into an algorithm!
    if (weather==='sunny'){
      if(time>30){
        return 'You can walk.'
      }else if(time<30){
        return 'You might want to take the bus.'
      }
    }else if(weather==='cloudy'){
      if(hungery==='yes'){
        return 'You should walk.'
      }else if(hungery==='no'){
        return 'I would take the bus.'
      }
    }else if(weather==='rainy'){
      return 'Defiantly take the bus.'
    }
  }

  // what is the weather is the first question
  // based on the answer, certain code blocks will run
  // if the sunny
  console.log(transportationOptions('sunny',28,'yes'))
  console.log(transportationOptions('sunny', 45, 'no'))
  console.log(transportationOptions('cloudy', 28, 'yes'))
  console.log(transportationOptions('cloudy', 45,'yes'))
  console.log(transportationOptions('rainy', 40))


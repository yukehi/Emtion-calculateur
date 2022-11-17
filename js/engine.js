
$('.btn').click(function(){
  $(this).parent().find('.btn').removeClass('selected');
  $(this).addClass('selected');
  
  const emationBrige = $(this).attr('data-value');
  const colorBriage= $(this).attr("data-value-color");
  
  if(emationBrige) {
    const selectedColor = $(document).find(".color").find('.btn.selected');
    if(selectedColor.length > 0) {
      const color = selectedColor[0].getAttribute("data-value-color")
      createResult(emationBrige, color);
      
    }
  }

  if(colorBriage) {
    const selectEemtion = $(document).find(".emotion").find('.btn.selected');
    if(selectEemtion.length > 0) {
      const emtion = selectEemtion[0].getAttribute("data-value")
      createResult(emtion, colorBriage);
    }
  }
});

function createResult(emotion, color) {
  if(emotion === 'Joy'){
    if(color === 'yellow'){
      alert('נא ליצור קשר ')
    }
    if(color === 'lime'){
      alert('נא ליצור קשר')
    }
    if(color === 'green'){
      alert('נא ליצור קשר')
    }
    if(color === 'aqua'){
      alert('נא ליצור קשר')
    }
    if(color === 'blue'){
      alert('נא ליצור קשר')
    }
    if(color === 'pink'){
      alert('נא ליצור קשר')
    }
    if(color === 'red'){
      alert('נא ליצור קשר')
    }
    if(color === 'orange'){
      alert('נא ליצור קשר')
    }
  }
  if(emotion === 'Trust'){
    if(color === 'yellow'){
      alert('נא ליצור קשר')
    }
    if(color === 'lime'){
      alert('נא ליצור קשר')
    }
    if(color === 'green'){
      alert('נא ליצור קשר')
    }
    if(color === 'aqua'){
      alert('נא ליצור קשר')
    }
    if(color === 'blue'){
      alert('נא ליצור קשר')
    }
    if(color === 'pink'){
      alert('אנא ליצור קשר')
    }
    if(color === 'red'){
      alert('נא ליצור קשר״)
    }
    if(color === 'orange'){
      alert('את|ה מרגיש|ה תקווה')
    }
  }
  if(emotion === 'Feared'){
    if(color === 'yellow'){
      alert('אנא ליצור קשר')
    }
    if(color === 'lime'){
      alert('נא ליצור קשר')
    }
    if(color === 'green'){
      alert('נא ליצור קשר')
    }
    if(color === 'aqua'){
      alert('אנא ליצור קשר')
    }
    if(color === 'blue'){
      alert('נא ליצור קשר')
    }
    if(color === 'pink'){
      alert('נא ליצור קשר')
    }
    if(color === 'red'){
      alert('נא ליצור קשר|')
    }
    if(color === 'orange'){
      alert('אנא ליצור קשר')
    }
  }
  if(emotion === 'Suprised'){
    if(color === 'yellow'){
      alert('נא ליצור קשר')
    }
    if(color === 'lime'){
      alert('נא ליצור קשר')
    }
    if(color === 'green'){
      alert('נא ליצור קשר')
    }
    if(color === 'aqua'){
      alert('נא ליצור קשר')
    }
    if(color === 'blue'){
      alert('נא ליצור קשר')
    }
    if(color === 'pink'){
      alert('נא ליצור קשר')
    }
    if(color === 'red'){
      alert('נא ליצור קשר')
    }
    if(color === 'orange'){
      alert('נא ליצור קשר')
    }
  }
  if(emotion === 'Sad'){
    if(color === 'yellow'){
      alert('נא ליצור קשר')
    }
    if(color === 'lime'){
      alert('נא ליצור קשר')
    }
    if(color === 'green'){
      alert('נא ליצור קשר')
    }
    if(color === 'aqua'){
      alert('אנא ליצור קשר')
    }
    if(color === 'blue'){
      alert('נא ליצור קשר ')
    }
    if(color === 'pink'){
      alert('נא ליצור קשר')
    }
    if(color === 'red'){
      alert('נא ליצור קשר')
    }
    if(color === 'orange'){
      alert('אנא ליצור קשר')
    }
  }
  if(emotion === 'Disgust'){
    if(color === 'yellow'){
      alert('אנא ליצור קשר')
    }
    if(color === 'lime'){
      alert('נא ליצור קשר')
    }
    if(color === 'green'){
      alert('נא ליצור קשר')
    }
    if(color === 'aqua'){
      alert('נא ליצור קשר')
    }
    if(color === 'blue'){
      alert('נא ליצור קשר ')
    }
    if(color === 'pink'){
      alert('נא ליצור קשר')
    }
    if(color === 'red'){
      alert('אנא ליצור קשר')
    }
    if(color === 'orange'){
      alert('אנא ליצור קשר')
    }
  }
  if(emotion === 'Angry'){
    if(color === 'yellow'){
      alert('נא ליצור קשר')
    }
    if(color === 'lime'){
      alert('אנא ליצור קשר')
    }
    if(color === 'green'){
      alert('נא ליצור קשר')
    }
    if(color === 'aqua'){
      alert('נא ליצור קשר')
    }
    if(color === 'blue'){
      alert('נא ליצור קשר ')
    }
    if(color === 'pink'){
      alert('אנא ליצור קשר')
    }
    if(color === 'red'){
      alert('אנא ליצור קשר')
    }
    if(color === 'orange'){
      alert('אנא ליצור קשר')
    }
  }
  if(emotion === 'anticipated'){
    if(color === 'yellow'){
      alert('נא ליצור קשר')
    }
    if(color === 'lime'){
      alert('נא ליצור קשרה')
    }
    if(color === 'green'){
      alert('נא ליצור קשר')
    }
    if(color === 'aqua'){
      alert('נא ליצור קשר')
    }
    if(color === 'blue'){
      alert('נא ליצור קשר ')
    }
    if(color === 'pink'){
      alert('נא ליצור קשרת')
    }
    if(color === 'red'){
      alert('נא ליצור קשר')
    }
    if(color === 'orange'){
      alert('נא ליצור קשר')
    }
  }
   
}

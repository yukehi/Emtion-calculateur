
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
      alert('את|ה מרגיש|ה מאושר|ת ')
    }
    if(color === 'lime'){
      alert('את|ה מרגיש|ה מאוהב|ת')
    }
    if(color === 'green'){
      alert('את|ה מרגיש|ה אשמ|ה')
    }
    if(color === 'aqua'){
      alert('את|ה מרגיש|ה משועשע|ת')
    }
    if(color === 'blue'){
      alert('את|ה מרגיש|ה מבולבל|ת')
    }
    if(color === 'pink'){
      alert('את|ה מרגיש|ה חולה')
    }
    if(color === 'red'){
      alert('את|ה מרגיש|ה גאווה')
    }
    if(color === 'orange'){
      alert('את|ה מרגיש|ה אופטימי')
    }
  }
  if(emotion === 'Trust'){
    if(color === 'yellow'){
      alert('את|ה מרגיש|ה מאוהב|ת')
    }
    if(color === 'lime'){
      alert('את|ה מרגיש|ה מאובטח|ת')
    }
    if(color === 'green'){
      alert('את|ה מרגיש|ה חלוק|ה בדעתך')
    }
    if(color === 'aqua'){
      alert('את|ה מרגיש|ה מסוקרנ|ת')
    }
    if(color === 'blue'){
      alert('את|ה מרגיש|ה סנטימנטלי|ת')
    }
    if(color === 'pink'){
      alert('את|ה מרגיש|ה מבולבל|ת')
    }
    if(color === 'red'){
      alert('את|ה מרגיש|ה בשליטה')
    }
    if(color === 'orange'){
      alert('את|ה מרגיש|ה תקווה')
    }
  }
  if(emotion === 'Feared'){
    if(color === 'yellow'){
      alert('את|ה מרגיש|ה אשמ|ה')
    }
    if(color === 'lime'){
      alert('את|ה מרגיש|ה חלוק|ה בדעתך')
    }
    if(color === 'green'){
      alert('את|ה מרגיש|ה מובהל|ת')
    }
    if(color === 'aqua'){
      alert('את|ה מרגיש|ה מדהימ|ה')
    }
    if(color === 'blue'){
      alert('את|ה מרגיש|ה מיואש|ת')
    }
    if(color === 'pink'){
      alert('את|ה מרגיש|ה ממורמר|ת')
    }
    if(color === 'red'){
      alert('את|ה מרגיש|הס סוער|')
    }
    if(color === 'orange'){
      alert('את|ה מרגיש|ה חרדתי|ת')
    }
  }
  if(emotion === 'Suprised'){
    if(color === 'yellow'){
      alert('את|ה מרגיש|ה משועשע|ת')
    }
    if(color === 'lime'){
      alert('את|ה מרגיש|ה סקרנ|ית')
    }
    if(color === 'green'){
      alert('את|ה מרגיש|ה מכובד|ת')
    }
    if(color === 'aqua'){
      alert('את|ה מרגיש|ה מופתע|ת')
    }
    if(color === 'blue'){
      alert('את|ה מרגיש|ה גינוי|ה')
    }
    if(color === 'pink'){
      alert('את|ה מרגיש|ה אי אמון')
    }
    if(color === 'red'){
      alert('את|ה מרגיש|ה ממורמר|ת')
    }
    if(color === 'orange'){
      alert('את|ה מרגיש|ה מבולבל|ת')
    }
  }
  if(emotion === 'Sad'){
    if(color === 'yellow'){
      alert('את|ה מרגיש|ת מבולבל|ת')
    }
    if(color === 'lime'){
      alert('את|ה מרגיש|ת סינטמנטלי|ת')
    }
    if(color === 'green'){
      alert('את|ה מרגיש|ת מיואש|ת')
    }
    if(color === 'aqua'){
      alert('את|ה מרגיש|ת מורד|ת')
    }
    if(color === 'blue'){
      alert('את|ה מרגיש|ת מדוכא|ה ')
    }
    if(color === 'pink'){
      alert('את|ה מרגיש|ת חרטה')
    }
    if(color === 'red'){
      alert('את|ה מרגיש|ת קינאה')
    }
    if(color === 'orange'){
      alert('את|ה מרגיש|ת פסימי|ת')
    }
  }
  if(emotion === 'Disgust'){
    if(color === 'yellow'){
      alert('את|ה מרגיש|ה הרסני|ת')
    }
    if(color === 'lime'){
      alert('את|ה מרגיש|ה מבולבל|ת')
    }
    if(color === 'green'){
      alert('את|ה מרגיש|ה בושה')
    }
    if(color === 'aqua'){
      alert('את|ה מרגיש|ה אי אמון')
    }
    if(color === 'blue'){
      alert('את|ה מרגיש|ה חרטה ')
    }
    if(color === 'pink'){
      alert('את|ה מרגיש|ה נגעל|ת')
    }
    if(color === 'red'){
      alert('את|ה מרגיש|ה זלזול')
    }
    if(color === 'orange'){
      alert('את|ה מרגיש|ה לגלוג')
    }
  }
  if(emotion === 'Angry'){
    if(color === 'yellow'){
      alert('את|ה מרגיש|ה גאווה')
    }
    if(color === 'lime'){
      alert('את|ה מרגיש|ה דומיננטי|ת')
    }
    if(color === 'green'){
      alert('את|ה מרגיש|ה בלבול')
    }
    if(color === 'aqua'){
      alert('את|ה מרגיש|ה זוועה')
    }
    if(color === 'blue'){
      alert('את|ה מרגיש|ה קנאי|ת ')
    }
    if(color === 'pink'){
      alert('את|ה מרגיש|ה זלזול')
    }
    if(color === 'red'){
      alert('את|ה מרגיש|ה זעם')
    }
    if(color === 'orange'){
      alert('את|ה מרגיש|ה אגרסיביות')
    }
  }
  if(emotion === 'anticipated'){
    if(color === 'yellow'){
      alert('את|ה מרגיש|ה אופטימי|ת')
    }
    if(color === 'lime'){
      alert('את|ה מרגיש|ה תקווה')
    }
    if(color === 'green'){
      alert('את|ה מרגיש|ה חרדה')
    }
    if(color === 'aqua'){
      alert('את|ה מרגיש|ה מבולבל')
    }
    if(color === 'blue'){
      alert('את|ה מרגיש|ה פסימי|ת ')
    }
    if(color === 'pink'){
      alert('את|ה מרגיש|ה ציני|ת')
    }
    if(color === 'red'){
      alert('את|ה מרגיש|ה אגרסיבי|ת')
    }
    if(color === 'orange'){
      alert('את|ה מרגיש|ה מצפה')
    }
  }
   
}

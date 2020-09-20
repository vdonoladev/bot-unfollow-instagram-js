let counter = 0;
document.querySelectorAll('._8A5w5').forEach((item, index) => {
setTimeout(() => {
    if(item.innerText == 'Seguindo') {
      item.click();
      document.querySelectorAll('.-Cab_').forEach((item, index) => {
        if (item.innerText == 'Deixar de seguir'){
          item.click();
          counter++;
          console.log('Você deixou de seguir '+counter+' pessoas');
          console.log(`Você deixou de seguir ${counter} pessoas`);
        }
      })
    }
  }, index * 10000)
})
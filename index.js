let contador = 0;
document.querySelectorAll('._8A5w5').forEach((item, index) => {
setTimeout(() => {
    if(item.innerText == 'Following') {
      item.click();
      document.querySelectorAll('.-Cab_').forEach((item, index) => {
        if (item.innerText == 'Unfollow'){
          item.click();
          contador++;
          console.log('Você deixou de seguir '+contador+' pessoas');
          console.log(`Você deixou de seguir ${contador} pessoas`);
        }
      })
    }
  }, index * 10000)
})
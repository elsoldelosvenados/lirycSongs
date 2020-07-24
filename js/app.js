import { API } from './api.js'
import * as UI  from './interface.js'

/**
  * @descrition As soon as the main button is clicked this callback
  * will initialize the flow first it will validate de form and 
  * it will show the respective message then if all is well
  * it will print the resultado
*/
UI.searchForm.addEventListener('submit', (e)=>{

      e.preventDefault()

      const arts = document.querySelector('#artista').value,
            song = document.querySelector('#cancion').value

      if(arts == '' || song === ''){
            UI.divMessage.innerHTML =  'An error has ocurred, please fill all fields'
            UI.divMessage.classList.add = ('error')
            setTimeout (()=>{
                  UI.divMessage.innerHTML = ''
                  UI.divMessage.classList.remove('error')
            },3000)
      } else {
            const api = new API(arts, song)
            api.getLyrics()
              .then(data =>{
                    if(data.response.lyrics){
                          UI.divResponse.textContent = data.response.lyrics
                    } else {
                          UI.divMessage.innerHTML = "The soung don't exist, please try again"
                          UI.divMessage.classList.add('error')
                          setTimeout(()=>{
                                UI.divMessage.innerHTML = ''
                                UI.divMessage.classList.remove('error')
                                UI.searchForm.reset()
                          },3000)

                    }
              })
      }
})

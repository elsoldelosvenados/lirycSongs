export class API {

      /**
        * @param {string} arts the name of the artist
        * @param {string} song the name of the song to be found
      */
      constructor(arts, song){
            this.arts = arts
            this.song = song
      }
      /**
        * Get the lyrics of a song from a public API
        * according with th eparameter in the URL
        * @return {object} the respnse as JSON
        * @author Andres Acosta
      */
      async getLyrics(){
            let  song = 'I lived',
                  arts = 'one republic'
            const url = await fetch(`https://api.lyrics.ovh/v1/${this.arts}/${this.song}`)
            console.log(url)
            const response  = await url.json()
            console.log(response);

            return {
                response
            }
      }
}

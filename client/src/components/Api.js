export class API {
    static async getClients(){
          const res = await fetch(``)
    }
    static loginUser(body) {
      return fetch(`http://127.0.0.1:5000/auth/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify( body )
      }).then( resp => resp.json())
    }
  
  }

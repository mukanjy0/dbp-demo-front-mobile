const base_path = "http://192.168.1.12:8088"

export async function signup(request) {
    try {
        const response = await fetch(`${base_path}/api/auth/signup`, {
            method: 'POST',
            mode: 'no-cors',
            cache: 'no-cache',
            body: JSON.stringify(request),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    
        const data = await response.json();

        return data;
    } catch(err) {
        console.log("Got Error:")
        console.error(err)
    }
}

export async function signin(request) {
    try {
        const response = await fetch(`${base_path}/api/auth/signin`, {
            method: 'POST',
            mode: 'no-cors',
            cache: 'no-cache',
            body: JSON.stringify(request),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await response.json();

        return data;
    } catch(err) {
        console.log("Got error!")
        console.error(err)
    }
}

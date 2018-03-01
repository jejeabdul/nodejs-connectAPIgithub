//PROBLEM : Saya ingin lihat simple profile githun
//SOLUTION : Gunakan nodejs untuk connect ke github API untuk mendapatkan info github profile dan dicetak di console
let https = require('https');
let get = (username) => {
    //TODO : connect to github API
    // const username = 'jejeabdul'
    const options = {
        hostname: 'api.github.com',
        port: 443,
        path: '/users/' + username,
        method: 'GET',
        headers: {
            'user-agent': 'nodejs'
        }
    }

    //TODO : Read the data
    let request = https.request(options, (response) => {
        let body = ''
        response.on('data', (data) => {
            body = body + data
        })

        response.on('end', () => {
            //TODO : Parse the data
            // console.log(typeof body);
            let profile = JSON.parse(body);
            if (response.statusCode === 200) {
                // console.log(typeof profile)
                //TODO : Print the data out
                console.log(profile.avatar_url);
            } else {
                console.log('Github profile ' + username + ' not found');
            }
        })
    });

    //untuk mengakhiri request
    request.end();
    //kalo ada error
    request.on('error', (e) => {
        console.error(e);
    })

}

module.exports={
    get
}



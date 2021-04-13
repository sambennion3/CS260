document.getElementById("photoSubmit").addEventListener('click', function(event) {
    event.preventDefault();
    const value = document.getElementById("photoInput").value;
    if (value === "")
        return;
    console.log(value);
    const url = "https://picsum.photos/" + value;
    fetch(url)
        .then(function(response) {
            if (response.status != 200) {
                return {
                    text: "Error calling the Numbers API service: " + response.statusText
                }
            }
            console.log(response.url)
            let results="";
            results += '<img src=' + url + '/>';
            document.getElementById('imageResults').innerHTML = results;
        })
        
        
    });
    document.getElementById("photoSubmit1").addEventListener('click', function(event) {
        event.preventDefault();
        const value = document.getElementById("photoInput1").value;
        if (value === "")
            return;
        console.log(value);
        const url = "https://picsum.photos/" + value + "/" + value + "/?blur=5";
        fetch(url)
            .then(function(response) {
                if (response.status != 200) {
                    return {
                        text: "Error calling the Numbers API service: " + response.statusText
                    }
                }
                console.log(response.url)
                let results="";
                results += '<img src=' + url + '/>';
                document.getElementById('imageResults1').innerHTML = results;
            })
            
            
        });
        document.getElementById("photoSubmit2").addEventListener('click', function(event) {
            event.preventDefault();
            const value = document.getElementById("photoInput2").value;
            if (value === "")
                return;
            console.log(value);
            const url = "https://picsum.photos/id/" + value + "/info";
            /*const url = "https://picsum.photos/id/655/" + value + "/" + value;*/
            fetch(url)
                .then(function(response) {
                    return response.json();
                }).then(function(json) {
                    /*if (response.status != 200) {
                        return {
                            text: "Error calling the Numbers API service: " + response.statusText
                        }
                    }
                    console.log(response.url)*/
                    let results="";
                    /*results += '<img src=' + url + '/>';*/
                    
                    results += "<p>Photographer's name: " + json.author + " </p> ";
                    results += "<p> URL: " + json.url + " </p>";
 
                    document.getElementById('imageResults2').innerHTML = results;
                });
                
                
            });
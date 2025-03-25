const url = "https://raw.githubusercontent.com/MarkoAlma/PortfolioRendes/refs/heads/main/data.json"
getData(url, renderData)
function renderData(data) {
    data.forEach(a => {
        document.getElementById("work").innerHTML+=`
                        <div class="munkak">
                        <div><img class="munkakepek" src=${a.photo_url} alt=""></div>
                        <div class="kicsike">
                            <h2>${a.title}</h2>
                            <h5>Témakörök</h5>
                            <ul>
                                <li>fetch API</li>
                                <li>Set adatszerkezet</li>
                                <li>Array.from()</li>
                                <li>radió gombok használata</li>
                                <li>checkboxok használata</li>
                                <li>select használat</li>
                            </ul>
                            <div class="relativ">
                            <p><a class="szinezes" href=${a.repo_link} target="_blank">Github Link</a></p>
                            <p><a class="szinezes" href=${a.site_link} target="_blank">Weboldal Link</a></p>
                            </div>
                        </div>
                    </div>
        `
    });
}
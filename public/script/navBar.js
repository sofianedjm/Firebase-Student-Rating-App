const html3 = `
    </nav>
    <nav class="navbar navbar-light bg-light" id="monBloc">
        <a class="navbar-brand" href="#">Home</a>

        <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
        <div>
            <a class="navbar-brand " href="#">Register</a>
            <a class="navbar-brand " href="#">Log in</a>
        </div>
    </nav>`;

function navBar() {

    const html = `
    <nav class="navbar fixed-top navbar-light bg-light">
        <a class="navbar-brand" href="index.html">Home</a>`;
    const html2 = test();

    const navBar = document.getElementById("navBar");
    navBar.innerHTML = html  + html2 + html3;
    if (!isLocalStorageEmpty()) {
        const logOut = document.getElementById("logOut");
        logOut.onclick = logout;
    }
}

function navBar2() {
    const html = `
    <nav class="navbar fixed-top navbar-light bg-light">
        <a class="navbar-brand" href="../index.html">Home</a>`;
    const html2 = test2();
    const navBar = document.getElementById("navBar");
    navBar.innerHTML = html  + html2 + html3;
    if (!isLocalStorageEmpty()) {
        const logOut = document.getElementById("logOut");
        logOut.onclick = logout;
    }
}

function test() {
    if (!isLocalStorageEmpty()) {
        return `   
           <div>     
            <a class="navbar-brand" href="UI/ownRating.html">Mes évaluations</a>
            <a class="navbar-brand" id="logOut" href="">Deconnexion</a>    
            </div></nav>`;
    } else {
        return `  
        <div>
            <a class="navbar-brand" href="UI/register.html">Register</a>
            <a class="navbar-brand" href="UI/login.html">Log in</a>
        </div>
</nav>`;
    }
}

function test2() {
        if (!isLocalStorageEmpty()) {
            return `   
           <div>     
            <a class="navbar-brand" href="ownRating.html">Mes évaluations</a>
            <a class="navbar-brand" id="logOut" href="">Deconnexion</a>    
            </div></nav>`;
        } else {
            return `  
        <div>
            <a class="navbar-brand" href="register.html">Register</a>
            <a class="navbar-brand" href="login.html">Log in</a>
        </div>
    </nav>`;
        }
    }

function logout() {
    localStorage.removeItem('sessionId');
    alert('Déconnexion réussie !');

    // Rafraîchir la page après un court délai
    setTimeout(() => {
        location.reload();
    }, 500);
}

function isLocalStorageEmpty() {
    return localStorage.getItem('sessionId') == null;
}



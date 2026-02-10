const API = "https://backend-final-75pr.onrender.com/";
async function loadMenu() {
    const res = await fetch("/api/menu");
    const data = await res.json();

    const menuDiv = document.getElementById("menu");

    data.forEach(item => {
        menuDiv.innerHTML += `
            <div class="card">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <p>$${item.price}</p>
            </div>
        `;
    });
}

loadMenu();

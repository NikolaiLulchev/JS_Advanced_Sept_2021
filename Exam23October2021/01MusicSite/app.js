window.addEventListener('load', solve);

function solve() {
    let [genre, name, author, date] = document.querySelectorAll('.container-text input')
    const addButton = document.getElementById('add-btn');
    addButton.addEventListener('click', addToCollection)

    function addToCollection(e) {
        e.preventDefault()
        console.log(this)

        if (genre.value != "" && name.value != "" && author.value != "" && date.value != "") {

            let parentDiv = document.querySelector(".all-hits-container")
            let newDiv = document.createElement('div')
            newDiv.classList.add('hits-info')
            newDiv.innerHTML = `<img src="./static/img/img.png">
                                <h2>Genre: ${genre.value}</h2>
                                <h2>Name: ${name.value}</h2>
                                <h2>Author: ${author.value}</h2>
                                <h3>Date: ${date.value}</h3>
                                <button class="save-btn">Save song</button>
                                <button class="like-btn">Like song</button>
                                <button class="delete-btn">Delete</button>`
            parentDiv.appendChild(newDiv)

            const [saveBtn, likeBtn, deleteBtn] = newDiv.querySelectorAll('button')
            saveBtn.addEventListener("click", saveSong)
            likeBtn.addEventListener('click', likeSong)
            deleteBtn.addEventListener('click', deleteSong)

            genre.value = ''
            name.value = ''
            author.value = ''
            date.value = ''
        }

    }

    function saveSong(e) {
        let savedDiv = document.querySelector('.saved-container')
        let newDiv = document.querySelector('.all-hits-container div')
        const [saveBtn, likeBtn, deleteBtn] = newDiv.querySelectorAll('button')
        deleteBtn.addEventListener('click', deleteSong)
        saveBtn.remove()
        likeBtn.remove()
        savedDiv.appendChild(newDiv)

    }

    function likeSong(e) {
        let totalLikesP = document.querySelector('#total-likes p')
        let totalLikes = Number(totalLikesP.textContent.split(':')[1])
        totalLikes += 1
        totalLikesP.textContent = `Total Likes: ${totalLikes}`
        e.target.disabled = true;
    }

    function deleteSong(e) {

        let songToDelete = e.target.parentElement
        songToDelete.remove()

    }
}
// Adding a new task
const addTask = () => {
    let task = document.getElementById('task').value;

    if (task == "") {
        const handleDelete = (itemIndex) => {
            let ItemJsonArrayStr = localStorage.getItem('itemJson');
            ItemJsonArray = JSON.parse(ItemJsonArrayStr);
            console.log("Deleted", itemIndex)

            ItemJsonArray.splice(itemIndex, 1);
            localStorage.setItem('itemJson', JSON.stringify(ItemJsonArray));
        }
    }
    else {
        console.log("Adding a new Task...")
        let ItemJsonArrayStr = localStorage.getItem('itemJson');
        let ItemJsonArray = [];
        ItemJsonArray = JSON.parse(ItemJsonArrayStr);
        ItemJsonArray.push([task])
        localStorage.setItem('itemJson', JSON.stringify(ItemJsonArray))

        document.getElementById('task').value = "";
    }

    show();
}

// Showing tasks
const show = () => {
    if (localStorage.getItem('itemJson') == null) {
        ItemJsonArray = [];
        localStorage.setItem('itemJson', JSON.stringify(ItemJsonArray));
    }
    else {
        let ItemJsonArrayStr = localStorage.getItem('itemJson');
        ItemJsonArray = JSON.parse(ItemJsonArrayStr)
    }
    // Manipulating notes localStorage to html
    let lists = document.querySelector('.lists');
    let str = "";
    ItemJsonArray.forEach((element, index) => {
        console.log(element)
        str += `<li class="list">${element} <i class="fa-solid fa-trash" onclick="handleDelete(${index})"></i></li>`
    });
    lists.innerHTML = str;
}
show();

// Adding Delete Functionality
const handleDelete = (itemIndex) => {
    let ItemJsonArrayStr = localStorage.getItem('itemJson');
    ItemJsonArray = JSON.parse(ItemJsonArrayStr);
    console.log("Deleted", itemIndex)

    ItemJsonArray.splice(itemIndex, 1);
    localStorage.setItem('itemJson', JSON.stringify(ItemJsonArray));


    show();
}
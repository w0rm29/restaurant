const Menu = () => {
    let hasClicked = false;
    const getMenuCardDetails = () => {
        const content = document.getElementById('content');
        content.innerHTML = '';
        let header = document.createElement('h1');
        header.textContent = "Menu Card";
        let ul = document.createElement('ul');
        ul.style.paddingLeft = "0"; // Remove default padding
        ul.style.textAlign = "center"; // Center text of list items
        ul.style.display = "inline-block";
        const menuItems = ["Pizza", "Burger", "Tacos"];
        menuItems.forEach((item) => {
            let li = document.createElement('li');
            li.textContent = item;
            ul.appendChild(li);
        })
        content.append(header, ul);

    }

    const handleClick = () => {
        if (!hasClicked) {
            getMenuCardDetails();
        }
    }
    return {
        handleClick,
    }
}

export default Menu;
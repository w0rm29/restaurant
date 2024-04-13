const Contact = () => {
    let hasClicked = false;
    const getContactDetails = () => {
        const content = document.getElementById('content');
        content.innerHTML = '';
        let header = document.createElement('h1');
        header.textContent = "Contact Details";
        let ul = document.createElement('ul');
        ul.style.paddingLeft = "0";
        ul.style.textAlign = "center";
        ul.style.display = "inline-block";
        const details = [
            {
                "Name": "Aditya",
                "Address": "New York",
                "Contact": "000000000"
            }
        ];
        details.forEach((detail) => {
            Object.entries(detail).forEach(([key, value]) => {
                let li = document.createElement('li');
                li.textContent = `${key}: ${value}`;
                ul.appendChild(li);
            });
        });
        content.appendChild(header);
        content.appendChild(ul);
    }
    const handleClick = () => {
        if (!hasClicked) {
            getContactDetails();
        }
    }
    return {
        handleClick,
    }
}

export default Contact;
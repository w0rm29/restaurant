const About = () => {
    let hasClicked = false;
    const getAbout = () => {
        const content = document.getElementById('content');
        content.innerHTML = '';
        let header = document.createElement('h1');
        header.textContent = "About Page";
        let details = document.createElement('p');
        details.textContent = "This is a restaurant established during 1800s and has served all kind of delicacies.";
        content.appendChild(header);
        content.appendChild(details);
    }

    const handleClick = () => {
        if (!hasClicked) {
            getAbout();
        }
    }
    return {
        handleClick,
    }
}

export default About;
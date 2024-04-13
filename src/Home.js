const Home = () => {
    let hasClicked = false;
    const getDetails = () => {
        const content = document.getElementById('content');
        content.innerHTML = '';
        let welcome = document.createElement('h1');
        welcome.textContent = "Welcome to my Restaurant";
        content.appendChild(welcome);
    }

    const handleClick = () => {
        if (!hasClicked) {
            getDetails();
        }
    }


    return {
        handleClick,
    };
};

export default Home;
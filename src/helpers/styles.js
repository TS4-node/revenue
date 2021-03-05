

export const handleSpanIndicator = (value) => {
    const selector = document.getElementById('selector');

    if (value == 0) {
        selector.setAttribute('style', 'background-color: #1890ff; height: .22rem; left: 0px; width: 300px; transition: 1s all ease');
    }
    if (value == 1) {
        selector.setAttribute('style', 'background-color: #1890ff; height: .22rem; left: 0px; width: 600px; transition: 1s all ease');
    }
    if (value == 2) {
        selector.setAttribute('style', 'background-color: #1890ff; height: .22rem; left: 0px; width: 900px; transition: 1s all ease');
    }
    if (value == 3) {
        selector.setAttribute('style', 'background-color: #1890ff; height: .22rem; left: 0px; width: 1200px; transition: 1s all ease');
    }
}
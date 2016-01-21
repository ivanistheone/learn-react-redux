
export default class App {

    start() {
        console.log('I am starting ES6 now.');
    }
    
    render () {
        document
            .getElementById("app")
            .textContent = 'app rendered';
    }
}


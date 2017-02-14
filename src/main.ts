export default class App{

    private get appShell(){ return <HTMLElement>this.$document.getElementById('my-app')}
    private get h1(){ return <NodeListOf<HTMLElement>>this.$document.getElementsByTagName('h1')}

    constructor(private $document:Document = document){ }

    init(){
        this.appShell.innerHTML = "App loaded";
        this.h1.item(0).innerHTML = "Typescript Component Starter";
    }
}

import MainApp from "./controllers/MainApp";
import Context from "./Context";

let context = new Context();

let mainApp = new MainApp();
mainApp.$mount($("<div></div>").appendTo(document.body)[0]);
mainApp.setContext(context);

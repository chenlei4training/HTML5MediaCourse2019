package {

import flash.display.Sprite;
import flash.media.Camera;
import flash.text.TextField;

public class Main extends Sprite {
    public function Main() {
        var textField:TextField = new TextField();
        textField.text = "Hello, World";
        textField.width = 550;
        addChild(textField);

        textField.text = JSON.stringify(Camera.names);
    }
}
}

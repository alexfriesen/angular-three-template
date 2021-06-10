import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from "@angular/core";
import { RetroSceneAnimation } from "./animation";

@Component({
  selector: 'app-demo',
  template: `<canvas #canvas></canvas>`,
  styles: [`
    :host {
        display: block;
        height: 100%;
        width: 100%;
    }
    canvas {
      position: relative;
      height: 100%;
      width: 100%;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoComponent {

  @ViewChild('canvas', { static: true })
  public canvas!: ElementRef<HTMLCanvasElement>;

  private scene: RetroSceneAnimation | undefined;

  ngOnInit() {
    const element = this.canvas.nativeElement
    this.scene = new RetroSceneAnimation(this.canvas.nativeElement);
    this.scene.resize(element.clientWidth, element.clientHeight);
    this.scene.render();
  }

  ngDestory() {
    this.scene?.stop();
  }

}

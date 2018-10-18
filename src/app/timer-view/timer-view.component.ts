import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { TimerChildComponent } from '../timer-child/timer-child.component'
@Component({
  selector: 'app-timer-view',
  templateUrl: './timer-view.component.html',
  styleUrls: ['./timer-view.component.css']
})
export class TimerViewComponent implements AfterViewInit {
  /* ngAfterViewInit() 生命周期钩子是非常重要的一步。被注入的计时器组件只有在 Angular 显示了父组件视
图之后才能访问，所以它先把秒数显示为 0.
然后 Angular 会调用  ngAfterViewInit 生命周期钩子，但这时候再更新父组件视图的倒计时就已经太晚了。
Angular 的单向数据流规则会阻止在同一个周期内更新父组件视图。应用在显示秒数之前会被迫再等一轮。
使用  setTimeout() 来等下一轮，然后改写  seconds() 方法，这样它接下来就会从注入的这个计时器组件里获
取秒数的值。 */
  seconds() { return 0; }
  ngAfterViewInit() {
    setTimeout(() => this.seconds = () => this.TimerChildComponent.seconds, 0);
  }
  @ViewChild(TimerChildComponent)
  private TimerChildComponent;

  start() { this.TimerChildComponent.start(); }
  stop() { this.TimerChildComponent.stop(); }
}

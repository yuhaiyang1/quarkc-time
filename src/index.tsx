import { QuarkElement, Fragment, property, customElement, state } from "quarkc";
import style from "./index.less?inline";

declare global {
  interface HTMLElementTagNameMap {
    "quarkc-time": MyComponent;
  }
}

@customElement({ tag: "quarkc-time", style })
class MyComponent extends QuarkElement {
  TRANSITION: string = '100ms linear';
  NUMBER_TRANSLATION: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  timer: any
  
  @state()
  hourAngle: number = 0
  
  @state()
  minAngle:number =  0

  @state()
  secAngle: number = 0
  
  @state()
  transition:string = this.TRANSITION

  updateTime() {
    let date = new Date()

    let secAngle = (date.getSeconds() + date.getMilliseconds() / 1000) * 6;
    let minAngle = date.getMinutes() * 6 + secAngle / 60;
    let hourAngle = (date.getHours() % 12) * 30 + minAngle / 12;

    let transition = this.TRANSITION
    //  当秒针走到 0 的时候 角度其实是变小了 所以会倒着转 需要暂时删除 transition
    if (this.secAngle > secAngle) transition = null;

    Object.assign(this, {
      hourAngle: hourAngle,
      minAngle: minAngle,
      secAngle: secAngle,
      transition: transition
    })
  }

  componentDidMount() {
    this.updateTime();

    this.timer = setInterval(() => { this.updateTime() }, 100);
  }

  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
  }

  leadingZero(number) {
    return number < 10 ? '0' + number : number
  }


  render() {
    let hourArr = [...new Array(12).keys()]
    let grad = hourArr.map((item) => {
      return <div key={item} className="grad" style={{transform: `rotateZ(${item*30}deg)`}}></div>
    })
    let state = this
    let now = new Date()

    return (
      <div className="deTime">
        <div className="container">
          {grad}
          <div className="minute" style={{transform:  'rotateZ('+state.minAngle+'deg)'}}></div>
          <div className="hour" style={{transform:  'rotateZ('+state.hourAngle+'deg)'}}></div>
          <div className="second" style={{transition: state.transition, transform:  'rotateZ('+state.secAngle+'deg)'}}></div>
          <div className="center"></div>
        </div>
        <div className="time">
          {this.leadingZero(now.getHours())}:{this.leadingZero(now.getHours())}<span> {this.leadingZero(now.getSeconds())}</span>
        </div>
        <div className="date">
          <div>{this.NUMBER_TRANSLATION[now.getDay()]}</div>
          <div>{now.getFullYear()}-{now.getMonth() + 1}-{now.getDate()}</div>
        </div>
      </div>
    )
  }
}

export default MyComponent;

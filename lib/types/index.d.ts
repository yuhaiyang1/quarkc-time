import { QuarkElement } from "quarkc";
declare global {
    interface HTMLElementTagNameMap {
        "quark-timer": MyComponent;
    }
}
declare class MyComponent extends QuarkElement {
    TRANSITION: string;
    NUMBER_TRANSLATION: string[];
    timer: any;
    hourAngle: number;
    minAngle: number;
    secAngle: number;
    transition: string;
    updateTime(): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    leadingZero(number: any): any;
    render(): any;
}
export default MyComponent;

import { inject, bindable, customElement } from 'aurelia-framework';

@inject()
@customElement('eblock-input')
export class EBlockInput {

    @bindable id;
    @bindable value;
    @bindable error;
    @bindable label;
    @bindable inputType;
    @bindable iconName;
    @bindable propertyName;

    constructor() { }

    onBlur() { }
}

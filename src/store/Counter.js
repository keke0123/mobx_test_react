import React, {Component} from 'react';

import { observable, action } from 'mobx';

// vscode 에서 decorator 설정법
// ctrl+',' 누른후 decorators 검색후 체크 해주면 된다.
export default class Counter{
    @observable number = 0;

    @action increase = () => {
        this.number++;
    }

    @action decrease = () => {
        this.number--;
    }
}
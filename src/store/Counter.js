import React, {Component} from 'react';

import { observable, action } from 'mobx';

export default class Counter{
    @observable number = 0;

    @action increase = () => {
        this.number++;
    }

    @action decrease = () => {
        this.number--;
    }
}
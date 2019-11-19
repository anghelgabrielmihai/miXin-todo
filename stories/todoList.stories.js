import React from 'react';
import { ButtonComponent } from '../src/components/buttonComponent/buttonComponent';
import '../src/components/buttonComponent/buttonComponent.css';

export default {
    title: 'ToDOButton'
};


const addItemComponent = () => {
    alert('salut');
}


export const button = () => <ButtonComponent name="Add" methodToCall={addItemComponent}></ButtonComponent>;

import { ClipboardEvent, KeyboardEvent } from "react";

function getInputNumbersValue(input: HTMLInputElement) {
  return input.value.replace(/\D/g, "")
}

export function onPhoneInput(event: InputEvent) {
  const input = event.target as HTMLInputElement;
  console.log(input)
  let inputNumbersValue = getInputNumbersValue(input);
  let formattedInputValue = '';
  let selectionStart = input.selectionStart;

  if(!inputNumbersValue) return input.value = "";

  if(input.value.length !== selectionStart) {

    if(event.data  && /\D/g.test(event.data)) {
      return inputNumbersValue;
    }
    return;
  }

  if(['7', '8', '9'].indexOf(inputNumbersValue[0]) > -1) {
    //Russian phone number
    if(inputNumbersValue[0] === '9') inputNumbersValue = "7" + inputNumbersValue
    let firstSymbols = inputNumbersValue[0] === "8" ? "8" : "+7";
    formattedInputValue = firstSymbols + ' ';

    if(inputNumbersValue.length > 1) {
      formattedInputValue += "(" + inputNumbersValue.substring(1, 4);
    }
    if(inputNumbersValue.length >= 5) {
      formattedInputValue += ") " + inputNumbersValue.substring(4, 7);
    }
    if(inputNumbersValue.length >= 8) {
      formattedInputValue += "-" + inputNumbersValue.substring(7, 9);
    }
    if(inputNumbersValue.length >= 10) {
      formattedInputValue += "-" + inputNumbersValue.substring(9, 11);
    }
  } else {
    //Not Russian phone number
    formattedInputValue = "+" + inputNumbersValue.substring(0, 16);
  }
  return formattedInputValue;
}

export function onPhoneKeyDown(event: KeyboardEvent<HTMLInputElement>) {
  const input = event.currentTarget;
  if(event.keyCode === 8 && getInputNumbersValue(input).length === 1) {
    return '';
  }
}

export function onPhonePaste(event: ClipboardEvent<HTMLInputElement>) {
  const pasted = event.clipboardData || window.clipboardData;
  const input = event.currentTarget;
  let inputNumbersValue = getInputNumbersValue(input);
  if(pasted) {
    let pastedText = pasted.getData("Text");
    if (/\D/g.test(pastedText)) {
      return inputNumbersValue;
    }
  }
}


/* @flow */
import './style.css'

type Test = {|
  string: string,
  number: number,
|}

const test: Test = {
  string: '1',
  number: 123,
}

const $app = document.querySelector('#app')

if ($app !== null) {
  $app.innerHTML = `
    <h1>Hello Vite!</h1>
    <p>string=${test.string}, number=${test.number}</p>
  `
}

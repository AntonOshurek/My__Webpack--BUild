function hello() {
    console.log('hello');
    let hello = 'hello';
    const par = document.querySelector('.webpack-title').innerHTML = hello;
}

module.exports = hello;
export function createSomething() {

    const test = ["G", "-", "H", "v", "0", "7", "U"];
    const arik = [ "6", "K", "U", "d", "X", "f", "w", "7", "0", "Y", "1", "7", "o"];
    const loola = ["A", "I", "z", "a", "S", "y", "B", "A", "z"];
    const Yonska = ["X", "E", "k", "t", "6", "k", "3", "N", "m", "H", "x", "X", "e", "5"];

    const str = loola.concat(test.reverse(), Yonska.slice(0, loola.length%18-arik.length), arik).slice(0).join("");

    return str;

}



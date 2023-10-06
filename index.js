const censor = () => {
    const arrayOfStrings = []

    return replaceElement = (str1, str2 = null) => {
        if (str1 && str2) {
            arrayOfStrings.push([str1, str2])
        }
        if (str1 && str2 === null) {
            for (let i of arrayOfStrings) {
                const [el1, el2] = i

                str1.match(new RegExp(`${el1}`, 'gim')) ?
                    str1 = str1.replace(new RegExp(`${el1}`, 'gim'), el2) :
                    str1 = str1.replace(new RegExp(`${el2}`, 'gim'), el1)
            }
            return str1
        }
    }
}
const changeScene = censor()
changeScene('PHP', 'JS');

changeScene('backend', 'frontend')

console.log(changeScene('PHP is the most popular programming language for backend web-development'));
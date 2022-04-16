function elemGenerator(tag, attr, content) {
    if (!tag) return
    const element = document.createElement(tag)
    attr.forEach( elem => {
        const arr = Object.entries(elem)
        arr.forEach( item => {
            element.setAttribute(item[0], item[1])
        })
    })

    content ? element.innerText = content : ''
    return element
}

export {elemGenerator}
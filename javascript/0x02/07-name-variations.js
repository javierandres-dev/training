const readName = document.getElementById('readName')
readName.addEventListener('input', () => {
    let name = readName.value
    let numbChar = name.length
    document.getElementById('numbChar').innerHTML = numbChar
    let firsChar = name.charAt(0)
    document.getElementById('firsChar').innerHTML = firsChar
    let lastChar = name[name.length - 1]
    document.getElementById('lastChar').innerHTML = lastChar
    let loweCase = name.toLowerCase()
    document.getElementById('loweCase').innerHTML = loweCase
    let uppeCase = name.toUpperCase()
    document.getElementById('uppeCase').innerHTML = uppeCase
    let capitalize = uppeCase.slice(0, 1) + loweCase.slice(1)
    document.getElementById('capitalize').innerHTML = capitalize
    let cleanName = name.trim()
    document.getElementById('cleanName').innerHTML = cleanName
})
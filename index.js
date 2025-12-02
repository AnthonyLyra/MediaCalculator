const valueInput = document.getElementById('InputNomePrin')
const ATable = document.getElementById('tableAnthony')
const GTable = document.getElementById('tableGabriel')
const YTable = document.getElementById('tableYuri')
const errParagraph = document.getElementById('paragraph')
ATable.setAttribute('hidden', true)
GTable.setAttribute('hidden', true)
YTable.setAttribute('hidden', true)
errParagraph.setAttribute('hidden', true)

function NomeFunc() {
    const valueInputMi = valueInput.value
    if (valueInputMi === 'Anthony') {
    YTable.setAttribute('hidden', true)
    GTable.setAttribute('hidden', true)
    ATable.removeAttribute('hidden')
    errParagraph.setAttribute('hidden', true)
    }
    else if (valueInputMi === 'Gabriel') {
    ATable.setAttribute('hidden', true)
    YTable.setAttribute('hidden', true)
    GTable.removeAttribute('hidden')
    errParagraph.setAttribute('hidden', true)
    }
    else if (valueInputMi === 'Yuri') {
    ATable.setAttribute('hidden', true)
    GTable.setAttribute('hidden', true)
    YTable.removeAttribute('hidden')
    errParagraph.setAttribute('hidden', true)
    }
    else if (valueInput !== 'Anthony', 'Yuri', 'Gabriel') {
        errParagraph.removeAttribute('hidden')
        ATable.setAttribute('hidden', true)
        GTable.setAttribute('hidden', true)
        YTable.setAttribute('hidden', true)
    }
}






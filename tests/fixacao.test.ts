import {fixacao} from "../src/fixacao"

describe("testando arquivo fixacao.ts", () => {
    test("A funcao deve dividir a palavra 'pog' em 'p', 'o', e 'g'", () => {
        const palavra = "pog"
        const resultadoEsperado = { word: ['p', 'o', 'g']}
        const resultadoReal = fixacao(palavra)
        expect(resultadoReal).toEqual(resultadoEsperado)
    })
})
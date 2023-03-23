import assert from 'assert'
import chai, { expect } from 'chai'
import Calculadora from '../calculadora/calculadora.js'


describe('teste soma',()=>{
    it("deve somar 4 + 5 com resultado 9",()=>{
        let resultado= Calculadora.soma(4,5)
        expect(resultado).to.be.equals(9)
    })

    it("deve somar a + b com resultado ab", ()=>{
        let resultado= Calculadora.soma('a','b')
        expect(resultado).to.be.equals('ab')
    })
    
    it("deve somar aaa + b bb com resultado aaab bb", ()=>{
        let resultado= Calculadora.soma('aaa','b bb')
        expect(resultado).to.be.equals('aaab bb')
    })

    it("deve somar -4 + 5 com resultado 1", ()=>{
        let resultado= Calculadora.soma(-4,5)
        expect(resultado).to.be.equals(1)
    })


})

describe('teste subtração',()=>{
    it("deve subitrair 4 - 5 com resultado -1",()=>{
        let resultado= Calculadora.subtracao(4,5)
        expect(resultado).to.be.equals(-1)
    })

    it("deve subtrair a - b com resultado erro", ()=>{
         let resultado= Calculadora.subtracao('a','b')
         expect(resultado).to.be.equals("erro")
    })

    it("deve subtrair 4 - b com resultado erro", ()=>{
        let resultado= Calculadora.subtracao(4,'b')
        expect(resultado).to.be.equals("erro")
    })
    it("deve subtrair a - 5 com resultado erro", ()=>{
        let resultado= Calculadora.subtracao('a',5)
        expect(resultado).to.be.equals("erro")
   })
 
    it("deve subtrair -4 -5 com resultado -9", ()=>{
        let resultado= Calculadora.subtracao(-4,5)
        expect(resultado).to.be.equals(-9)
    })


})

describe('teste multiplicação',()=>{
    it("deve multiplicar 4 * 5 com resultado 20",()=>{
        let resultado= Calculadora.multiplicacao(4,5)
        expect(resultado).to.be.equals(20)
    })

    it("deve multiplicar a * b com resultado erro", ()=>{
        let resultado= Calculadora.multiplicacao('a','b')
        expect(resultado).to.be.equals('erro')
    })
    it("deve multiplicar 4 - b com resultado erro", ()=>{
        let resultado= Calculadora.multiplicacao(4,'b')
        expect(resultado).to.be.equals("erro")
    })
    it("deve multiplicar a - 5 com resultado erro", ()=>{
        let resultado= Calculadora.multiplicacao('a',5)
        expect(resultado).to.be.equals("erro")
    })

    it("deve multiplicar -4 * 5 com resultado -20", ()=>{
        let resultado= Calculadora.multiplicacao(-4,5)
        expect(resultado).to.be.equals(-20)
    })

    describe('teste divisão',()=>{
        it("deve dividir 4 / 5 com resultado 0.8",()=>{
            let resultado= Calculadora.divisao(4,5)
            expect(resultado).to.be.equals(0.8)
        })
    
        it("deve dividir a / b com resultado erro", ()=>{
            let resultado= Calculadora.divisao('a','b')
            expect(resultado).to.be.equals('erro')
        })
        it("deve dividirr a / 5 com resultado erro", ()=>{
            let resultado= Calculadora.divisao('a',5)
            expect(resultado).to.be.equals('erro')
        })
        it("deve multiplicar 4 / b com resultado erro", ()=>{
            let resultado= Calculadora.divisao(4,'b')
            expect(resultado).to.be.equals("erro")
        })
        it("deve multiplicar 4 / 0 com resultado não é possivel dividir por 0", ()=>{
            let resultado= Calculadora.divisao(4, 0)
            expect(resultado).to.be.equals("não é possivel dividir por 0")
        })
    
        it("deve dividir -4 / 5 com resultado -0.8", ()=>{
            let resultado= Calculadora.divisao(-4,5)
            expect(resultado).to.be.equals(-0.8)
        })
    
    
    })

})




// describe('primeiro teste', ()=>{

//     it('verificar igualdade', ()=>{
//         let aux=2;
//         assert.strictEqual(aux,2)

//     })
//     // it('verificar desigualdade', ()=>{ //verificar erro
//     //     let aux=3;
//     //     assert.strictEqual(aux,2)

//     // })
//     it('verificar desigualdade', ()=>{
//         let aux=3;
//         assert.notStrictEqual(aux,2)

//     })

// })

// describe('segundo teste', ()=>{

//     it('verificar igualdade', ()=>{
//         let aux='carro';
//         assert.strictEqual(aux,'carro')

//     })
//     // it('verificar desigualdade', ()=>{
//     //     let aux=3;
//     //     assert.strictEqual(aux,2)

//     // })
//     it('verificar desigualdade', ()=>{
//         let aux='carro';
//         assert.notStrictEqual(aux,'charrete')

//     })
    
//     it('verificar igualdade de tamanho', ()=>{
//         let aux='carro';
//         assert.strictEqual(aux.length,5)

//     })

// })

//teste chai
// import assert from 'assert'
// import chai from 'chai';

// let expect = chai.expect

// describe('primeiro teste', ()=>{

//     it('verificar igualdade', ()=>{
//         let aux=2;
//         expect(aux).to.be.equals(2)
//         expect(aux).to.be.a('number')

//     })
//     it('verificar desigualdade', ()=>{ //verificar erro
//          let aux=3;
//          //expect(aux).to.be.equals(2) // erro de valor
//          //expect(aux).to.be.a('number') // verificar o erro de valor

//          expect(aux).to.be.equals(3)
//          expect(aux).to.be.a('string')

//     })
//     it.only('verificar desigualdade', ()=>{
//         let aux=3;
//         expect(aux).not.equals(2)

//     })

// })

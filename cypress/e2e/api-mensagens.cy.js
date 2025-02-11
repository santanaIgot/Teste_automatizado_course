describe('api adopet', () => {
    //Math.random é um método do javascript que vai ser multiplicado por 1000
    // const tempoEsperado = Math.random() * 1000
    const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZmZmNjQ0Mi05NjBkLTQyOTgtO
    Tc2OC04Y2RmMGY0NmU1ZTkiLCJhZG9wdGVyTmFtZSI6Iklnb3IiLCJpYXQiOjE3Mzg2ODYxOTksImV4cCI6MTczODk0NTM5OX0
    `

    it('mensagens da api', () => {
        cy.request({
            method:'GET',
            url:'https://adopet-api-i8qu.onrender.com/mensagem/5fff6442-960d-4298-9768-8cdf0f46e5e9',
            headers:{authorization}
        }).then((res)=>{
            //expect quer dizer que esta esperando uma resposta do status, o parametro res precisa ser igual a 200
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('msg')
            //aqui ele vai consumir o tempo esperado, que é o método que armazenamos na variável acima
            //lte significa menor que 
            //nesta linda de código vamos espera que esse tempo seja inferior(lte) a nossa variável 'tempoEsperado'
            // expect(res.duration).to.be.lte(tempoEsperado)
        })
    })
})
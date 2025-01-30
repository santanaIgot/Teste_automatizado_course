describe('api adopet', () => {
    const authorization = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
    eyJzdWIiOiI1ZmZmNjQ0Mi05NjBkLTQyOTgtOTc2OC04Y2RmMGY0NmU1ZTkiLCJhZG9wdGVyT
    mFtZSI6Iklnb3IiLCJpYXQiOjE3MzgyNTkwOTQsImV4cCI6MTczODUxODI5NH0
    .QByrIhxko0GkxRD0DrtrTT44KESdi_KQRybuyOA460`

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
        })
    })
})
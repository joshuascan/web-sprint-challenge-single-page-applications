describe('Pizza Ordering App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    })

    const nameInput = () => cy.get('input[name=name]')
    const sizeInput = () => cy.get('select')
    const checkboxInputs = () => cy.get('[type="checkbox"]')
    const specialInput = () => cy.get('#special-text')
    const submitBtn = () => cy.get('#order-button')

    it('the proper elements are showing', () => {
        nameInput().should('exist')
        sizeInput().should('exist')
        checkboxInputs().should('exist')
        specialInput().should('exist')
        submitBtn().should('exist')
    })

    describe('Filling out text inputs', () => {
        it('can type in the text inputs', () => {
            nameInput()
                .should('have.value', '')
                .type('Test Name')
                .should('have.value', 'Test Name')
            specialInput()
                .should('have.value', '')
                .type('Extra mozzarella cheese')
                .should('have.value', 'Extra mozzarella cheese')
        })
    })

    describe('Selecting checkboxes', () => {
        it('can select multiple toppings', () => {
            checkboxInputs()
                .should('not.be.checked')
                .check()
                .should('be.checked')
        })
    })

    describe('Submitting form data', () => {
        it('can submit the order information', () => {
            nameInput().type('Button Test')
            sizeInput().select('small')
            submitBtn().click()
        })
    })
})
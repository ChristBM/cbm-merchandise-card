customElements.define( 'cbm-merchandise-card', class merchandiseCard extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({ mode: "open" })
        this.template = document.createElement('template')
        console.log("cbm-merchandise-card constructor")
    }

    static get observedAttributes() {
        return [ 'brand', 'prod_img', 'alt_img', 'name', 'model', 'price', 'name_button', 'effect_3d' ]
    }

    attributeChangedCallback( atribute, oldValue, newValue ) {
        console.log("cbm-merchandise-card attributeChanged")
        if( oldValue !== newValue ){
            this[ atribute ] = newValue
        }
    }

    mouseMovedCard(event) {
        this.card = this.shadowRoot.querySelector('.card')

        let xAxis =  window.innerWidth / 2 - event.pageX
        let yAxis =  window.innerHeight / 2 - event.pageY

        this.card.style.transform = `rotateY(${yAxis/20}deg) rotateX(${xAxis/25}deg)`
    }

    mouseEnterCard(event) {
        this.card = this.shadowRoot.querySelector('.card')
        this.brand = this.shadowRoot.querySelector('.card__brand')
        this.imagen = this.shadowRoot.querySelector('.card__img')
        this.btn_card = this.shadowRoot.querySelector('.card__btn')

        this.style.transition = "none"
        this.brand.style.transform = "scale(1.02) translateZ(20px)"
        this.btn_card.style.transform = "scale(1.04) translateZ(40px)"
        if( this.card.clientWidth === 650 ){
            this.imagen.style.transform = "scale(1.7) translateZ(100px) rotateZ(-15deg) translateY(-20px)"
        }
        else{
            this.imagen.style.transform = "scale(1.1) translateZ(100px) rotateZ(-15deg) translateY(-20px)"
        }
    }

    mouseLeaveCard(event) {
        this.card = this.shadowRoot.querySelector('.card')
        this.brand = this.shadowRoot.querySelector('.card__brand')
        this.imagen = this.shadowRoot.querySelector('.card__img')
        this.btn_card = this.shadowRoot.querySelector('.card__btn')

        this.card.style.transition = "all 0.5s ease"
        this.card.style.transform = "rotateY(0deg) rotateX(0deg)"
        this.brand.style.transform = "scale(1) translateZ(0px)"
        this.btn_card.style.transform = "translateZ(0px)"
        if( this.card.clientWidth === 650 ){
            this.imagen.style.transform = null
        }
        else{
            this.imagen.style.transform = null
        }
    }

    handleEvent(event) {
        if( event.type === "mousemove" ){
            this.mouseMovedCard(event)
        }
        else if( event.type === "mouseenter" ){
            this.mouseEnterCard(event)
        }
        else if( event.type === "mouseleave" ){
            this.mouseLeaveCard(event)
        }
    }

    getTemplate() {
        this.template.innerHTML = `
            ${this.getStyles()}
            <section class="card selectDisable">
                <div class="card__section-up">
                    <p class="card__brand">${this.brand}</p>
                    <img class="card__img" src="${this.prod_img}" alt="${this.alt_img}">
                </div>
                <div class="card__section-down">
                    <div class="card__text">
                        <h2 class="card__name">${this.name}</h2>
                        <p class="card__model">${this.model}</p>
                    </div>
                    <p class="card__description"><slot></slot></p>
                    <div class="card__pricebuy">
                        <p class="card__price">${this.price}</p>
                        <button class="card__btn">${this.name_button}</button>
                    </div>
                </div>
            </section>
        `
        return this.template
    }

    getStyles() {
        return `
        <style>
        :host {
            /* colors */
            --primary-color: #504682;
            --secundary-color: rgb(228, 228, 228);
            /* brand-style */
            --brand-color: rgba(54, 50, 50, 0.3);
            --brand-font: Arial, Helvetica, sans-serif;
            --brand-size: 90px;
            /* name-style */
            --name-color: rgb(27, 25, 25);
            --name-font: Arial, Helvetica, sans-serif;
            --name-size: 22px;
            /* model-style */
            --model-color: rgb(124, 120, 120);
            --model-font: Arial, Helvetica, sans-serif;
            --model-size: 10px;
            /* description-style */
            --description-color: rgb(51, 51, 51);
            --description-font: Arial, Helvetica, sans-serif;
            --description-size: 12px;
            /* price-style */
            --price-color: rgb(110, 106, 106);
            --price-font: Arial, Helvetica, sans-serif;
            --price-size: 25px;
            /* btn-style */
            --btn-width: 80px;
            --btn-height: 30px;
            --btn-border-radius: 20px;
            /* 3d */
            perspective: 1000px;
            perspective-origin: center;
        }


        .card {
            display: flex;
            min-width: 270px;
            max-width: 300px;
            height: 550px;
            padding: 0 12px;
            place-self: center;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            box-shadow: 0px 0px 10px rgba(22, 22, 22, 0.925);
            transform-style: preserve-3d;
        }


        /* -------------------------------------------- */
        .card__section-up {
            display: flex;
            width: 100%;
            height: 45%;
            padding: 0 12px;
            position: relative;
            justify-content: flex-start;
            align-items: flex-start;
            background-color: var(--primary-color);
        }


        .card__brand {
            width: 100%;
            height: auto;
            margin: 5px 0 0 0;
            font-size: var(--brand-size);
            font-weight: bold;
            font-family: var(--brand-font);
            color: var(--brand-color);
            transition: transform 0.75s ease-out;
        }


        .card__img {
            width: 90%;
            height: auto;
            position: absolute;
            bottom: -45px;
            right: 20px;
            object-fit: contain;
            transition: transform 0.75s ease-out;
        }


        /* -------------------------------------------- */
        .card__section-down {
            width: 100%;
            height: 55%;
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            flex-direction: column;
            padding: 0 12px;
            background-color: var(--secundary-color);
        }


        .card__text {
            display: flex;
            width: 100%;
            height: 40px;
            margin-top: 30px;
            margin-bottom: 10px;
            justify-content: flex-start;
            align-items: baseline;
        }


        .card__name {
            width: 60%;
            height: auto;
            margin: 0;
            font-size: var(--name-size);
            font-family: var(--name-font);
            color: var(--name-color);
        }


        .card__model {
            width: 40%;
            height: auto;
            margin: 0;
            text-transform: uppercase;
            font-weight: bold;
            font-size: var(--model-size);
            font-family: var(--model-font);
            color: var(--model-color);
        }


        .card__description {
            width: 100%;
            height: 130px;
            margin: 0;
            padding: 10px 0;
            text-align: left;
            font-size: var(--description-size);
            font-family: var(--description-font);
            color: var(--description-color);
        }


        .card__pricebuy {
            display:flex;
            width: 100%;
            height: 60px;
            justify-content: space-between;
            align-items: center;
        }


        .card__price {
            margin: 0;
            font-weight: bold;
            font-size: var(--price-size);
            font-family: var(--price-font);
            color: var(--price-color);
        }


        .card__btn {
            width: var(--btn-width);
            height: var(--btn-height);
            border-style: none;
            border-radius: var(--btn-border-radius);
            font-size: 11px;
            font-weight: bold;
            color: var(--secundary-color);
            background-color: var(--primary-color);
            box-shadow: 0px 0px 10px rgba(22, 22, 22, 0.925);
            transition-property: transform;
            transition-duration: 100ms;
            transition-timing-function: ease-out;
        }


        /* -------------------------------------------- */
        .card__btn:hover {
            cursor: pointer;
            background-color: #7b6dc0;
            color: #161618;
        }


        .card__btn:active {
            transform: scale(0.9);
            transition-timing-function: ease-in;
        }


        /* -------------------------------------------- */
        @media screen and (min-width: 900px) {
            .card {
                max-width: 650px;
                width: 650px;
                height: 400px;
                padding: 0;
                flex-direction: row;
            }

            .card__section-up {
                width: 50%;
                height: 100%;
            }

            .card__img {
                bottom: 70px;
                right: 60px;
                transform: rotateZ(-30deg) scale(1.6);
            }

            .card__section-down {
                width: 50%;
                height: 100%;
                padding-inline: 40px;
            }

            .card__text {
                width: 100%;
                height: 80px;
                margin-top: 65px;
                margin-bottom: 0px;
                flex-direction: column;
            }

            .card__name {
                width: 100%;
                font-size: 30px;
            }

            .card__model {
                width: 100%;
                font-size: 13px;
            }

            .card__description {
                font-size: 13px;
            }

            .card__pricebuy {
                margin-top: 20px;
            }
        }


        .selectDisable {
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -o-user-select: none;
            user-select: none;
        }
        </style>
        `
    }

    renderComponent() {
        this.shadowRoot.appendChild( this.getTemplate().content.cloneNode( true ) )
    }

    connectedCallback() {
        this.renderComponent()
        console.log("cbm-merchandise-card connected")
        if( this.effect_3d === 'true' ){
            this.container = this.shadowRoot.querySelector(".card")
            this.addEventListener( "mousemove", this )
            this.addEventListener( "mouseenter", this )
            this.addEventListener( "mouseleave", this )
        }
    }

    disconnectedCallback() {
        console.log("cbm-merchandise-card disconnected")
        this.removeEventListener( "mousemove", this )
        this.removeEventListener( "mouseenter", this )
        this.removeEventListener( "mouseleave", this )
    }
})


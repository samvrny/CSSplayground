let vm = Vue.createApp({
    data() {
        return {
            perspective: 100,
            rotateY: 0,
            rotateX: 0,
            rotateZ: 0,
            color: '#8d81f3'
        }
    },
    methods: {
        reset() {
            this.perspective = 100
            this.rotateX = 0
            this.rotateY = 0
            this.rotateZ = 0
            this.color = '#8d81f3'
        },
        async copy() {
            let text = `transform:${this.changes.transform}background: ${this.changeColor.background};`
            await navigator.clipboard.writeText(text)

            alert(text + " copied to clipboard!")
        }
    },
    computed: {
        changes() {
            return {
                transform: `
                perspective(${this.perspective}px)
                rotateX(${this.rotateX}deg)
                rotateY(${this.rotateY}deg)
                rotateZ(${this.rotateZ}deg)
                `
            }
        },
        changeColor() {
            return {
                background: `${this.color}`
            }
        }
    }
}).mount('#app')
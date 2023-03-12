let vm = Vue.createApp({
    data() {
        return {
            perspective: 100,
            rotateY: 0,
            rotateX: 0,
            rotateZ: 0
        }
    },
    methods: {
        reset() {
            this.perspective = 100
            this.rotateX = 0
            this.rotateY = 0
            this.rotateZ = 0
        },
        async copy() {
            let text = `transform:${this.changes.transform};`
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
        }
    }
}).mount('#app')
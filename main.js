new Vue({
    el: '#app',
    data: {
        nombre: '',
        apellido: '',
        correo: '',
        edad: null,
        edadConsulta: null,
        mensajeSaludo: '',
        etapaVida: ''
    },
    methods: {
        saludar() {
            alert(this.mensajeSaludo = `Saludos ${this.nombre} ${this.apellido}, tu correo es ${this.correo}`);
        },
        determinarEtapa() {
            if (this.edadConsulta < 0) {
                this.etapaVida = 'Edad no válida';
            } else if (this.edadConsulta <= 12) {
                this.etapaVida = 'Niñez';
            } else if (this.edadConsulta <= 17) {
                this.etapaVida = 'Adolescencia';
            } else if (this.edadConsulta <= 64) {
                this.etapaVida = 'Adulto';
            } else {
                this.etapaVida = 'Adulto Mayor';
            }
        }
    }
});
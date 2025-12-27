class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        switch (this.tipo.toLowerCase()) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'um ataque desconhecido';
        }

        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}

const grupoDeHerois = [
    new Heroi("Gandalf", 2000, "Mago"),
    new Heroi("Conan", 30, "Guerreiro"),
    new Heroi("Bruce Lee", 32, "Monge"),
    new Heroi("Hanzo", 25, "Ninja"),
    new Heroi("Professor Tech", 40, "Dev")
];

for (let i = 0; i < grupoDeHerois.length; i++) {
    grupoDeHerois[i].atacar();
}

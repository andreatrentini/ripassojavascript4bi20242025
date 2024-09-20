class Studente {
    private int id;
    private string nome;
    private string cognome;

    public Studente(int id) {
        this.id = id;
    }

    public int getId() {
        return this.id;
    }

    public string getNome() {
        return this.nome;
    }

    public void setNome(string nome) {
        this.nome = nome;
    }
}

Studente s = new Studente();
s.id = 1;

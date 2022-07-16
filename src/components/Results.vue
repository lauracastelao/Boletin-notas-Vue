<script>
export default {
  name: "Notas",
  data: () => ({
    nota: "",
    course: "",
    name: "",
    message: "",
    finalMessage: [],
    notaRules: [
      (value) => !!value || "Campo requerido.",
      (value) => (value || "").length < 3 || "Máximo 2 dígitos",
      (value) => {
        const pattern = /^\d+$/;
        return pattern.test(value) || "Nota incorrecta. Solo dígitos";
      },
    ],
  }),
  methods: {
    calificacion() {
      let nota = this.nota;
      if (nota < 3 && nota >= 0) {
        this.message = "Muy deficiente";
      }
      if (nota >= 3 && nota < 5) {
        this.message = "Inuficiente";
      }
      if (nota < 6 && nota >= 5) {
        this.message = "Suficiente";
      }
      if (nota >= 6 && nota < 7) {
        this.message = "Bien";
      }
      if (nota >= 7 && nota < 9) {
        this.message = "Notable";
      }
      if (nota >= 9) {
        this.message = "Sobresaliente";
      }
      this.finalMessage.push(this.course + " - " + this.message);
    },
  },
};
</script>

<template>
<p>holaaaaaaaaaa</p>

</template>



<style lang="css" scoped>
body{
    background-color: white;
}
</style>
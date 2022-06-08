<template>
  <section class="src-components-notas">
    <h1>NOTAS</h1>
    <hr />
     
     <vue-form :state="formstate" @submit.prevent="enviar()">

      <validate tag="div" class="form-group row">
        <label for="nombre" class="col-sm-1 col-form-label">Nombre</label>
        <div class="col-sm-10">
          <input
            type="text"
            id="nombre"
            v-model.trim="formData.nombre"
            required
            :minlength="nombreMinLength"
            :maxlength="nombreMaxLength"
            name="nombre"
            autocomplete="off"
            placeholder="Nombre"
            class="form-control"
          />
        </div>
      </validate>

      <validate tag="div" class="form-group row">
        <label for="apellido" class="col-sm-1 col-form-label">Apellido</label>
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            v-model.trim="formData.apellido"
            required
            :minlength="apellidoMinLength"
            :maxlength="apellidoMaxLength"
            name="apellido"
            id="apellido"
            placeholder="Apellido"
          />
        </div>
      </validate>

      <validate tag="div"  class="form-group row">
        <label for="nota" class="col-sm-1 col-form-label">Nota</label>
        <div class="col-sm-10">
          <input
            type="number"
            class="form-control"
            v-model.number="formData.nota"
            required
            :min="notaMin"
            :max="notaMax"
            name="nota"
            id="nota"
            placeholder="Nota"
          />
        </div>
      </validate>

      <div class="form-group row">
        <div class="col-sm-10">
          <button
            type="submit"
            :disabled="formstate.$invalid"
            class="btn btn-success"
          >Enviar
          </button>
        </div>
      </div>
    </vue-form>

    <div>
      <table class="table">
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Nota</th>
        </tr>
        <tr v-for="(nota, index) in notas" :key="index">
          <td>{{ nota.nombre }}</td>
          <td>{{ nota.apellido }}</td>
          <td>{{ nota.nota }}</td>
        </tr>
      </table>
    </div>
  </section>
</template>

<script lang="js">
  export default  {
    name: 'src-components-notas',
    props: [],
    mounted () {
    },
    data () {
      return {
      notas: [],
      formstate: {},
      formData: this.getInitialData(),
      formState : {},
      nombreMinLength : 3,
      nombreMaxLength : 15,
      apellidoMinLength : 3,
      apellidoMaxLength : 15,
      notaMin: 0,
      notaMax: 10
    }
    },
    methods: {
      getInitialData() {
      return {
        nombre: null,
        apellido: null,
        nota: null,
      };
    },
    enviar(){
     let nota = { ...this.formData };
      this.notas.push(nota);
      this.formData = this.getInitialData();
      this.formstate._reset();
    }
  },
  computed: {},
};
</script>

<style scoped lang="css">
.src-components-notas {
}
</style>
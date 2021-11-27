const App = {
  data() {
    return {
      counter: 0,
      title: 'Список заметок:',
      placeholder: 'Placeholder2',
      inputValue: '',
      notes: [],
    };
  },

  methods: {
    addNote() {
      if (this.inputValue) {
        this.notes.push(this.inputValue);
        this.inputValue = '';
      }
    },

    deleteNote(index, event) {
      this.notes.splice(index, 1);
    },
  },
  computed: {
    double() {
      console.log(22);
      return this.notes.length;
    },
  },
  watch: {
    inputValue(value) {
      console.log(value);
    },
  },
};

const app = Vue.createApp(App);

app.mount('#app');

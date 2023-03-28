Vue.component("input-field", {
  template: `
  <form @submit.prevent="addTodo()" class='addtodo'>
    <input type="text" placeholder="some thing to do" v-model="todo">
    <button>Add to do</button>
  </form>
  `,
  data() {
    return {
      todo: "",
    };
  },
  methods: {
    addTodo() {
      console.log("add todo :", this.text);

      this.$emit("add-todo", this.todo);
      this.todo = "";
    },
  },
});

Vue.component("todo", {
  props: {
    text: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
  },
  template: `
    <div class="todo">
      <p>{{text}}</p><button @click="deleteTodo(id)">delete</button>
    </div>

  `,
  data() {
    return {};
  },
  methods: {
    deleteTodo(id) {
      console.log("delete todo id:", id);
      this.$emit("delete-todo", id);
    },
  },
});

const vm = new Vue({
  el: "#root",
  data: {
    todos: [
      { id: 1, text: "sleep well" },
      { id: 3, text: "eat the beakfast" },
      { id: 2, text: "read a book" },
    ],
  },
  methods: {
    addTodo(text) {
      this.todos.push({ id: Math.floor(Math.random() * 1000), text });
      console.log("todo is added", this.todos);
    },
    deleteTodo(id) {
      this.todos = this.todos.filter((item) => item.id !== id);
      console.log("todo is deleted", this.todos);
    },
  },
});

<template>
  <div class="card">
    <img src="../assets/img/me.webp" alt="example" class="rounded-top">
    <div class="card-body">
      <div class="fs-4 fw-bold mb-3">
        Let's connect!
      </div>
      <form class="contact-form" @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Name</label>
          <input class="form-control" type="text" id="name" v-model="editable.name" required>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input class="form-control" type="email" id="email" v-model="editable.email" required>
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea class="form-control" id="message" v-model="editable.message" required></textarea>
        </div>
        <button class="btn btn-primary" type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';


export default {
  setup() {
    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // Use `true` for port 465, `false` for all other ports
      auth: {
        user: "maddison53@ethereal.email",
        pass: "jn7jnAPss4f63QBp6D",
      },
    });
    const editable = ref({
      name: '',
      email: '',
      message: ''
    })

    return {
      editable,
      async handleSubmit() {
        const info = await transporter.sendMail({
          from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
          to: "bar@example.com, baz@example.com", // list of receivers
          subject: "Hello ✔", // Subject line
          text: "Hello world?", // plain text body
          html: "<b>Hello world?</b>", // html body
        });
        console.log("Message sent: %s", info.messageId);

        // For a free Serverless option consider a google form 
        // follow this tutorial https://blog.webjeda.com/google-form-customize/ 
        // Easy Mode - https://stefano.brilli.me/google-forms-html-exporter/

        // Server: You can use an API or send an email using a service like Nodemailer
        // Example: axios.post('/api/contact', { name: this.name, email: this.email, message: this.message })

        // Then show a success message or redirect to a thank you page
      }
    };
  }
};
</script>

<style scoped>
/* Add your custom styles here */
</style>

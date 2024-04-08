<template>
  <div class="card">
    <img src="../assets/img/me.webp" alt="example" class="rounded-top">
    <div class="card-body">
      <div class="fs-4 fw-bold mb-3">
        Let's connect!
      </div>
      <form
        action="https://docs.google.com/forms/d/e/1FAIpQLSdkhxKUuGmmD50Hsi8GtZDLucyezfXAOp2RMHJw7QxIRRG8hA/formResponse"
        target="_self" id="bootstrapForm" method="POST">
        <fieldset>
          <h2>Contact Information<br><small></small></h2>
        </fieldset>



        <fieldset>
          <legend for="1633920210">Name</legend>
          <div class="form-group">
            <input id="2005620554" type="text" name="entry.2005620554" class="form-control" required>
          </div>
        </fieldset>



        <fieldset>
          <legend for="227649005">Email</legend>
          <div class="form-group">
            <input id="1045781291" type="text" name="entry.1045781291" class="form-control" required>
          </div>
        </fieldset>



        <fieldset>
          <legend for="1846923513">Comments</legend>
          <div class="form-group">
            <textarea id="839337160" name="entry.839337160" class="form-control"></textarea>
          </div>
        </fieldset>

        <input type="hidden" name="fvv" value="1">
        <input type="hidden" name="fbzx" value="-7425823956835125764">
        <input type="hidden" name="pageHistory" value="0">

        <input class="btn btn-primary" type="submit" value="Submit">
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';


export default {
  setup() {
    const editable = ref({
      name: '',
      email: '',
      message: ''
    })

    return {
      editable,
      async handleSubmit() {


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

<template>
  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" ref="recipeModal">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel"><b>New Recipe</b></h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="closeModal">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="saveChanges">
            <div class="form-group">
              <label for="recipient-title" class="col-form-label">Recipe's Name:</label>
              <input type="text" class="form-control" id="recipient-title" v-model="recipeDetails.title" required>

              <label for="recipient-image" class="col-form-label">Image URL:</label>
              <input type="text" class="form-control" id="recipient-image" placeholder="https://example.example.com.jpg" v-model="recipeDetails.image" required>

              <label for="recipient-readyInMinutes" class="col-form-label">Preparation Time (minutes):</label>
              <input type="number" class="form-control" id="recipient-readyInMinutes" v-model="recipeDetails.readyInMinutes" min="1" step="1" required>

              <label for="recipient-Instructions" class="col-form-label">Instructions:</label>
              <input type="text" class="form-control" id="recipient-Instructions" v-model="recipeDetails.Instructions">

              <label for="recipient-servings" class="col-form-label">Amount of Servings:</label>
              <input type="number" class="form-control" id="recipient-servings" v-model="recipeDetails.servings" min="1" step="1" required>

              <div class="check-group">
                <label class="form-check-label">
                  <input type="checkbox" class="form-check-input" v-model="recipeDetails.vegetarian"> Vegetarian
                </label>

                <label class="form-check-label">
                  <input type="checkbox" class="form-check-input" v-model="recipeDetails.vegan"> Vegan
                </label>

                <label class="form-check-label">
                  <input type="checkbox" class="form-check-input" v-model="recipeDetails.glutenFree"> Gluten Free
                </label>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="closeModal">Close</button>
              <button type="submit" class="btn btn-primary">Save changes</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { mockAddUserRecipe } from "../services/user.js";

export default {
  data() {
    return {
      recipeDetails: {
        id: null,
        title: '',
        image: '',
        readyInMinutes: '',
        aggregateLikes: 0,
        instructions: '',
        servings: '',
        vegetarian: false,
        vegan: false,
        glutenFree: false
      }
    };
  },
  methods: {
    saveChanges() {
      if (!this.recipeDetails.title || !this.recipeDetails.image || !this.recipeDetails.readyInMinutes || !this.recipeDetails.servings) {
        alert("All fields must be filled out.");
        return;
      }
      const response = mockAddUserRecipe(this.recipeDetails);

      if (response && response.data && response.data.success) {
        console.log(response.data.message);
        this.closeModal();
      } else {
        console.error('Failed to add recipe');
      }
    },
    closeModal() {
      this.recipeDetails = { id: null, title: '', image: '', readyInMinutes: '', vegetarian: false, vegan: false, glutenFree: false }; // Clear form
      this.$refs.recipeModal.hide(); // Close the modal
    }
  }
};
</script>

<style>
  .check-group {
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    justify-content: space-between;
    margin-left: 50px;
    margin-right: 50px;
  }
</style>

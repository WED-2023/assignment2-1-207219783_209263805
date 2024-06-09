
<template>
    <div class="modal fade" :id="modalId" tabindex="-1" role="dialog" :aria-labelledby="ariaLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" :id="ariaLabel">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            ...
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['modalId', 'ariaLabel']
  };
  </script>

<style>
.modal {
  display: none; /* Hide the modal by default */
  position: fixed; /* Position the modal relative to the viewport */
  top: 50%; /* Center the modal vertically */
  left: 50%; /* Center the modal horizontally */
  transform: translate(-50%, -50%); /* Center the modal precisely */
  z-index: 1000; /* Ensure the modal is displayed in front of other elements */
}

.modal.show {
  display: block; /* Show the modal when the 'show' class is added */
}

.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent overlay behind the modal */
  z-index: 900; /* Displayed behind the modal */
}
</style>
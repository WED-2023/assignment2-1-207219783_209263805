<template>
    <div class="container">
      <button 
        :style="{ top: position.y + 'px', left: position.x + 'px' }" 
        class="runaway-button" 
        @mouseover="moveButton"
      >
        Catch Me!
      </button>
    </div>
  </template>
  

  <script>
export default {
  data() {
    return {
      position: { x: 100, y: 100 } // Initial position of the button
    };
  },
  methods: {
    moveButton() {
      // Calculate new positions randomly within the container boundaries
      const containerWidth = 600; // Assume container width, match with actual
      const containerHeight = 400; // Match with container height in CSS

      // Generate random positions
      const newX = Math.random() * (containerWidth - 50); // 50 is roughly the button width
      const newY = Math.random() * (containerHeight - 20); // 20 is roughly the button height

      // Update position data
      this.position.x = newX;
      this.position.y = newY;
    }
  }
}
</script>


<style scoped>
.container {
  position: relative;
  height: 400px; /* Fixed height to provide a boundary for the button */
}

.runaway-button {
  position: absolute;
  padding: 10px 20px;
  cursor: pointer;
  transition: top 0.3s ease, left 0.3s ease; /* Smooth transition for movement */
}
</style>

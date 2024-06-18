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
  